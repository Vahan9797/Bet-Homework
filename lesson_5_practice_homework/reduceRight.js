(function () {
    'use strict';

    Array.prototype.reduceRight = function(callback, initValue) {
        var acc = (initValue) ? initValue : 0;
        if(typeof callback === 'function') {
            for (var i in this) {
                acc = callback(acc, this[this.length - i - 1], i, this);
            }
        } else {
            return console.error('ERROR! Your argument is not a function.')
        }
        return acc;
    }
})()