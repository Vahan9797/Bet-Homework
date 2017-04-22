function getRandomMatrix(n, m) {
    var matrix = [];
    function getRandomInt(max) {
        return parseInt(Math.random()*(++max));
    };
    
    for (var i = 0; i < n; i++) {
        matrix[i] = [];
        for (var j = 0; j < m; j++) {
            matrix[i][j] = getRandomInt(100);
        }
    };
    return matrix;
}