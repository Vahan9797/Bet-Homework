(function () {
    'use strict';

    Array.prototype.reduce = function(callback, initValue) {
        var acc = (initValue) ? initValue : 0;
        if(typeof callback === 'function') {
            for (var i in this) {
                acc = callback(acc, this[i], i, this);
            }
        } else {
            return console.error('ERROR! Your argument is not a function.')
        }
        return acc;
    }
})()