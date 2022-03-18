const service = require('./service');
const commonUtils = require('../../utils/commonUtils')

const getSalesSlipKeys = async (req, res, next) => {
    try {
        const { user_code, table_prefix, sa_iock, sa_code, sa_gcode, sa_area, searchValue, startDate, endDate, pageNum, limit, credit } = req.query;
        const pageNation = commonUtils.getPageNation(limit, pageNum);
        const result = await service.getSalesSlipKeys(user_code, table_prefix, startDate, endDate, pageNation.offset, pageNation.limit)
        res.json(result);
    } catch(error) {
        // 동기 상태에서 exception 발생하는 경우에는 next 처리하지 않아도 알아서 error router 에서 처리가 되지만 
        // 비동기 로직에서 exception 발생시 그대로 뻗어버려서 next 처리를 명시적으로 해야함.
        next(error)
    }
}



module.exports = {getSalesSlipKeys}