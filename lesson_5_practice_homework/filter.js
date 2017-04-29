(function () {
    'use strict';

    Array.prototype.filter = function(callback) {
        var arr = [], j = 0;
        if(typeof callback === 'function') {
            for (var i in this) {
                if (callback(this[i] , i, this)) {
                    arr[j++] = this[i];
                }
            }
        } else {
            return console.error('ERROR! Your argument is not a function.')
        }
        return arr;
    }
})();