!function() {
    'use strict';

    function selectorWrapper(selector) {
        var sel = selector.split(' ').map(function(e){ return e.split('') }), splitArr = [];
        sel.forEach(function(e, i) {
            var splitString = '';
            e.forEach(function(el, ind) {
                splitString += (ind > 0 && el === '#' && el[ind-1] !== ' ') ? ' #' : (ind > 0 && el === '.' && el[ind-1] !== ' ') ? ' .' : el; 
            })
            splitArr[i] = splitString.split(' ');
        });
        return splitArr.map(function(e) { return e.length === 1 ? e[0] : e })
    }

    window.XDOM = {
        select: function (selector) {
            var selectors = selectorWrapper(selector), element = document, that = this;
            selectors.forEach(function(s) {
                var myTagName = '', myEl;
                if (s instanceof Array) {
                    s.forEach(function(el) {
                        if (that.isIdSelector(el)) {
                            element = element.getElementById(el.substring(1));
                        } else if (that.isTagSelector(el)) {
                            myTagName = el;
                        } else if (that.isClassSelector(el)) {
                            myEl = element.getElementsByClassName(el.substring(1));
                            for (var i = 0; i < myEl.length; i++) {
                                if (myEl[i].localName === myTagName) {
                                    element = myEl[i];
                                } else continue;
                            }
                        }
                    })
                } else {
                    if (that.isTagSelector(s)) {
                        element = element.getElementsByTagName(s)[0];
                    } else if (that.isIdSelector(s)) {
                        element = element.getElementById(s.substring(1));
                    } else if (that.isClassSelector(s)) {
                        element = element.getElementsByClassName(s.substring(1))[0];
                    }
                }
            })

            return {
                elements: [element],
                addClass: function (className) {
                    this.elements.forEach(function (e) {
                        e.className += e.className.length ? (" " + className) : className;
                    });
                },
                removeClass: function (className) {
                    if (this.hasClass(className)) {
                        this.elements.forEach(function(e) {
                            e.className = e.className.replace(className + (e.className[className.length] === ' ' ? ' ' : ''), '');
                        })
                    }
                },
                hasClass: function (className) {
                    return this.elements.some(function(e) {
                        return e.className.split(' ').includes(className);
                    })
                },
                toggleClass: function (className) {
                    return this.hasClass(className) ? this.removeClass(className) : this.addClass(className);
                }
            };
        },
/*        isComplexSelector: function(selector) {

        }*/

        isTagSelector: function (selector) {
            return !this.isIdSelector(selector) && !this.isClassSelector(selector);
        },
        isIdSelector: function (selector) {
            return selector[0] === '#';
        },
        isClassSelector: function (selector) {
            return selector[0] === '.';
        }

    };

    // console.log(XDOM.select('#gameArea'));
    // console.log(XDOM.select('#gameArea .player1 p'));
    // XDOM.select('#gameArea .player1 div').addClass('red');
}();