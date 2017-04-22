function matrixLastIndexOf(matrix, item) {
    var res;
    matrix.reverse();
    for (var i = 0; i < matrix.length; i++) {
        if ((res = lastIndexOf(matrix[i], item)) !== -1) {
            return [(matrix.length - i - 1), res];
        }
    };

    function lastIndexOf(arr, item) {
        arr.reverse();
        return arr.length - indexOf(arr, item) - 1;

        function indexOf(arr, item) {
            var  res, i = 0;
            if (!arr.includes(item)) {
                res = -1;
            } else {
                while (i < arr.length) {
                    if (arr[i] === item) {
                        res = i;
                        break;
                    } else {
                        i++;
                    };
                }
            };
        return res;
        };
};

}