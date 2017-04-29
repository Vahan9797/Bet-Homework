(function () {
    'use strict';

    Array.prototype.every = function(callback) {
        if(typeof callback === 'function') {
            for (var i in this) {
                if (!callback(this[i] , i, this)) {
                    return false;
                }
            }
        } else {
            return console.error('ERROR! Your argument is not a function.')
        }
        return true;
    }
})();