const service = require('./service');
const commonUtils = require('../../utils/commonUtils')

const getSalesSlipKeys = async (req, res, next) => {
    const { user_code, table_prefix, sa_iock, sa_code, sa_gcode, sa_area, searchValue, startDate, endDate, pageNum, limit, credit } = req.query;
    const pageNation = commonUtils.getPageNation(limit, pageNum);
    const result = await service.getSalesSlipKeys(user_code, table_prefix, startDate, endDate, pageNation.offset, pageNation.limit)
    res.json(result);
}



module.exports = {getSalesSlipKeys}