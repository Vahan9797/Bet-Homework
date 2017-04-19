(function() {
    window.setPrimitive = function setPrimVal(a, primVal) {
        var p = primVal;
        var valueOf = function () {
                return p;
            };
        a.valueOf = valueOf;
        window.changePrimitive = function changePrimVal(a, newPrimVal) {
            p = newPrimVal;
        }
    };
})();
