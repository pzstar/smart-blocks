const checkDefault = (check, checkDiff = 'undefined') => {
    if (checkDiff != 'undefined') {
        return (!checkDiff || checkDiff.toLowerCase() == 'default') ? 'inherit' : check;
    }
    return (!check || check.toLowerCase() == 'default') ? 'inherit' : check;
}

const getFontClass = (attr) => {
    var retrun_classes = [];
    if (attr && attr.family && attr.family.toLowerCase() != 'default') {
        retrun_classes.push('sb-ff');
    }
    if (attr && attr.weight && attr.weight.toLowerCase() != 'default') {
        retrun_classes.push('sb-fw');
    }
    if (attr && attr.textTransform && attr.textTransform.toLowerCase() != 'default') {
        retrun_classes.push('sb-tt');
    }
    if (attr && attr.textDecoration && attr.textDecoration.toLowerCase() != 'default') {
        retrun_classes.push('sb-td');
    }
    return retrun_classes.join(" ");
}

export {checkDefault, getFontClass};