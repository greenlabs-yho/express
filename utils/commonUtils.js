

exports.getPageNation = (limit, pageNum) => {
    if (isNaN(limit) && isNaN(pageNum)) {
      return {
        limit: 10,
        offset: 1,
      };
    }
  
    if (limit < 1 || limit > 10000 || isNaN(limit)) {
      throw new Error(`limit out of range : ${limit}`);
    }
    if (pageNum < 1 || isNaN(pageNum)) {
      throw new Error(`pageNum out of range : ${pageNum}`);
    }
    const offset = limit * (pageNum - 1);
    return {
      limit: parseInt(limit),
      offset: parseInt(offset),
    };
  };
  