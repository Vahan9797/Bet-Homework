const getCodeChunks = size => {
  if (size === undefined) size = 1;

  return (size | 0) > 0 ? Math.random().toString(16).substr(2, 4) + getCodeChunks(size - 1) : '';
}

const createGUID = () => {
  return getCodeChunks(2) + '-' + getCodeChunks() + '-' + getCodeChunks() + '-' + getCodeChunks(3);
}

export default createGUID;