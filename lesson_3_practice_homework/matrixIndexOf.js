function matrixIndexOf(matrix, item) {
    var res;
    for (var i = 0; i < matrix.length; i++) {
        if ((res = indexOf(matrix[i], item)) !== -1) {
            return [i, res];
        }
    }
};

function indexOf(arr, item) {
    if (!arr.includes(item)) {
        return -1;
    } else {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] === item) {
                return i;
            } 
        }
    }
};
