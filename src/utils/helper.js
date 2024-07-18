

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
    return `--sb-${varname}-top: ${top ? (top + unit) : 'initial'};
        --sb-${varname}-right: ${right ? (right + unit) : 'initial'};
        --sb-${varname}-bottom: ${bottom ? (bottom + unit) : 'initial'};
        --sb-${varname}-left: ${left ? (left + unit) : 'initial'};`;
}

const responsiveDimensionVars = (varname, top, right, bottom, left, topSm, rightSm, bottomSm, leftSm, topMd, rightMd, bottomMd, leftMd, unit) => {
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

const responsiveSliderVars = (varname, valueLg, valueSm, valueMd, unit) => {
    return `--sb-${varname}-sm: ${valueSm ? (valueSm + unit) : 'var(--sb-' + varname + '-md)'};
        --sb-${varname}-md: ${valueMd ? (valueMd + unit) : 'var(--sb-' + varname + '-lg)'};
        --sb-${varname}-lg: ${valueLg ? (valueLg + unit) : 'initial'};`;
}

const boxShadowVars = (varname, horizontal, vertical, blur, spread, color, inset, unit) => {
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
    return `--sb-${varname}-family: ${family ? checkDefault(family) : ''};
        --sb-${varname}-weight: ${weight ? checkDefault(weight.replace(/\D/g, ''), weight) : ''};
        --sb-${varname}-style: ${weight ? checkDefault(weight.replace(/\d+/g, ''), weight) : ''};
        --sb-${varname}-tt: ${textTransform ? textTransform : ''};
        --sb-${varname}-td: ${textDecoration ? textDecoration : ''};
        --sb-${varname}-fs-sm: ${fonsSizeSm ? (fonsSizeSm + fontSizeUnit) : ''};
        --sb-${varname}-fs-md: ${fontSizeMd ? (fontSizeMd + fontSizeUnit) : ''};
        --sb-${varname}-fs-lg: ${fontSize ? (fontSize + fontSizeUnit) : ''}
        --sb-${varname}-ls-sm: ${letterSpacingSm ? (letterSpacingSm + letterSpacingUnit) : ''};
        --sb-${varname}-ls-md: ${letterSpacingMd ? (letterSpacingMd + letterSpacingUnit) : ''};
        --sb-${varname}-ls-lg: ${letterSpacing ? (letterSpacing + letterSpacingUnit) : ''};
        --sb-${varname}-lh-sm: ${lineHeightSm ? (lineHeightSm + lineHeightUnit) : ''};
        --sb-${varname}-lh-md: ${lineHeightMd ? (lineHeightMd + lineHeightUnit) : ''};
        --sb-${varname}-lh-lg: ${lineHeight ? (lineHeight + lineHeightUnit) : ''};
        `;
}

const responsiveGapVars = (varname, valueRowLg, valueRowSm, valueRowMd, valueColumnLg, valueColumnSm, valueColumnMd, unit) => {
    return `--sb-${varname}-row-sm: ${valueRowSm ? (valueRowSm + unit) : ''};
        --sb-${varname}-row-md: ${valueRowMd ? (valueRowMd + unit) : ''};
        --sb-${varname}-row-lg: ${valueRowLg ? (valueRowLg + unit) : ''};
        --sb-${varname}-column-sm: ${valueColumnSm ? (valueColumnSm + unit) : ''};
        --sb-${varname}-column-md: ${valueColumnMd ? (valueColumnMd + unit) : ''};
        --sb-${varname}-column-lg: ${valueColumnLg ? (valueColumnLg + unit) : ''};`;
}

const bgImgVars = (varname, valueURL, valueAttachment, valueSize, valueColumnLg, valueColumnSm, valueColumnMd) => {
    return `--sb-${varname}-url: ${valueURL ? ('url(' + valueURL + ')') : ''};
        --sb-${varname}-attachment: ${valueAttachment ? valueAttachment : ''};
        --sb-${varname}-size: ${valueSize ? valueSize : ''};
        --sb-${varname}-position: ${valuePosition ? valuePosition : ''};
        --sb-${varname}-repeat: ${valueRepeat ? valueRepeat : ''};`;
}

export { checkDefault, getFontClass, responsiveDimensionVars, dimensionVars, responsiveSliderVars, boxShadowVars, responsiveTypographyVars, responsiveGapVars, bgImgVars };