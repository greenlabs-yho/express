



const getPosInfo = async (conn, pos_code) => {
    const result = await conn.models.pos_info.findOne({
      where: {
        value: pos_code,
      },
    });
    if (!result) {
      throw '해당 포스를 찾을 수 없습니다.';
    }
    return result;
  };
  

  module.exports = {getPosInfo}