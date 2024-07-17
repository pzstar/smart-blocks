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
    return `--sb-${varname}-top-sm: ${topSm ? (topSm + unit) : ''};
        --sb-${varname}-right-sm: ${rightSm ? (rightSm + unit) : ''};
        --sb-${varname}-bottom-sm: ${bottomSm ? (bottomSm + unit) : ''};
        --sb-${varname}-left-sm: ${leftSm ? (leftSm + unit): ''};
        --sb-${varname}-top-md: ${topMd ? (topMd + unit) : ''};
        --sb-${varname}-right-md: ${rightMd ? (rightMd + unit) : ''};
        --sb-${varname}-bottom-md: ${bottomMd ? (bottomMd + unit) : ''};
        --sb-${varname}-left-md: ${leftMd ? (leftMd + unit) : ''};
        --sb-${varname}-top-lg: ${top ? (top + unit) : ''};
        --sb-${varname}-right-lg: ${right ? (right + unit) : ''};
        --sb-${varname}-bottom-lg: ${bottom ? (bottom + unit) : ''};
        --sb-${varname}-left-lg: ${left ? (left + unit) : ''};`;
}

const responsiveSliderVars = (varname, valueLg, valueSm, valueMd, unit) => {
    return `--sb-${varname}-sm: ${valueSm ? (valueSm + unit) : ''};
        --sb-${varname}-md: ${valueMd ? (valueMd + unit) : ''};
        --sb-${varname}-lg: ${valueLg ? (valueLg + unit) : ''};`;
}

const boxShadowVars = (varname, horizontal, vertical, blur, spread, color, inset, unit) => {
    return `--sb-${varname}-horizontal: ${horizontal ? (horizontal + unit) : ''};
        --sb-${varname}-vertical: ${vertical ? (vertical + unit) : ''};
        --sb-${varname}-blur: ${blur ? (blur + unit) : ''};
        --sb-${varname}-spread: ${spread ? (spread + unit) : ''};
        --sb-${varname}-color: ${color ? color : ''};
        --sb-${varname}-inset: ${inset ? inset : ''};`;
}

export { checkDefault, getFontClass, responsiveDimensionVars, dimensionVars, responsiveSliderVars, boxShadowVars };