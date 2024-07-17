const checkDefault = (check, checkDiff = 'undefined') => {
    if (checkDiff != 'undefined') {
        return (!checkDiff || checkDiff.toLowerCase() == 'default') ? 'inherit' : check;
    }
    return (!check || check.toLowerCase() == 'default') ? 'inherit' : check;
}

const getFontClass = (family = '', weight = '', textTransform = '', textDecoration = '') => {
    var retrun_classes = [];
    if (family && family.toLowerCase() != 'inherit') {
        retrun_classes.push('sb-ff');
    }
    if (weight && weight.toLowerCase() != 'inherit') {
        retrun_classes.push('sb-fw');
    }
    if (textTransform && textTransform.toLowerCase() != 'inherit') {
        retrun_classes.push('sb-tt');
    }
    if (textDecoration && textDecoration.toLowerCase() != 'inherit') {
        retrun_classes.push('sb-td');
    }
    return retrun_classes.join(" ");
}

const dimensionVars = (varname, top, right, bottom, left, unit) => {
    return `--sb-${varname}-top: ${top ? (top + unit) : ''};
        --sb-${varname}-right: ${right ? (right + unit) : ''};
        --sb-${varname}-bottom: ${bottom ? (bottom + unit) : ''};
        --sb-${varname}-left: ${left ? (left + unit): ''};`;
}

const responsiveDimensionVars = (varname, top, right, bottom, left, topSm, rightSm, bottomSm, leftSm, topMd, rightMd, bottomMd, leftMd, unit) => {
    return `--sb-${varname}-top-sm: ${topSm ? (topSm + unit) : 'var(--sb-' + varname + '-top-md)'};
        --sb-${varname}-right-sm: ${rightSm ? (rightSm + unit) : 'var(--sb-' + varname + '-right-md)'};
        --sb-${varname}-bottom-sm: ${bottomSm ? (bottomSm + unit) : 'var(--sb-' + varname + '-bottom-md)'};
        --sb-${varname}-left-sm: ${leftSm ? (leftSm + unit): 'var(--sb-' + varname + '-left-md)'};
        --sb-${varname}-top-md: ${topMd ? (topMd + unit) : 'var(--sb-' + varname + '-top-lg)'};
        --sb-${varname}-right-md: ${rightMd ? (rightMd + unit) : 'var(--sb-' + varname + '-right-lg)'};
        --sb-${varname}-bottom-md: ${bottomMd ? (bottomMd + unit) : 'var(--sb-' + varname + '-bottom-lg)'};
        --sb-${varname}-left-md: ${leftMd ? (leftMd + unit) : 'var(--sb-' + varname + '-left-lg)'};
        --sb-${varname}-top-lg: ${top ? (top + unit) : 'initial'};
        --sb-${varname}-right-lg: ${right ? (right + unit) : 'initial'};
        --sb-${varname}-bottom-lg: ${bottom ? (bottom + unit) : 'initial'};
        --sb-${varname}-left-lg: ${left ? (left + unit) : 'initial'};`;
}

export { checkDefault, getFontClass, responsiveDimensionVars, dimensionVars };