const service = require('./service');
const commonUtils = require('../../utils/commonUtils');

const moment = require('moment-timezone');

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


const getReceiptFromKey = async (req, res, next) => {
    try {
        const { user_code, table_prefix, sa_iock } = req.query;
        const { key } = req.params;
        const print_type = req.query.print_type || 0;
        const result = await service.getReceiptFromKey(user_code, table_prefix, key, sa_iock, print_type);

        // 여기서 바코드가 있는지 확인함.
        // 바코드가 없으면 생성 후 리턴, 있으면 해당 바코드 리턴
        const bacodeResult = await service.getORCreateSalesSlipBarcode(user_code, table_prefix, key);
        if (bacodeResult.length > 0) {
            result.barcode = bacodeResult[0].barcode;
        } else {
            throw Error('barcode create failed');
        }

        res.json(result);
    } catch (error) {
      next(error)
    }
};


// transaction 에 대한 처리가 조금 아쉬운점이 많아서 완전 refactoring 해봄.
const createSalesSlip = async (req, res, next) => {
    try {
        const { user_code, table_prefix, pos_code } = req.query;
        const { sales_slips } = req.body;

        service.createSalesSlipBatch(user_code, table_prefix, pos_code, sales_slips)

        const now = moment.tz('Asia/Seoul');
        const nowDateStr = now.format('YYYY-MM-DD');
        const nowTimeStr = now.format('HH:mm:ss');
        res.send("");
    } catch(error) {
        next(error)
    }
    
}


module.exports = {getSalesSlipKeys, getReceiptFromKey, createSalesSlip}