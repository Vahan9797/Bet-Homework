function matrixIndexOf(matrix, item) {
    var res;
    for (var i = 0; i < matrix.length; i++) {
        if ((res = indexOf(matrix[i], item)) !== -1) {
            return [i, res];
            break;
        }
    };

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
