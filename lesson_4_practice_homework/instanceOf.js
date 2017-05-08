!function () {
    'use strict';

    function instanceOf(a, b) {
        return (a === null) ? false : (a.__proto__ !== b.prototype) ? instanceOf(a.__proto__, b) : true;
    };

    window.instanceOf = instanceOf;
}();