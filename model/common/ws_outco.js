const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes, table_info) => {
  return ws_outco.init(sequelize, DataTypes, table_info);
}

class ws_outco extends Sequelize.Model {
  static init(sequelize, DataTypes, table_info) {
    if(table_info.table_type == 'B' || table_info.table_type == 'C' || table_info.table_type == 'E'){
      super.init({
        mb_no: {
          type: DataTypes.VIRTUAL,
          get() {
            return 'none'
          }
        },
        mb_iock: {
          type: DataTypes.TINYINT,
          allowNull: true
        },
        mb_code: {
          type: DataTypes.STRING(10),
          allowNull: true,
          primaryKey: true
        },
        mb_name: {
          type: DataTypes.STRING(50),
          allowNull: true
        },
        mb_area: {
          type: DataTypes.STRING(30),
          allowNull: true
        },
        mb_tel: {
          type: DataTypes.STRING(20),
          allowNull: true
        },
        mb_owner: {
          type: DataTypes.STRING(20),
          allowNull: true
        },
        mb_hp: {
          type: DataTypes.STRING(20),
          allowNull: true
        },
        mb_etc_tel: {
          type: DataTypes.STRING(20),
          allowNull: true
        },
        mb_fax: {
          type: DataTypes.STRING(20),
          allowNull: true
        },
        mb_jumin: {
          type: DataTypes.STRING(50),
          allowNull: true
        },
        mb_yeargum: {
          type: DataTypes.DOUBLE,
          allowNull: true
        },
        mb_post: {
          type: DataTypes.STRING(7),
          allowNull: true
        },
        mb_postjuso: {
          type: DataTypes.STRING(255),
          allowNull: true
        },
        mb_juso: {
          type: DataTypes.STRING(255),
          allowNull: true
        },
        mb_main_crop: {
          type: DataTypes.STRING(100),
          allowNull: true
        },
        mb_farm_size: {
          type: DataTypes.STRING(100),
          allowNull: true
        },
        mb_homepage: {
          type: DataTypes.STRING(255),
          allowNull: true
        },
        mb_email: {
          type: DataTypes.STRING(100),
          allowNull: true
        },
        mb_etc: {
          type: DataTypes.STRING(255),
          allowNull: true
        },
        mb_bunru: {
          type: DataTypes.INTEGER,
          allowNull: true
        },
        mb_danga_gubun: {
          type: DataTypes.TINYINT,
          allowNull: true
        },
        mb_tax: {
          type: DataTypes.TINYINT,
          allowNull: true
        },
        mb_sms: {
          type: DataTypes.TINYINT,
          allowNull: true
        },
        mb_farmck: {
          type: DataTypes.TINYINT,
          allowNull: true
        },
        mb_idx: {
          type: DataTypes.STRING(500),
          allowNull: true
        },
        mb_saupno: {
          type: DataTypes.STRING(12),
          allowNull: true
        },
        mb_uptae: {
          type: DataTypes.STRING(50),
          allowNull: true
        },
        mb_jongmok: {
          type: DataTypes.STRING(50),
          allowNull: true
        },
        mb_memo: {
          type: DataTypes.TEXT,
          allowNull: true
        },
        mb_datetime: {
          type: DataTypes.STRING(30),
          allowNull: true
        },
        mb_damdang: {
          type: DataTypes.STRING(30),
          allowNull: true
        },
        mb_damdangpon: {
          type: DataTypes.STRING(20),
          allowNull: true
        },
        mb_cotel: {
          type: DataTypes.STRING(20),
          allowNull: true
        },
        mb_bankno: {
          type: DataTypes.STRING(255),
          allowNull: true
        },
        mb_gaein: {
          type: DataTypes.TINYINT,
          allowNull: true
        },
        mb_sunmon: {
          type: DataTypes.TINYINT,
          allowNull: true
        },
        mb_birth: {
          type: DataTypes.STRING(10),
          allowNull: true
        },
        mb_danga_vat: {
          type: DataTypes.TINYINT,
          allowNull: true
        },
        mb_grant: {
          type: DataTypes.TINYINT,
          allowNull: true
        },
        mb_10: {
          type: DataTypes.TINYINT,
          allowNull: true
        },
        mb_20: {
          type: DataTypes.TINYINT,
          allowNull: true
        },
        mb_30: {
          type: DataTypes.TINYINT,
          allowNull: true
        },
        mb_40: {
          type: DataTypes.TINYINT,
          allowNull: true
        },
        mb_farmbigo: {
          type: DataTypes.STRING(255),
          allowNull: true
        },
        mb_effect: {
          type: DataTypes.STRING(4),
          allowNull: true
        },
        mb_forecolor: {
          type: DataTypes.INTEGER,
          allowNull: true
        },
        mb_backcolor: {
          type: DataTypes.INTEGER,
          allowNull: true
        },
        mb_imsijaro: {
          type: DataTypes.STRING(50),
          allowNull: true
        },
        mb_imsijarock: {
          type: DataTypes.TINYINT,
          allowNull: true
        },
        mb_noja: {
          type: DataTypes.TINYINT,
          allowNull: true
        },
        mb_danga_sel: {
          type: DataTypes.TINYINT,
          allowNull: true
        },
        mb_del_2: {
          type: DataTypes.VIRTUAL,
          get() {
            return 'none'
          }
        },
        mb_farmCode: {
          type: DataTypes.VIRTUAL,
          get() {
            return 'none'
          }
        },
        mb_agree: {
          type: DataTypes.VIRTUAL,
          get() {
            return 'none'
          }
        },
        mb_agree_date: {
          type: DataTypes.VIRTUAL,
          get() {
            return 'none'
          }
        },
        mb_agree_sign: {
          type: DataTypes.VIRTUAL,
          get() {
            return 'none'
          }
        }
      }, {
        sequelize,
        tableName: table_info.table_name,
        timestamps: false,
        indexes: [
          {
            name: "PRIMARY",
            unique: true,
            using: "BTREE",
            fields: [
              { name: "mb_code" },
            ]
          },
        ]
      });
      return ws_outco;
    }else if (table_info.table_type == 'D'){
      super.init({
        mb_no: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        mb_iock: {
          type: DataTypes.TINYINT,
          allowNull: true
        },
        mb_code: {
          type: DataTypes.STRING(10),
          allowNull: true
        },
        mb_name: {
          type: DataTypes.STRING(50),
          allowNull: true
        },
        mb_area: {
          type: DataTypes.STRING(30),
          allowNull: true
        },
        mb_tel: {
          type: DataTypes.STRING(20),
          allowNull: true
        },
        mb_owner: {
          type: DataTypes.STRING(20),
          allowNull: true
        },
        mb_hp: {
          type: DataTypes.STRING(20),
          allowNull: true
        },
        mb_etc_tel: {
          type: DataTypes.STRING(20),
          allowNull: true
        },
        mb_fax: {
          type: DataTypes.STRING(20),
          allowNull: true
        },
        mb_jumin: {
          type: DataTypes.STRING(50),
          allowNull: true
        },
        mb_yeargum: {
          type: DataTypes.DOUBLE,
          allowNull: true
        },
        mb_post: {
          type: DataTypes.STRING(7),
          allowNull: true
        },
        mb_postjuso: {
          type: DataTypes.STRING(255),
          allowNull: true
        },
        mb_juso: {
          type: DataTypes.STRING(255),
          allowNull: true
        },
        mb_main_crop: {
          type: DataTypes.STRING(100),
          allowNull: true
        },
        mb_farm_size: {
          type: DataTypes.STRING(100),
          allowNull: true
        },
        mb_homepage: {
          type: DataTypes.STRING(255),
          allowNull: true
        },
        mb_email: {
          type: DataTypes.STRING(100),
          allowNull: true
        },
        mb_etc: {
          type: DataTypes.STRING(255),
          allowNull: true
        },
        mb_bunru: {
          type: DataTypes.INTEGER,
          allowNull: true
        },
        mb_danga_gubun: {
          type: DataTypes.TINYINT,
          allowNull: true
        },
        mb_tax: {
          type: DataTypes.TINYINT,
          allowNull: true
        },
        mb_sms: {
          type: DataTypes.TINYINT,
          allowNull: true
        },
        mb_farmck: {
          type: DataTypes.TINYINT,
          allowNull: true
        },
        mb_idx: {
          type: DataTypes.STRING(500),
          allowNull: true
        },
        mb_saupno: {
          type: DataTypes.STRING(12),
          allowNull: true
        },
        mb_uptae: {
          type: DataTypes.STRING(50),
          allowNull: true
        },
        mb_jongmok: {
          type: DataTypes.STRING(50),
          allowNull: true
        },
        mb_memo: {
          type: DataTypes.TEXT,
          allowNull: true
        },
        mb_datetime: {
          type: DataTypes.STRING(30),
          allowNull: true
        },
        mb_damdang: {
          type: DataTypes.STRING(30),
          allowNull: true
        },
        mb_damdangpon: {
          type: DataTypes.STRING(20),
          allowNull: true
        },
        mb_cotel: {
          type: DataTypes.STRING(20),
          allowNull: true
        },
        mb_bankno: {
          type: DataTypes.STRING(255),
          allowNull: true
        },
        mb_gaein: {
          type: DataTypes.TINYINT,
          allowNull: true
        },
        mb_sunmon: {
          type: DataTypes.TINYINT,
          allowNull: true
        },
        mb_birth: {
          type: DataTypes.STRING(10),
          allowNull: true
        },
        mb_danga_vat: {
          type: DataTypes.TINYINT,
          allowNull: true
        },
        mb_grant: {
          type: DataTypes.TINYINT,
          allowNull: true
        },
        mb_10: {
          type: DataTypes.TINYINT,
          allowNull: true
        },
        mb_20: {
          type: DataTypes.TINYINT,
          allowNull: true
        },
        mb_30: {
          type: DataTypes.TINYINT,
          allowNull: true
        },
        mb_40: {
          type: DataTypes.TINYINT,
          allowNull: true
        },
        mb_farmbigo: {
          type: DataTypes.STRING(255),
          allowNull: true
        },
        mb_effect: {
          type: DataTypes.STRING(4),
          allowNull: true
        },
        mb_forecolor: {
          type: DataTypes.INTEGER,
          allowNull: true
        },
        mb_backcolor: {
          type: DataTypes.INTEGER,
          allowNull: true
        },
        mb_imsijaro: {
          type: DataTypes.STRING(50),
          allowNull: true
        },
        mb_imsijarock: {
          type: DataTypes.TINYINT,
          allowNull: true
        },
        mb_noja: {
          type: DataTypes.TINYINT,
          allowNull: true
        },
        mb_danga_sel: {
          type: DataTypes.TINYINT,
          allowNull: true
        },
        mb_del_2: {
          type: DataTypes.INTEGER,
          allowNull: true
        },
        mb_farmCode: {
          type: DataTypes.STRING(20),
          allowNull: true
        },
        mb_agree: {
          type: DataTypes.TINYINT,
          allowNull: true
        },
        mb_agree_date: {
          type: DataTypes.STRING(10),
          allowNull: true
        },
        mb_agree_sign: {
          type: DataTypes.VIRTUAL,
          get() {
            return 'none'
          }
        },
        mb_del_2: {
          type: DataTypes.VIRTUAL,
          get() {
            return 'none'
          }
        }
      }, {
        sequelize,
        tableName: table_info.table_name,
        timestamps: false,
        indexes: [
          {
            name: "PRIMARY",
            unique: true,
            using: "BTREE",
            fields: [
              { name: "mb_no" },
            ]
          },
          {
            name: "Index1",
            using: "BTREE",
            fields: [
              { name: "mb_code" },
            ]
          },
        ]
      });
      return ws_outco;
    }else {
      super.init({
        mb_no: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        mb_iock: {
          type: DataTypes.TINYINT,
          allowNull: true
        },
        mb_code: {
          type: DataTypes.STRING(10),
          allowNull: true
        },
        mb_name: {
          type: DataTypes.STRING(50),
          allowNull: true
        },
        mb_area: {
          type: DataTypes.STRING(30),
          allowNull: true
        },
        mb_tel: {
          type: DataTypes.STRING(20),
          allowNull: true
        },
        mb_owner: {
          type: DataTypes.STRING(20),
          allowNull: true
        },
        mb_hp: {
          type: DataTypes.STRING(20),
          allowNull: true
        },
        mb_etc_tel: {
          type: DataTypes.STRING(20),
          allowNull: true
        },
        mb_fax: {
          type: DataTypes.STRING(20),
          allowNull: true
        },
        mb_jumin: {
          type: DataTypes.STRING(50),
          allowNull: true
        },
        mb_yeargum: {
          type: DataTypes.DOUBLE,
          allowNull: true
        },
        mb_post: {
          type: DataTypes.STRING(7),
          allowNull: true
        },
        mb_postjuso: {
          type: DataTypes.STRING(255),
          allowNull: true
        },
        mb_juso: {
          type: DataTypes.STRING(255),
          allowNull: true
        },
        mb_main_crop: {
          type: DataTypes.STRING(100),
          allowNull: true
        },
        mb_farm_size: {
          type: DataTypes.STRING(100),
          allowNull: true
        },
        mb_homepage: {
          type: DataTypes.STRING(255),
          allowNull: true
        },
        mb_email: {
          type: DataTypes.STRING(100),
          allowNull: true
        },
        mb_etc: {
          type: DataTypes.STRING(255),
          allowNull: true
        },
        mb_bunru: {
          type: DataTypes.INTEGER,
          allowNull: true
        },
        mb_danga_gubun: {
          type: DataTypes.TINYINT,
          allowNull: true
        },
        mb_tax: {
          type: DataTypes.TINYINT,
          allowNull: true
        },
        mb_sms: {
          type: DataTypes.TINYINT,
          allowNull: true
        },
        mb_farmck: {
          type: DataTypes.TINYINT,
          allowNull: true
        },
        mb_idx: {
          type: DataTypes.STRING(500),
          allowNull: true
        },
        mb_saupno: {
          type: DataTypes.STRING(12),
          allowNull: true
        },
        mb_uptae: {
          type: DataTypes.STRING(50),
          allowNull: true
        },
        mb_jongmok: {
          type: DataTypes.STRING(50),
          allowNull: true
        },
        mb_memo: {
          type: DataTypes.TEXT,
          allowNull: true
        },
        mb_datetime: {
          type: DataTypes.STRING(30),
          allowNull: true
        },
        mb_damdang: {
          type: DataTypes.STRING(30),
          allowNull: true
        },
        mb_damdangpon: {
          type: DataTypes.STRING(20),
          allowNull: true
        },
        mb_cotel: {
          type: DataTypes.STRING(20),
          allowNull: true
        },
        mb_bankno: {
          type: DataTypes.STRING(255),
          allowNull: true
        },
        mb_gaein: {
          type: DataTypes.TINYINT,
          allowNull: true
        },
        mb_sunmon: {
          type: DataTypes.TINYINT,
          allowNull: true
        },
        mb_birth: {
          type: DataTypes.STRING(10),
          allowNull: true
        },
        mb_danga_vat: {
          type: DataTypes.TINYINT,
          allowNull: true
        },
        mb_grant: {
          type: DataTypes.TINYINT,
          allowNull: true
        },
        mb_10: {
          type: DataTypes.TINYINT,
          allowNull: true
        },
        mb_20: {
          type: DataTypes.TINYINT,
          allowNull: true
        },
        mb_30: {
          type: DataTypes.TINYINT,
          allowNull: true
        },
        mb_40: {
          type: DataTypes.TINYINT,
          allowNull: true
        },
        mb_farmbigo: {
          type: DataTypes.STRING(255),
          allowNull: true
        },
        mb_effect: {
          type: DataTypes.STRING(4),
          allowNull: true
        },
        mb_forecolor: {
          type: DataTypes.INTEGER,
          allowNull: true
        },
        mb_backcolor: {
          type: DataTypes.INTEGER,
          allowNull: true
        },
        mb_imsijaro: {
          type: DataTypes.STRING(50),
          allowNull: true
        },
        mb_imsijarock: {
          type: DataTypes.TINYINT,
          allowNull: true
        },
        mb_noja: {
          type: DataTypes.TINYINT,
          allowNull: true
        },
        mb_danga_sel: {
          type: DataTypes.TINYINT,
          allowNull: true
        },
        mb_del_2: {
          type: DataTypes.INTEGER,
          allowNull: true
        },
        mb_farmCode: {
          type: DataTypes.STRING(20),
          allowNull: true
        },
        mb_agree: {
          type: DataTypes.TINYINT,
          allowNull: true
        },
        mb_agree_date: {
          type: DataTypes.STRING(10),
          allowNull: true
        },
        mb_agree_sign: {
          type: DataTypes.TEXT,
          allowNull: true
        },
        mb_del_2: {
          type: DataTypes.VIRTUAL,
          get() {
            return 'none'
          }
        }
      }, {
        sequelize,
        tableName: table_info.table_name,
        timestamps: false,
        indexes: [
          {
            name: "PRIMARY",
            unique: true,
            using: "BTREE",
            fields: [
              { name: "mb_no" },
            ]
          },
          {
            name: "Index1",
            using: "BTREE",
            fields: [
              { name: "mb_code" },
            ]
          },
        ]
      });
      return ws_outco;
    }
  }
}
