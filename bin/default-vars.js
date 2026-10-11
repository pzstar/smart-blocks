/**
 * Generates the default block variables.
 *
 * Each control in a block has a default for every CSS variable it owns: unset
 * mobile values fall back to tablet, tablet to desktop, and so on. Those
 * defaults used to be written into the CSS of every single block. They are
 * now written once:
 *
 *  - inc/assets/css/sb-style.css, "Default block variables" section (front end)
 *  - src/utils/default-vars.json (editor, see src/utils/default-vars.js)
 *
 * and a block only saves the variables that differ from them.
 *
 * The list of controls is read from the helper calls in each block's edit.js,
 * so this must run again whenever a control is added or removed. `npm run
 * build` does that.
 */
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const blocksDir = path.join(root, 'src/blocks');
const cssFile = path.join(root, 'inc/assets/css/sb-style.css');
const jsonFile = path.join(root, 'src/utils/default-vars.json');

// The layout blocks carry their id on the element that has the block class.
// The post modules share one wrapper class, added in PHP and in the editor.
const layoutBlocks = {
  'section/columns': {name: 'smart-blocks/columns', selector: '.wp-block-smart-blocks-columns'},
  'section/column': {name: 'smart-blocks/column', selector: '.wp-block-smart-blocks-column'},
  container: {name: 'smart-blocks/container', selector: '.wp-block-smart-blocks-container'},
};
const moduleSelector = '.sb-post-module';

// helper.js is an ES module with no imports; evaluate it to reuse the real defaults.
const helperSource = fs.readFileSync(path.join(root, 'src/utils/helper.js'), 'utf8');
const {defaultVars} = new Function(helperSource.replace(/^export \{([^}]+)\};?\s*$/m, 'return {$1};'))();

const callPattern = /\b(dimensionVars|responsiveDimensionVars|responsiveSliderVars|responsiveColumnWidthVars|boxShadowVars|responsiveTypographyVars|responsiveGapVars|responsiveGapColumnVars|bgVars)\(\s*'([a-z0-9-]+)'/g;

const fail = (message) => {
  console.error('default-vars: ' + message);
  process.exit(1);
};

const readCalls = (file) => {
  const calls = new Map();
  const source = fs.readFileSync(file, 'utf8');
  let match;

  while ((match = callPattern.exec(source))) {
    calls.set(match[1] + ':' + match[2], {helper: match[1], varname: match[2]});
  }

  return calls;
};

const toDeclarations = (calls, label) => {
  const vars = new Map();

  for (const {helper, varname} of calls.values()) {
    for (const [name, value] of defaultVars(helper, varname)) {
      if (vars.has(name) && vars.get(name) !== value) {
        fail(`${label}: ${name} has two different defaults ("${vars.get(name)}" and "${value}").`);
      }
      vars.set(name, value);
    }
  }

  return vars;
};

const blockDirs = [];
const walk = (dir) => {
  for (const entry of fs.readdirSync(dir, {withFileTypes: true})) {
    if (!entry.isDirectory()) {
      continue;
    }
    const full = path.join(dir, entry.name);
    if (fs.existsSync(path.join(full, 'edit.js')) && readCalls(path.join(full, 'edit.js')).size) {
      blockDirs.push(path.relative(blocksDir, full));
    }
    walk(full);
  }
};
walk(blocksDir);

const groups = [];
const moduleCalls = new Map();
const moduleNames = [];
const perModule = [];

for (const dir of blockDirs.sort()) {
  const calls = readCalls(path.join(blocksDir, dir, 'edit.js'));

  if (layoutBlocks[dir]) {
    groups.push({names: [layoutBlocks[dir].name], selector: layoutBlocks[dir].selector, vars: toDeclarations(calls, dir)});
    continue;
  }

  moduleNames.push('smart-blocks/' + dir);
  perModule.push({dir, vars: toDeclarations(calls, dir)});
  calls.forEach((call, key) => moduleCalls.set(key, call));
}

const moduleVars = toDeclarations(moduleCalls, 'post modules');

// The modules share one rule, so a module also receives the defaults of
// controls it does not have. That is only harmless when such a default behaves
// exactly like the variable not being set at all.
const actsAsUnset = (value) => 'initial' === value || 'inherit' === value || /^var\(--sb-[a-z0-9-]+\)$/.test(value);

for (const [name, value] of moduleVars) {
  if (actsAsUnset(value)) {
    continue;
  }
  const missing = perModule.filter((module) => !module.vars.has(name)).map((module) => module.dir);
  if (missing.length) {
    fail(`${name} defaults to "${value}" but is not used by: ${missing.join(', ')}. Give those modules their own group.`);
  }
}

for (const group of groups) {
  for (const name of group.vars.keys()) {
    if (moduleVars.has(name)) {
      fail(`${name} is used by both a layout block and a post module.`);
    }
  }
}

groups.push({names: moduleNames, selector: moduleSelector, vars: moduleVars});

const compact = (vars) => Array.from(vars, ([name, value]) => `${name}:${value}`).join(';');

// Editor: block name => declarations.
const editorDefaults = {};
for (const group of groups) {
  const declarations = compact(group.vars);
  group.names.forEach((name) => {
    editorDefaults[name] = declarations;
  });
}

// One shared string for the modules instead of 22 copies of it.
const json = {
  module: compact(moduleVars),
  modules: moduleNames,
  layout: Object.fromEntries(groups.slice(0, -1).map((group) => [group.names[0], compact(group.vars)])),
};
fs.writeFileSync(jsonFile, JSON.stringify(json, null, 2) + '\n');

// Front end: one rule per group.
const start = '/* Default block variables: generated by bin/default-vars.js, do not edit by hand */';
const end = '/* End of default block variables */';
const rules = groups.map((group) => `${group.selector}{${compact(group.vars)}}`).join('\n');
const section = `${start}\n${rules}\n${end}`;

let css = fs.readFileSync(cssFile, 'utf8');
const from = css.indexOf(start);
const to = css.indexOf(end);

if (from !== -1 && to !== -1) {
  css = css.slice(0, from) + section + css.slice(to + end.length);
} else {
  css = css.replace(/\s*$/, '\n\n') + section + '\n';
}

fs.writeFileSync(cssFile, css);

console.log(`default-vars: ${groups.map((group) => `${group.selector} ${group.vars.size}`).join(', ')} variables written.`);
