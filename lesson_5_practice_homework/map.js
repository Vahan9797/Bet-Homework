(function () {
    'use strict';

    Array.prototype.map = function(callback) {
        var arr = [];
        if(typeof callback === 'function') {
            for (var i in this) {
                arr[i] = callback(this[i], i, this)
            }
        } else {
            return console.error('ERROR! Your argument is not a function.')
        }
        return arr;
    }
})();