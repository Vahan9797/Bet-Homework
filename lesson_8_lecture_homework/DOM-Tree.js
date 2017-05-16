!function() {
    'use strict';

    window.getHTMLParentNodes = function getHTMLParentNodes(i) {
        var n = document.getElementsByTagName(i)[0].parentNode.nodeName;
        console.log(n);
        return (n !== '#document') ? getHTMLParentNodes(n) : '*';
    }
}();