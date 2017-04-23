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
