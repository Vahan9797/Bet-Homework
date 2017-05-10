(function () {
    'use strict';

    function arrayToString(arr, func) {
        var str = '';
        if(Array.isArray(arr) && typeof func === "function") {
            for (var i = 0; i<arr.length; i++) {
                str += func(arr[i]);
            };
            return str;
        } else {
            return "ERROR! The 1st argument must be array, the 2nd - function";
        }
    };

    window.arrayToString = arrayToString;
})();