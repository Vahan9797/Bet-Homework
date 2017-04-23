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
