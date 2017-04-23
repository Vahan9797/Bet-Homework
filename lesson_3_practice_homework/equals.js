function equals(a, b) {
    if (a === b) {
        return true;
    };

    if (!(a instanceof Object) || !(b instanceof Object)) {
        return false;
    };

    if (a.constructor !== b.constructor) {
        return false;
    };

    for (var key in a) {
         if (b.hasOwnProperty(key) && !a.hasOwnProperty(key) || a.hasOwnProperty(key) && !b.hasOwnProperty(key)) {
            return false;
        }
        
        if (!a.hasOwnProperty(key)) {
            continue; 
        };

        if (a[key] === b[key]) {
            continue;
        };

        if (typeof a[key] !== 'object' || typeof b[key] !== 'object') {
            return false;
        };

        if (!equals(a[key], b[key])) {
            return false;
        }
    };
    return true;
};
