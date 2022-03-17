const { Sequelize, QueryTypes } = require('sequelize');
const Op = Sequelize.Op;
var DataTypes = require('sequelize').DataTypes;
var _ws_item = require('./ws_item');
var _ws_item_bunru = require('./ws_item_bunru');
var _ws_item_bunru_ms = require('./ws_item_bunru_ms');
var _ws_item_company = require('./ws_item_company');
var _ws_item_docksung = require('./ws_item_docksung');
var _ws_item_gubun = require('./ws_item_gubun');

var _ws_outco = require('./ws_outco');
var _ws_outco_bunru = require('./ws_outco_bunru');
var _ws_outco_index = require('./ws_outco_index');
var _ws_outco_mndex = require('./ws_outco_mndex');

var _ws_outsales = require('./ws_outsales');
var _ws_card = require('./ws_card');
var _ws_chamgo = require('./ws_chamgo');
var _ws_changgo = require('./ws_changgo');
var _ws_sign = require('./ws_sign');
var _ws_memo = require('./ws_memo');

var _bojo_picture = require('./bojo_picture');
var _bojo_memo = require('./bojo_memo');
var _bojo_setup_option = require('./bojo_setup_option');

function initModels(sequelize, table_list) {
  var ws_item,
    ws_item_bunru,
    ws_item_bunru_ms,
    ws_item_company,
    ws_item_docksung,
    ws_item_gubun,
    ws_outco,
    ws_outco_index,
    ws_outco_mndex,
    ws_outco_bunru,
    ws_outsales,
    ws_card,
    ws_chamgo,
    ws_changgo,
    ws_sign,
    ws_memo;

  let table_name, name;

  for (let table_index in table_list) {
    table_info = table_list[table_index];
    name = table_info.name;

    if (name == 'item') {
      ws_item = _ws_item(sequelize, DataTypes, table_info);
    } else if (name == 'item_bunru') {
      ws_item_bunru = _ws_item_bunru(sequelize, DataTypes, table_info);
    } else if (name == 'item_bunru_ms') {
      ws_item_bunru_ms = _ws_item_bunru_ms(sequelize, DataTypes, table_info);
    } else if (name == 'item_company') {
      ws_item_company = _ws_item_company(sequelize, DataTypes, table_info);
    } else if (name == 'item_docksung') {
      ws_item_docksung = _ws_item_docksung(sequelize, DataTypes, table_info);
    } else if (name == 'item_gubun') {
      ws_item_gubun = _ws_item_gubun(sequelize, DataTypes, table_info);
    } else if (name == 'outco') {
      ws_outco = _ws_outco(sequelize, DataTypes, table_info);
    } else if (name == 'outco_bunru') {
      ws_outco_bunru = _ws_outco_bunru(sequelize, DataTypes, table_info);
    } else if (name == 'outco_index') {
      ws_outco_index = _ws_outco_index(sequelize, DataTypes, table_info);
    } else if (name == 'outco_mndex') {
      ws_outco_mndex = _ws_outco_mndex(sequelize, DataTypes, table_info);
    } else if (name == 'outsales') {
      ws_outsales = _ws_outsales(sequelize, DataTypes, table_info);
    } else if (name == 'card') {
      ws_card = _ws_card(sequelize, DataTypes, table_info);
    } else if (name == 'chamgo') {
      ws_chamgo = _ws_chamgo(sequelize, DataTypes, table_info);
    } else if (name == 'changgo') {
      ws_changgo = _ws_changgo(sequelize, DataTypes, table_info);
    } else if (name == 'sign') {
      ws_sign = _ws_sign(sequelize, DataTypes, table_info);
    } else if (name == 'memo') {
      ws_memo = _ws_memo(sequelize, DataTypes, table_info);
    }
  }

  var bojo_picture = _bojo_picture(sequelize, DataTypes, table_info);
  var bojo_memo = _bojo_memo(sequelize, DataTypes, table_info);
  var bojo_setup_option = _bojo_setup_option(sequelize, DataTypes, table_info);

  ws_outco.hasMany(ws_outsales, {
    foreignKey: 'sa_gcode',
    sourceKey: 'mb_code',
  });
  ws_outsales.belongsTo(ws_outco, {
    foreignKey: 'sa_gcode',
    sourceKey: 'mb_code',
  });

  ws_outsales.hasMany(ws_outco, {
    foreignKey: 'mb_code',
    sourceKey: 'sa_gcode',
  });
  ws_outco.belongsTo(ws_outsales, {
    foreignKey: 'mb_code',
    sourceKey: 'sa_gcode',
  });

  ws_outsales.hasMany(ws_item, {
    foreignKey: 'it_code',
    sourceKey: 'sa_pcode',
  });
  ws_item.belongsTo(ws_outsales, {
    foreignKey: 'it_code',
    sourceKey: 'sa_pcode',
  });

  return {
    ws_item,
    ws_item_bunru,
    ws_item_bunru_ms,
    ws_item_company,
    ws_item_docksung,
    ws_item_gubun,
    ws_outco,
    ws_outco_index,
    ws_outco_mndex,
    ws_outco_bunru,
    ws_outsales,
    ws_card,
    ws_chamgo,
    ws_changgo,
    ws_sign,
    ws_memo,
    bojo_picture,
    bojo_memo,
    bojo_setup_option,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
