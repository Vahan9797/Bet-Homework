(function() {
    var prop = "Symbol(PrimitiveValue)" + Date.now();
        var valueOf = function () {
                return this[prop];
            };

    window.setPrimitive = function setPrimVal(a, primVal) {
        a[prop] = primVal;
        a.valueOf = valueOf;
    };

    window.changePrimitive = function changePrimVal(a, newPrimVal) {
            a[prop] = newPrimVal;
    };
})();
