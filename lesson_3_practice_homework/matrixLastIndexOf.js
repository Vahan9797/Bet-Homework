function matrixLastIndexOf(matrix, item) {
    var res;
    for (var i = matrix.length - 1; i >= 0; i--) {
        if ((res = lastIndexOf(matrix[i], item)) !== -1) {
            return [i, res];
        }
    }
};
    
    function lastIndexOf(arr, item) {
        if (!arr.includes(item)) {
            return -1;
        } else {
            for (var i = arr.length - 1; i >= 0; i--) {
                if (arr[i] === item) {
                    return i;
                }
            }
        }
    };
