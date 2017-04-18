(function() {
    window.setPrimitive = function setPrimVal(a, primVal) {
        var valueOf = function () {
                return primVal;
            };
        a.valueOf = valueOf;
    };
    window.changePrimitive = function changePrimVal(a, newPrimVal) {
        setPrimitive(a, newPrimVal);
    }

})();