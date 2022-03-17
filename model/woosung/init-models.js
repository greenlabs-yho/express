var DataTypes = require('sequelize').DataTypes;
var _companies = require('./companies');
var _company_agree = require('./company_agree');
var _contact_auth = require('./contact_auth');
var _login_auth = require('./login_auth');
var _login_auth_agree = require('./login_auth_agree');
var _login_auth_role = require('./login_auth_role');
var _login_auth_woosung = require('./login_auth_woosung');
var _login_auth_app = require('./login_auth_app');
var _login_auth_history = require('./login_auth_history');
var _mix_agro = require('./mix_agro');
var _sign_in_history = require('./sign_in_history');
var _user_agree = require('./user_agree');
var _users = require('./users');
var _winupgrade = require('./winupgrade');
var _ws_agree = require('./ws_agree');
var _ws_barcode = require('./ws_barcode');
var _ws_delete_item = require('./ws_delete_item');
var _ws_delete_outco = require('./ws_delete_outco');
var _ws_farm_outco = require('./ws_farm_outco');
var _ws_kakao_send = require('./ws_kakao_send');
var _ws_nsc_send = require('./ws_nsc_send');
var _ws_payment_code = require('./ws_payment_code');
var _ws_pic_bunru = require('./ws_pic_bunru');
var _ws_picture = require('./ws_picture');
var _ws_pls3 = require('./ws_pls3');
var _ws_pls_danwi = require('./ws_pls_danwi');
var _ws_pls_master = require('./ws_pls_master');
var _ws_refund_slips = require('./ws_refund_slips');
var _ws_refund_slips_detail = require('./ws_refund_slips_detail');
var _ws_sales_barcode = require('./ws_sales_barcode');
var _ws_server = require('./ws_server');
var _ws_smstext = require('./ws_smstext');
var _ws_upgrade = require('./ws_upgrade');
var _ws_user_outsales = require('./ws_user_outsales');
var _ws_user_outsales_detail = require('./ws_user_outsales_detail');
var _ws_user_table = require('./ws_user_table');
var _wsuser = require('./wsuser');
var _wsuser2016 = require('./wsuser2016');
var _wsuser2016_log = require('./wsuser2016_log');
var _wsuser2016_user = require('./wsuser2016_user');
var _e_receipts = require('./e_receipts');
var _queue_check = require('./queue_check');
var _pos_info = require('./pos_info');
var _pos_sales = require('./pos_sales');
var _pos_sales_detail = require('./pos_sales_detail');
var _pos_outsales = require('./pos_outsales');
var _pos_outsales_detail = require('./pos_outsales_detail');
var _code_table = require('./code_table');

function initModels(sequelize) {
  var companies = _companies(sequelize, DataTypes);
  var company_agree = _company_agree(sequelize, DataTypes);
  var contact_auth = _contact_auth(sequelize, DataTypes);
  var login_auth = _login_auth(sequelize, DataTypes);
  var login_auth_role = _login_auth_role(sequelize, DataTypes);
  var login_auth_woosung = _login_auth_woosung(sequelize, DataTypes);
  var login_auth_history = _login_auth_history(sequelize, DataTypes);
  var mix_agro = _mix_agro(sequelize, DataTypes);
  var sign_in_history = _sign_in_history(sequelize, DataTypes);
  var user_agree = _user_agree(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);
  var winupgrade = _winupgrade(sequelize, DataTypes);
  var ws_agree = _ws_agree(sequelize, DataTypes);
  var ws_barcode = _ws_barcode(sequelize, DataTypes);
  var ws_delete_item = _ws_delete_item(sequelize, DataTypes);
  var ws_delete_outco = _ws_delete_outco(sequelize, DataTypes);
  var ws_farm_outco = _ws_farm_outco(sequelize, DataTypes);
  var ws_kakao_send = _ws_kakao_send(sequelize, DataTypes);
  var ws_nsc_send = _ws_nsc_send(sequelize, DataTypes);
  var ws_payment_code = _ws_payment_code(sequelize, DataTypes);
  var ws_pic_bunru = _ws_pic_bunru(sequelize, DataTypes);
  var ws_picture = _ws_picture(sequelize, DataTypes);
  var ws_pls3 = _ws_pls3(sequelize, DataTypes);
  var ws_pls_danwi = _ws_pls_danwi(sequelize, DataTypes);
  var ws_pls_master = _ws_pls_master(sequelize, DataTypes);
  var ws_refund_slips = _ws_refund_slips(sequelize, DataTypes);
  var ws_refund_slips_detail = _ws_refund_slips_detail(sequelize, DataTypes);
  var ws_sales_barcode = _ws_sales_barcode(sequelize, DataTypes);
  var ws_server = _ws_server(sequelize, DataTypes);
  var ws_smstext = _ws_smstext(sequelize, DataTypes);
  var ws_upgrade = _ws_upgrade(sequelize, DataTypes);
  var ws_user_outsales = _ws_user_outsales(sequelize, DataTypes);
  var ws_user_outsales_detail = _ws_user_outsales_detail(sequelize, DataTypes);
  var ws_user_table = _ws_user_table(sequelize, DataTypes);
  var wsuser = _wsuser(sequelize, DataTypes);
  var wsuser2016 = _wsuser2016(sequelize, DataTypes);
  var wsuser2016_log = _wsuser2016_log(sequelize, DataTypes);
  var wsuser2016_user = _wsuser2016_user(sequelize, DataTypes);
  var e_receipts = _e_receipts(sequelize, DataTypes);
  var queue_check = _queue_check(sequelize, DataTypes);
  var login_auth_agree = _login_auth_agree(sequelize, DataTypes);
  var login_auth_app = _login_auth_app(sequelize, DataTypes);
  var pos_info = _pos_info(sequelize, DataTypes);
  var pos_sales = _pos_sales(sequelize, DataTypes);
  var pos_sales_detail = _pos_sales_detail(sequelize, DataTypes);
  var code_table = _code_table(sequelize, DataTypes);
  var pos_outsales = _pos_outsales(sequelize, DataTypes);
  var pos_outsales_detail = _pos_outsales_detail(sequelize, DataTypes);

  company_agree.belongsTo(companies, { as: 'company_idx_company', foreignKey: 'company_idx' });
  companies.hasMany(company_agree, { as: 'company_agrees', foreignKey: 'company_idx' });
  ws_farm_outco.belongsTo(companies, { as: 'company_idx_company', foreignKey: 'company_idx' });
  companies.hasMany(ws_farm_outco, { as: 'ws_farm_outcos', foreignKey: 'company_idx' });
  /*로그인 관련*/
  login_auth.belongsTo(login_auth_woosung, { as: 'idx_login_auth_woosung', foreignKey: 'idx' });
  login_auth_woosung.hasMany(login_auth, { as: 'login_auths', foreignKey: 'user_idx' });
  login_auth.belongsTo(login_auth_app, { as: 'idx_login_auth_app', foreignKey: 'idx' });
  login_auth_app.hasMany(login_auth, { as: 'login_auths', foreignKey: 'user_idx' });
  login_auth_agree.belongsTo(login_auth, { as: 'idx_login_auth', foreignKey: 'idx' });
  login_auth.hasMany(login_auth_agree, { as: 'login_auth_agrees', foreignKey: 'idx' });
  login_auth_role.belongsTo(login_auth, { as: 'idx_login_auth', foreignKey: 'idx' });
  login_auth.hasMany(login_auth_role, { as: 'login_auth_roles', foreignKey: 'user_idx' });
  login_auth_history.belongsTo(login_auth, { as: 'idx_login_auth', foreignKey: 'idx' });
  login_auth.hasMany(login_auth_history, { as: 'login_auth_historys', foreignKey: 'idx' });

  user_agree.belongsTo(users, { as: 'user_idx_user', foreignKey: 'user_idx' });
  users.hasMany(user_agree, { as: 'user_agrees', foreignKey: 'user_idx' });
  ws_farm_outco.belongsTo(users, { as: 'user_idx_user', foreignKey: 'user_idx' });
  users.hasMany(ws_farm_outco, { as: 'ws_farm_outcos', foreignKey: 'user_idx' });
  ws_farm_outco.belongsTo(ws_user_table, { as: 'database_idx_ws_user_table', foreignKey: 'database_idx' });
  ws_user_table.hasMany(ws_farm_outco, { as: 'ws_farm_outcos', foreignKey: 'database_idx' });
  e_receipts.belongsTo(ws_farm_outco, { as: 'ws_farm_outco_idx_ws_farm_outco', foreignKey: 'ws_farm_outco_idx' });
  ws_farm_outco.hasMany(e_receipts, { as: 'e_receipts', foreignKey: 'ws_farm_outco_idx' });
  ws_refund_slips.hasMany(ws_refund_slips_detail, { as: 'ws_refund_slips_details', foreignKey: 'refund_idx' });
  ws_refund_slips_detail.belongsTo(ws_refund_slips, { as: 'idx_ws_refund_slips', foreignKey: 'refund_idx' });
  //  login_auth_agree.belongsTo(login_auth, { as: 'user_idx_user', foreignKey: 'user_idx' });

  pos_sales.belongsTo(login_auth_woosung, { as: 'login_auth_woosungs', foreignKey: 'user_idx' });
  login_auth_woosung.hasMany(pos_sales, { as: 'pos_sales', foreignKey: 'user_idx' });
  pos_sales.belongsTo(pos_info, { as: 'pos_infos', foreignKey: 'pos_idx' });
  pos_info.hasMany(pos_sales, { as: 'pos_sales', foreignKey: 'pos_idx' });
  pos_sales_detail.belongsTo(pos_sales, { as: 'idx_pos_sales', foreignKey: 'sales_idx' });
  pos_sales.hasMany(pos_sales_detail, { as: 'pos_sales_details', foreignKey: 'sales_idx' });
  pos_outsales_detail.belongsTo(pos_outsales, { as: 'pos_outsaless', foreignKey: 'outsales_idx' });
  pos_outsales.hasMany(pos_outsales_detail, { as: 'pos_outsales_details', foreignKey: 'outsales_idx' });
  pos_outsales.belongsTo(pos_info, { as: 'idx_pos_infos', foreignKey: 'pos_idx' });
  pos_info.hasMany(pos_outsales, { as: 'pos_outsaless', foreignKey: 'pos_idx' });

  return {
    companies,
    company_agree,
    contact_auth,
    login_auth,
    login_auth_agree,
    login_auth_role,
    login_auth_woosung,
    login_auth_app,
    login_auth_history,
    mix_agro,
    sign_in_history,
    user_agree,
    users,
    winupgrade,
    ws_agree,
    ws_barcode,
    ws_delete_item,
    ws_delete_outco,
    ws_farm_outco,
    ws_kakao_send,
    ws_nsc_send,
    ws_payment_code,
    ws_pic_bunru,
    ws_picture,
    ws_pls3,
    ws_pls_danwi,
    ws_pls_master,
    ws_refund_slips,
    ws_refund_slips_detail,
    ws_sales_barcode,
    ws_server,
    ws_smstext,
    ws_upgrade,
    ws_user_outsales,
    ws_user_outsales_detail,
    ws_user_table,
    wsuser,
    wsuser2016,
    wsuser2016_log,
    wsuser2016_user,
    e_receipts,
    queue_check,
    pos_info,
    pos_sales,
    pos_sales_detail,
    code_table,
    pos_outsales,
    pos_outsales_detail,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
