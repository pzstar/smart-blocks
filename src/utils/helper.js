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

export { checkDefault, getFontClass };