const { QueryTypes, Sequelize } = require('sequelize');
const {getConnection} = require('../../utils/database');
const bojo_setup_option = require('../common/bojo_setup_option')

const commonService = require('../common/common-service')

const moment = require('moment-timezone');



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

const getReceiptFromKey = async (user_code, table_prefix, key, sa_iock, print_type) => {
  const conn = await getConnection(user_code, table_prefix);

  const keyArray = key.split('_');
  // 농약사 정보를 가져옴
  const user_info = await conn.sequelize.query(
    `
    select
      w_sangho,
      w_saupjano,
      w_tel,
      w_posjuso,
      w_bank1,
      w_bank2
    from woosung.wsuser2016
    where
      w_db_name = '${user_code}'
    group by w_db_name;
    `,
    { type: QueryTypes.SELECT, }
  );
  
  let sale_slip_datetime = '';
  if (parseInt(print_type, 10) === 1) {
    sale_slip_datetime = `
    ( select
        DATE_FORMAT(refund_dt,'%Y-%m-%d %H:%i:%s') as refund_dt
      from woosung.ws_refund_slips a 
      where sa_code = '${key}'
        and user_code = '${user_code}'
        and table_prefix = '${table_prefix}' )`;
  } else {
    sale_slip_datetime = `
    ( select 
        min(concat(left(sa_datetime,10),' ',sa_time)) as refund_dt
      from ${conn.table_prefix}_outsales 
      where sa_gcode = a.mb_code 
        and sa_datetime = '${keyArray[0]}' )`;
  }

  // 고객정보를 가져옴
  const outco = await conn.sequelize.query(
    `
    select
      mb_name,
      mb_area,
      if(trim(mb_hp) = '', mb_tel, mb_hp) as 'mb_tel',
      mb_postjuso,
      ${sale_slip_datetime} as sale_slip_datetime
    from ${conn.table_prefix}_outco a
    where
        mb_code = '${keyArray[1]}'
        and mb_iock = ${sa_iock};
    `,
    {type: QueryTypes.SELECT},
  );

  const { 현금, 카드, 통장, 상품권 } = await bojo_setup_option.getSetupOption(user_code, table_prefix, conn);

  // 영수증에 포함될 품목을 가져온다. (입출금내역 제외)
  const sale_items = await conn.sequelize.query(
    `
    select
      concat(left(a.sa_datetime,10),' ',a.sa_time) as sale_datetime,
      a.sa_p_name,
      a.sa_p_unit,
      a.sa_su,
      IF(a.sa_buhap,ROUND((a.sa_su*a.sa_danga+a.sa_vat)/a.sa_su),a.sa_danga) as sa_danga,
      CAST(IF(a.sa_buhap,ROUND((a.sa_su*a.sa_danga+a.sa_vat)/a.sa_su),a.sa_danga) AS signed integer) as sa_danga_int,
      a.sa_vat,
      a.sa_grant,
      a.sa_dc,
      (ROUND(a.sa_su * a.sa_danga) + a.sa_vat - a.sa_grant - a.sa_dc) as total_price,
      (ROUND(a.sa_su * a.sa_danga) + a.sa_vat - a.sa_grant) as total_price2,
      case when a.sa_vat <= 0 then 1 else 0 end as is_tax_free
    from ${conn.table_prefix}_outsales a 
    where a.sa_iock = ${sa_iock} and sa_gcode = '${keyArray[1]}' and sa_datetime = '${keyArray[0]}' and sa_area not in (${현금}, ${카드}, ${통장}, ${상품권});
    `,
    { type: QueryTypes.SELECT },
  );

  // 입출금 내역을 가져온다.
  const payment_items = await conn.sequelize.query(
    `
    select
      concat(left(a.sa_datetime,10),' ',a.sa_time) as payment_datetime,
      a.sa_ibgum,
      a.sa_dc,
      a.sa_p_name,
      a.sa_pcode,
      a.sa_iock
    from ${conn.table_prefix}_outsales a 
    where a.sa_iock = ${sa_iock} and sa_gcode = '${keyArray[1]}' and sa_datetime = '${keyArray[0]}' and sa_area in (${현금}, ${카드}, ${통장}, ${상품권});
    `,
    {type: QueryTypes.SELECT},
  );

  // object merge 성능이 Object.assign 이 우수함.
  var result = Object.assign(user_info[0], outco[0])
  const now = moment.tz('Asia/Seoul');
  result.datetime = now.format('YYYY-MM-DD HH:mm:ss');
  result.sale_items = sale_items;
  result.payment_items = payment_items;

  // 추가 계산 항목
  let 총_합계 = 0;
  let 총_할인액 = 0;
  let 입금 = 0;
  result.sale_items.forEach((sale_item) => {
    총_합계 += parseInt(sale_item.total_price2, 10);
    총_할인액 += parseInt(sale_item.sa_dc, 10);
  });
  result.총_합계 = 총_합계;
  result.payment_items.forEach((payment_item) => {
    총_할인액 += parseInt(payment_item.sa_dc, 10);
    입금 += parseInt(payment_item.sa_ibgum, 10);
  });

  result.총_할인액 = 총_할인액;
  result.총_결제액 = 총_합계 - 총_할인액;
  result.입금 = 입금;
  result.미수금 = result.총_결제액 - 입금;
  result.sales_slip_key = key;
  result.print_type = print_type;

  return result;
}


const getSalesSliptoBarcode = async (user_code, table_prefix, key) => {
  const conn = await getConnection('woosung');

  const result = await conn.models.ws_sales_barcode.findAll({
    attributes: ['barcode'],
    where: {
      user_code: user_code,
      table_prefix: table_prefix,
      sa_code: key,
    },
  });

  return result;
};

const insertSalesSlipBarcode = async (user_code, table_prefix, key) => {
  const conn = await getConnection('woosung');

  const barcode_cnt = await conn.models.ws_sales_barcode.count({
    where: {
      user_code: user_code,
      table_prefix: table_prefix,
      sa_code: key,
    },
  });

  let result = {}
  if (barcode_cnt === 0) {
    const query = `
        insert into ws_sales_barcode (barcode
            , sa_code, user_code, table_prefix)
        values( concat('WS#', UPPER(LPAD(hex((SELECT AUTO_INCREMENT
                                            FROM information_schema.tables
                                            WHERE table_name = 'ws_sales_barcode'
                                            AND table_schema = 'woosung')+1),7,'0')))
            , '${key}', '${user_code}', '${table_prefix}');
          `

    await conn.sequelize.query(query, {type: QueryTypes.INSERT});

    result.msg = '바코드가 생성되었습니다.';
    result.resultCode = 1;
  } else {
    result.msg = '바코드가 이미 존재합니다.';
    result.resultCode = 0;
  }

  return result;
}
  

const getORCreateSalesSlipBarcode = async (user_code, table_prefix, key) => {
  const conn = await getConnection('woosung');

  insertSalesSlipBarcode(user_code, table_prefix, key);
  return getSalesSliptoBarcode(user_code, table_prefix, key);
}


const createSalesSlipBatch = async(user_code, table_prefix, pos_code, sales_slips) => {
  const conn = await getConnection(user_code, table_prefix);
  const ws_conn = await getConnection("woosung");

  const pos_info = await commonService.getPosInfo(ws_conn, pos_code);

  await conn.sequelize.transaction(async t => {
    await ws_conn.sequelize.transaction(async ws_t => {

    })
  })
}

module.exports = {getSalesSlipKeys, getReceiptFromKey, insertSalesSlipBarcode, getSalesSliptoBarcode, getORCreateSalesSlipBarcode, createSalesSlipBatch}