(function () {
    'use strict';

    function isArray(arr) { 
        return !!arr && arr.__proto__ === Array.prototype; 
    };

    window.Array.isArray = isArray;
})();