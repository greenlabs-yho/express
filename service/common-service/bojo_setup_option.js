const {getConnection} = require('../../utils/database');


exports.getSetupOption = async(user_code, table_prefix, seqManager) => {
    if (!seqManager)
    {
        seqManager = getConnection(user_code, table_prefix);
    }

    const type = seqManager.table_prefix.substr(0, 1);
    const result = await seqManager.models.bojo_setup_option.findAll({
        where: {
            b_so_type: type
        }
    })

    const itemOption = result[0].dataValues.b_so_name1.split('|');
    const ibgumOption = result[0].dataValues.b_so_name2.split('|');
    const retValue = { itemOption }
    // 현금/카드/통장/상품권 option 값 셋팅
    for(var i = 0; i < ibgumOption.length; i++) {
        if(['현금', '카드', '통장', '상품권'].includes(ibgumOption[i])) {
            retValue[ibgumOption[i]] = 90 + i
        }
    }

    return retValue;
}


