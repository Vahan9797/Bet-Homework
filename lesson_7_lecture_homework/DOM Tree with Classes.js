!function() {
    window.Html = function() {};

    Html.Head = function() {};
    Html.Head.prototype = Object.create(Html.prototype);

    Html.Body = function() {};
    Html.Body.prototype = Object.create(Html.prototype);

    Html.Head.Title = function(title) { return title };
    Html.Head.Title.prototype = Object.create(Html.Head.prototype);

    function Script(src, contType) {
        this.src = src; 
        this.type = contType;
    }

    Html.Head.Script = Script;
    Html.Body.Script = Script;

    Html.Body.P = function() {/* Paragraph tag */};
    Html.Body.P.prototype = Object.create(Html.Body.prototype);

    Html.Body.Img = function(src, size, alt) {
        this.src = src; 
        this.height = size.height;
        this.width = size.width;
        this.alt = alt;
    }
    Html.Body.Img.prototype = Object.create(Html.Body.prototype);

    Html.Body.P.B = function() {/* Bold tag */};
    Html.Body.P.B.prototype = Object.create(Html.Body.P.prototype);

    Html.Body.P.I = function() {/* Italic tag */};
    Html.Body.P.I.prototype = Object.create(Html.Body.P.prototype);
}();