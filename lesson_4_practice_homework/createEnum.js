(function () {
    'use strict';

    function createEnum(arr) {
        var en = {}, v = 0;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].__proto__ === Object.prototype) {
                Object.defineProperty(en, arr[i].name, {
                        enumerable: true,
                        value: (arr[i].value === v) ? v++ : arr[i].value
                });
				if (arr[i].value > v) {
                	v = en[arr[i].name] + 1;
                }

            } else {
                Object.defineProperty(en, arr[i], {
                    enumerable: true,
                    value: v
                });
                ++v;
            }
        }

        return en;
    };

    window.createEnum = createEnum;
})();
