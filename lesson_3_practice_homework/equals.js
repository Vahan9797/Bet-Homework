(function () {
    'use strict';

    function isObject(a) {
        return a && typeof a === "object";
    };

    function includes(a, b) {
        for (var i in a) {
            if (!equals(a[i], b[i])) {
                return false;
            };
        }
        return true;
    }

    function equals(a, b) {
        if (a === b) {
            return true;
        };

        if (!isObject(a) || !isObject(b)) {
            return false;
        };

        return includes(a, b) && includes(b, a);
    };

    window.equals = equals;
})();
