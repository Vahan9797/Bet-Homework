(function () {
    'use strict';

    window.f = function(x, y, z) {
        var that = this;
        if (that === undefined) {
            that = new f(x,y,z);
        } else {
            Object.defineProperties(that, {
                'x': {
                    value: x,
                    enumerable: true,
                    configurable: true
                },
                'y': {
                    value: y,
                    enumerable: true,
                    configurable: true
                },
                'z': {
                    value: z,
                    enumerable: true,
                    configurable: true
                }
            });
        }
        return that;
    }
})();