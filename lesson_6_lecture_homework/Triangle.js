!function() {
    'use strict';

    window.Triangle = function() {
        var a = arguments;
        if (a.length === 3) {
            if (Point.checkDegree(a[0], a[1], a[2]) === 180 || Point.checkDegree(a[0], a[1], a[2]) === 0) {
                throw 'Points you gave are on the same line.';
            } else {
                this.firstPoint = a[0];
                this.secondPoint = a[1];
                this.ThirdPoint = a[2];
            }
        } else if (a[0] instanceof Array && a[0].length === 3) {
            if (Point.checkDegree(a[0][0], a[0][1], a[0][2]) === 180 || Point.checkDegree(a[0][0], a[0][1], a[0][2]) === 0) {
                throw 'Points you gave are on the same line.';
            } else {
                this.firstPoint = a[0][0];
                this.secondPoint = a[0][1];
                this.ThirdPoint = a[0][2];
            }
        } else {
            throw 'Invalid parameters past.';
        }
    }

    window.Point = function() {
        if(arguments.length === 2) {
            this.x = arguments[0];
            this.y = arguments[1];
        } else if (arguments[0] instanceof Array && arguments[0].length === 2) {
            this.y = arguments[0][0];
            this.x = arguments[0][1];
        } else {
            throw 'Invalid parameters past.';
        }
    }

    Point.distanceBetween = function() {
        if (arguments.length === 2) {
            return Math.sqrt((arguments[1].y - arguments[0].y)**2 + (arguments[1].x - arguments[0].x)**2);
        } else {
            throw 'ERROR! Only 2 arguments of class Point() permitted.'
        }
    }

    Point.checkDegree = function() {
        // returns angle converted to integer
        var a, b, c;
        if (arguments.length === 3) {
            a = Point.distanceBetween(arguments[0], arguments[1]);
            b = Point.distanceBetween(arguments[1], arguments[2]);
            c = Point.distanceBetween(arguments[0], arguments[2]);
            return Math.acos((a**2 + b**2 - c**2) / (2 * a * b)) * 180 / Math.PI | 0;
        } else {
            throw 'ERROR! Only 3 arguments of class Point() permitted.'
        }
    };
}();
