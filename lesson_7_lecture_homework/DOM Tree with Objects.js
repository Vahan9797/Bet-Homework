!function() {
    'use strict';

    function Script(src, contType) {
        this.src = src;
        this.type = contType;
    }

    window.html = {
        head: {
            title: function(title) { return title },
            script: Script,
            link: function(href, rel, type) {
                this.href = href;
                this.rel = rel;
                this.type = type;
            }
        },
        body: {
            script: Script,
            img: function(src, size, alt) {
                this.src = src;
                this.height = size.height;
                this.width = size.width;
                this.alt = alt;
            },
            h1: function(bigHeader) { return bigHeader },
            p: {
                b: function() {/*Bold tag*/},
                i: function() {/*Italic tag*/}
            }
        }
    }
}();