const getCodeChunks = a => {
    if (a === undefined) {
        a = 1;
    }
    return (a | 0) > 0 ? Math.random().toString(16).substr(2, 4) + getCodeChunks(a - 1) : '';
}

const createGUID = () => {
    return getCodeChunks(2) + '-' + getCodeChunks() + '-' + getCodeChunks() + '-' + getCodeChunks() + '-' + getCodeChunks(3);
};

export default createGUID;