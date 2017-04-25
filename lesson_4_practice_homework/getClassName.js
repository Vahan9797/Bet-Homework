(function () {
    'use strict';

    function getClassName(name) {

        if (name === null) {
            return 'Null';
        };

        if (classCheck(name, Array)) { 
            return "Array";
        };

        if (classCheck(name, Object)) {
            return "Object";
        };

        if (classCheck(name, Number)) {
            return "Number";
        };

        if (classCheck(name, Function)) {
            return "Function";
        };

        if (classCheck(name, String)) {
            return "String";
        };

        if (classCheck(name, Boolean)) {
            return "Boolean";
        };
    };

    window.getClassName = getClassName;

    function classCheck(attr, className) {
        return attr.__proto__ === className.prototype;
    };
})();