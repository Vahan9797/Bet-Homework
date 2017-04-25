(function () {
    'use strict';

    function instanceOf(a, b) {
        if (a === null) {
            return false;
        } else if (a.__proto__ !== b.prototype) {
            return instanceOf(a.__proto__, b);
        } else {
            return true;
        }
    };

    window.instanceOf = instanceOf;
})();