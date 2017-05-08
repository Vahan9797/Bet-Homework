!function() {
    'use strict';

    window.Range = function() {
        if(arguments.length === 2) {
            this.from = arguments[0];
            this.to = arguments[1];
        } else if (arguments[0] instanceof Array) {
            this.to = arguments[0][0];
            this.from = arguments[0][1];
        } else {
            throw 'Invalid parameters past.';
        }
    }

    Range.compare = function(r1, r2) {
        var diff = (r1.to - r1.from) - (r2.to - r2.from);
        if (diff > 0) {
            return 1;
        } else if (diff < 0) {
            return -1;
        }
        else return 0;
    }

    Object.defineProperties(Range.OPERATORS = (Range.OPERATORS) ? Range.OPERATORS : {}, {
        'GT': {
            configurable: false,
            value: '>'
        },
        'GTE': {
            configurable: false,
            value: '>='
        },
        'LT': {
            configurable: false,
            value: '<'
        },
        'LTE': {
            configurable: false,
            value: '<='
        },
        'EQ': {
            configurable: false,
            value: '='
        },
    });

    Range.prototype.compare = function(rangeObj, op) {
        switch(op) {
            case Range.OPERATORS.GT:
                return Range.compare(this, rangeObj) > 0
            case Range.OPERATORS.GTE:
                return Range.compare(this, rangeObj) >= 0
            case Range.OPERATORS.LT:
                return Range.compare(this, rangeObj) < 0
            case Range.OPERATORS.LTE:
                return Range.compare(this, rangeObj) <= 0
            case Range.OPERATORS.EQ:
                return Range.compare(this, rangeObj) === 0
            default:
                throw 'Please specify the second parameter of function as one of the comparison operators in single-quotes.'
        }
    };
}();