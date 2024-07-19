

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

const dimensionVars = (varname, top, right, bottom, left, unit = '') => {
    return `--sb-${varname}-top: ${top ? (top + unit) : 'initial'};
        --sb-${varname}-right: ${right ? (right + unit) : 'initial'};
        --sb-${varname}-bottom: ${bottom ? (bottom + unit) : 'initial'};
        --sb-${varname}-left: ${left ? (left + unit) : 'initial'};`;
}

const responsiveDimensionVars = (varname, top, right, bottom, left, topSm, rightSm, bottomSm, leftSm, topMd, rightMd, bottomMd, leftMd, unit = '') => {
    return `--sb-${varname}-top-sm: ${topSm ? (topSm + unit) : 'var(--sb-' + varname + '-top-md)'};
        --sb-${varname}-right-sm: ${rightSm ? (rightSm + unit) : 'var(--sb-' + varname + '-right-md)'};
        --sb-${varname}-bottom-sm: ${bottomSm ? (bottomSm + unit) : 'var(--sb-' + varname + '-bottom-md)'};
        --sb-${varname}-left-sm: ${leftSm ? (leftSm + unit) : 'var(--sb-' + varname + '-left-md)'};
        --sb-${varname}-top-md: ${topMd ? (topMd + unit) : 'var(--sb-' + varname + '-top-lg)'};
        --sb-${varname}-right-md: ${rightMd ? (rightMd + unit) : 'var(--sb-' + varname + '-right-lg)'};
        --sb-${varname}-bottom-md: ${bottomMd ? (bottomMd + unit) : 'var(--sb-' + varname + '-bottom-lg)'};
        --sb-${varname}-left-md: ${leftMd ? (leftMd + unit) : 'var(--sb-' + varname + '-left-lg)'};
        --sb-${varname}-top-lg: ${top ? (top + unit) : 'initial'};
        --sb-${varname}-right-lg: ${right ? (right + unit) : 'initial'};
        --sb-${varname}-bottom-lg: ${bottom ? (bottom + unit) : 'initial'};
        --sb-${varname}-left-lg: ${left ? (left + unit) : 'initial'};`;
}

const responsiveSliderVars = (varname, valueLg, valueSm, valueMd, unit = '') => {
    return `--sb-${varname}-sm: ${valueSm ? (valueSm + unit) : 'var(--sb-' + varname + '-md)'};
        --sb-${varname}-md: ${valueMd ? (valueMd + unit) : 'var(--sb-' + varname + '-lg)'};
        --sb-${varname}-lg: ${valueLg ? (valueLg + unit) : 'initial'};`;
}

const boxShadowVars = (varname, horizontal, vertical, blur, spread, color, inset, unit = '') => {
    return `--sb-${varname}-horizontal: ${horizontal ? (horizontal + unit) : '0'};
        --sb-${varname}-vertical: ${vertical ? (vertical + unit) : '0'};
        --sb-${varname}-blur: ${blur ? (blur + unit) : '0'};
        --sb-${varname}-spread: ${spread ? (spread + unit) : '0'};
        --sb-${varname}-color: ${color ? color : 'transparent'};
        --sb-${varname}-inset: ${inset ? inset : ''};`;
}

const checkDefault = (check, checkDiff = 'undefined') => {
    if (checkDiff != 'undefined') {
        return (!checkDiff || checkDiff.toLowerCase() == 'default') ? 'inherit' : check;
    }
    return (!check || check.toLowerCase() == 'default') ? 'inherit' : check;
}

const responsiveTypographyVars = (varname, family, weight, textTransform, textDecoration,
    fonsSizeSm, fontSizeMd, fontSize, fontSizeUnit,
    letterSpacingSm, letterSpacingMd, letterSpacing, letterSpacingUnit,
    lineHeightSm, lineHeightMd, lineHeight, lineHeightUnit) => {
    return `--sb-${varname}-family: ${family ? checkDefault(family) : 'inherit'};
        --sb-${varname}-weight: ${weight ? checkDefault(weight.replace(/\D/g, ''), weight) : 'inherit'};
        --sb-${varname}-style: ${weight ? checkDefault(weight.replace(/\d+/g, ''), weight) : 'inherit'};
        --sb-${varname}-tt: ${textTransform ? textTransform : 'inherit'};
        --sb-${varname}-td: ${textDecoration ? textDecoration : 'inherit'};
        --sb-${varname}-fs-sm: ${fonsSizeSm ? (fonsSizeSm + fontSizeUnit) : 'var(--sb-' + varname + '-fs-md)'};
        --sb-${varname}-fs-md: ${fontSizeMd ? (fontSizeMd + fontSizeUnit) : 'var(--sb-' + varname + '-fs-lg)'};
        --sb-${varname}-fs-lg: ${fontSize ? (fontSize + fontSizeUnit) : 'inherit'}
        --sb-${varname}-ls-sm: ${letterSpacingSm ? (letterSpacingSm + letterSpacingUnit) : 'var(--sb-' + varname + '-ls-md)'};
        --sb-${varname}-ls-md: ${letterSpacingMd ? (letterSpacingMd + letterSpacingUnit) : 'var(--sb-' + varname + '-ls-lg)'};
        --sb-${varname}-ls-lg: ${letterSpacing ? (letterSpacing + letterSpacingUnit) : 'inherit'};
        --sb-${varname}-lh-sm: ${lineHeightSm ? (lineHeightSm + lineHeightUnit) : 'var(--sb-' + varname + '-lh-md)'};
        --sb-${varname}-lh-md: ${lineHeightMd ? (lineHeightMd + lineHeightUnit) : 'var(--sb-' + varname + '-lh-lg)'};
        --sb-${varname}-lh-lg: ${lineHeight ? (lineHeight + lineHeightUnit) : 'inherit'};
        `;
}

const responsiveGapVars = (varname, valueRowLg, valueRowSm, valueRowMd, valueColumnLg, valueColumnSm, valueColumnMd, unit = '') => {
    return `--sb-${varname}-row-sm: ${valueRowSm ? (valueRowSm + unit) : 'var(--sb-' + varname + '-row-md)'};
        --sb-${varname}-row-md: ${valueRowMd ? (valueRowMd + unit) : 'var(--sb-' + varname + '-row-lg)'};
        --sb-${varname}-row-lg: ${valueRowLg ? (valueRowLg + unit) : '20px'};
        --sb-${varname}-column-sm: ${valueColumnSm ? (valueColumnSm + unit) : 'var(--sb-' + varname + '-column-md)'};
        --sb-${varname}-column-md: ${valueColumnMd ? (valueColumnMd + unit) : 'var(--sb-' + varname + '-column-lg)'};
        --sb-${varname}-column-lg: ${valueColumnLg ? (valueColumnLg + unit) : '20px'};`;
}

const bgVars = (varname, valueURL, valueAttachment, valueSize, valuePositionX, valuePositionY, valueRepeat, valueType, valueGradient, valueColor) => {
    const colorValue = valueType == 'imageOrColor' ? 'url(' + valueURL + ')' : valueGradient;
    return `--sb-${varname}-img-url: ${colorValue ? colorValue : 'initial'};
        --sb-${varname}-img-attachment: ${valueAttachment ? valueAttachment : 'scroll'};
        --sb-${varname}-img-size: ${valueSize ? valueSize : 'auto'};
        --sb-${varname}-img-position: ${(valuePositionX && valuePositionY) ? ((valuePositionX * 100) + '%' + (valuePositionY * 100) + '%') : '50% 50%'};
        --sb-${varname}-img-repeat: ${valueRepeat ? valueRepeat : 'repeat'};
        --sb-${varname}-color: ${valueColor ? valueColor : 'transparent'};`;
}

export { checkDefault, getFontClass, responsiveDimensionVars, dimensionVars, responsiveSliderVars, boxShadowVars, responsiveTypographyVars, responsiveGapVars, bgVars };