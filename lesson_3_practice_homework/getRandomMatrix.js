function getRandomMatrix(n, m) {
    var matrix = new Array(n);
    
    for (var i = 0; i < n; i++) {
        matrix[i] = new Array(m);
        for (var j = 0; j < m; j++) {
            matrix[i][j] = getRandomInt(100);
        }
    };
    return matrix;
};

    function getRandomInt(max) {
        return Math.random()*(++max) | 0;
    };
