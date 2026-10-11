import {addFilter} from '@wordpress/hooks';
import defaults from './default-vars.json';

/*
 * A block only saves the variables that differ from its defaults (see
 * helper.js). On the front end the defaults come from sb-style.css; in the
 * editor they are added here, in front of the block's own CSS, so the saved
 * values override them.
 */
addFilter('smartblocks.editorcss', 'smart-blocks/default-vars', (css, props) => {
  const name = props?.name;
  const id = props?.attributes?.id;
  const declarations = defaults.layout[name] || (defaults.modules.includes(name) ? defaults.module : '');

  if (!declarations || !id) {
    return css;
  }

  return `#${id}{${declarations}}${css || ''}`;
}, 5);
