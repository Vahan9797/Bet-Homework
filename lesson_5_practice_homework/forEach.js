(function () {
    'use strict';

    Array.prototype.forEach = function(callback) {
        if(typeof callback === 'function') {
            for (var i in this) {
                callback(this[i], i, this)
            }
        } else {
            return console.error('ERROR! Your argument is not a function.')
        }
    };
})();