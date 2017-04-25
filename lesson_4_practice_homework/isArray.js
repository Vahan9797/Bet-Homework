(function () {
    'use strict';

    function isArray(arr) { 
        return arr === this || arr.__proto__ === this.prototype; 
    };

    window.Array.isArray = isArray;
})();