const { QueryTypes } = require('sequelize');
const {getConnection} = require('../../utils/database');
const bojo_setup_option = require('../common-service/bojo_setup_option')


const getSalesSlipKeys = async (user_code, table_prefix, startDate, endDate, offset, limit) => {
    // startDate, endDate => 조건들...
    const conn = await getConnection(user_code, table_prefix);

    let where = '';

    const { 현금, 카드, 통장, 상품권 } = await bojo_setup_option.getSetupOption(user_code, table_prefix, conn);
    const order = 'sa_date desc, sa_time desc';

    if (startDate && endDate) {
        where += `and left(sa_datetime,10) between '${startDate}' and '${endDate}' `;

    }
    
    const query = `
  SELECT 
  concat(sa_datetime, '_', sa_gcode) AS sa_code,
  left(sa_datetime, 10) as sa_date,
  sa_time,
  b.mb_name,
  b.mb_code,
  b.mb_area,
  b.mb_juso,
  b.mb_tel,
  b.mb_hp,
  sum(round(sa_su)) as sum_su,
  sum(round(sa_ibgum)) as sum_ibgum,
  sum(round(sa_danga*sa_su)) as sum_danga,
  sum(sa_dc) as sum_dc,
  sum(sa_vat) as sum_vat,
  sum(ROUND(sa_su * sa_danga)+ sa_vat-sa_grant-sa_dc) as tot_danga,
  sum(case when sa_su > -1 then ROUND(sa_su * sa_danga)+ sa_vat-sa_grant-sa_dc else 0 end) as tot_orgin,
  case when
    sa_no in 
    (select sa_idx from woosung.ws_refund_slips_detail a
    left join woosung.ws_refund_slips b
    on a.refund_idx = b.idx
    where sa_code = concat(sa_datetime, '_', sa_gcode) 
    and user_code = '${user_code}' 
    and table_prefix = '${conn.table_prefix}'
    and refund_status = 1
    ) then 1 else 0 end as cancel_sales,
  case when sum(case when a.sa_area = ${현금} and a.sa_iock = 0 then 1 else 0 end) > 0 then 1 else 0 end as cash_check,
  case when sum(case when a.sa_area = ${카드} and a.sa_iock = 0 then 1 else 0 end) > 0 then 1 else 0 end as card_check,
  case when sum(case when a.sa_area = ${상품권} and a.sa_iock = 0 then 1 else 0 end) > 0 then 1 else 0 end as sangpum_check,
  case when sum(case when a.sa_area = ${통장} and a.sa_iock = 0 then 1 else 0 end) > 0 then 1 else 0 end as bank_check,
  case when sum(case when a.sa_area = 91 and a.sa_iock = 0 then 1 else 0 end) > 0 then 1 else 0 end as area_check91,
  case when sum(case when a.sa_area = 92 and a.sa_iock = 0 then 1 else 0 end) > 0 then 1 else 0 end as area_check92,
  case when sum(case when a.sa_area = 93 and a.sa_iock = 0 then 1 else 0 end) > 0 then 1 else 0 end as area_check93,
  case when sum(case when a.sa_area = 94 and a.sa_iock = 0 then 1 else 0 end) > 0 then 1 else 0 end as area_check94,
  case when sum(case when a.sa_area = 95 and a.sa_iock = 0 then 1 else 0 end) > 0 then 1 else 0 end as area_check95,
  case when sum(case when a.sa_area = 96 and a.sa_iock = 0 then 1 else 0 end) > 0 then 1 else 0 end as area_check96,
  case when sum(case when a.sa_area = 97 and a.sa_iock = 0 then 1 else 0 end) > 0 then 1 else 0 end as area_check97,
  case when sum(case when a.sa_area = 98 and a.sa_iock = 0 then 1 else 0 end) > 0 then 1 else 0 end as area_check98,
  case when sum(case when a.sa_area = 99 and a.sa_iock = 0 then 1 else 0 end) > 0 then 1 else 0 end as area_check99,
  (select count(*) from ${conn.table_prefix}_card c where c.ca_jang_serno in (select sa_no from ${conn.table_prefix}_outsales where sa_datetime = a.sa_datetime) and c.ca_yuhyung = 'C0' and c.ca_io_gubun = 'N') as cash_receipts
  FROM ${conn.table_prefix}_outsales a 
  left join ${conn.table_prefix}_outco b
  on a.sa_iock = b.mb_iock and a.sa_gcode = b.mb_code
  left join ${conn.table_prefix}_item c
  on a.sa_pcode = c.it_code
  where 1=1
  ${where}
  GROUP BY sa_datetime, sa_gcode
  order by ${order}
  limit ${offset},${limit};
`;
    const keys = await conn.sequelize.query(query, {
        type: QueryTypes.SELECT
    })

    return keys
    
}


module.exports = {getSalesSlipKeys}