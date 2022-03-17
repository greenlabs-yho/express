const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes, table_info) => {
  return ws_card.init(sequelize, DataTypes, table_info);
}

class ws_card extends Sequelize.Model {
  static init(sequelize, DataTypes, table_info) {
    if(table_info.table_type == 'I'){
      super.init({
        ca_no: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        ca_gubun: {
          type: DataTypes.STRING(2),
          allowNull: true
        },
        ca_yuhyung: {
          type: DataTypes.STRING(2),
          allowNull: true
        },
        ca_an_code: {
          type: DataTypes.STRING(2),
          allowNull: true
        },
        ca_m_no: {
          type: DataTypes.STRING(10),
          allowNull: true
        },
        ca_pos_mode: {
          type: DataTypes.STRING(2),
          allowNull: true
        },
        ca_card: {
          type: DataTypes.STRING(20),
          allowNull: true
        },
        ca_ser_code: {
          type: DataTypes.STRING(5),
          allowNull: true
        },
        ca_paym: {
          type: DataTypes.STRING(2),
          allowNull: true
        },
        ca_datetime: {
          type: DataTypes.STRING(12),
          allowNull: true
        },
        ca_s_date: {
          type: DataTypes.STRING(8),
          allowNull: true
        },
        ca_amou: {
          type: DataTypes.INTEGER,
          allowNull: true
        },
        ca_ser_m: {
          type: DataTypes.INTEGER,
          allowNull: true
        },
        ca_tax: {
          type: DataTypes.INTEGER,
          allowNull: true
        },
        ca_appr: {
          type: DataTypes.STRING(12),
          allowNull: true
        },
        ca_ori_no: {
          type: DataTypes.STRING(12),
          allowNull: true
        },
        ca_ccode: {
          type: DataTypes.STRING(4),
          allowNull: true
        },
        ca_cname: {
          type: DataTypes.STRING(16),
          allowNull: true
        },
        ca_ga_no: {
          type: DataTypes.STRING(15),
          allowNull: true
        },
        ca_in_gubun: {
          type: DataTypes.STRING(1),
          allowNull: true
        },
        ca_in_code: {
          type: DataTypes.STRING(4),
          allowNull: true
        },
        ca_in_name: {
          type: DataTypes.STRING(16),
          allowNull: true
        },
        ca_sign: {
          type: DataTypes.STRING(2048),
          allowNull: true
        },
        ca_out_date: {
          type: DataTypes.STRING(13),
          allowNull: true
        },
        ca_out_code: {
          type: DataTypes.STRING(10),
          allowNull: true
        },
        ca_io_gubun: {
          type: DataTypes.STRING(2),
          allowNull: true
        },
        ca_io_user: {
          type: DataTypes.STRING(20),
          allowNull: true
        },
        ca_ip: {
          type: DataTypes.STRING(15),
          allowNull: true
        },
        ca_pc_no: {
          type: DataTypes.STRING(10),
          allowNull: true
        },
        ca_jang_serno: {
          type: DataTypes.INTEGER,
          allowNull: true
        },
        ca_bigo: {
          type: DataTypes.STRING(255),
          allowNull: true
        },
        ca_appr2: {
          type: DataTypes.STRING(12),
          allowNull: true
        },
        ca_ipgum: {
          type: DataTypes.STRING(12),
          allowNull: true
        },
        ca_cancel_user: {
          type: DataTypes.STRING(20),
          allowNull: true
        },
        ca_taxck: {
          type: DataTypes.VIRTUAL,
          get(){return 'none'}
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
              { name: "ca_no" },
            ]
          },
          {
            name: "Index1",
            using: "BTREE",
            fields: [
              { name: "ca_out_date" },
            ]
          },
          {
            name: "Index2",
            using: "BTREE",
            fields: [
              { name: "ca_out_code" },
            ]
          },
          {
            name: "Index3",
            using: "BTREE",
            fields: [
              { name: "ca_jang_serno" },
            ]
          },
          {
            name: "Index4",
            using: "BTREE",
            fields: [
              { name: "ca_yuhyung" },
            ]
          },
        ]
      });
      return ws_card;
    }else if(table_info.table_type == 'H'){
      super.init({
        ca_no: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        ca_gubun: {
          type: DataTypes.STRING(2),
          allowNull: true
        },
        ca_yuhyung: {
          type: DataTypes.STRING(2),
          allowNull: true
        },
        ca_an_code: {
          type: DataTypes.STRING(2),
          allowNull: true
        },
        ca_m_no: {
          type: DataTypes.STRING(10),
          allowNull: true
        },
        ca_pos_mode: {
          type: DataTypes.STRING(2),
          allowNull: true
        },
        ca_card: {
          type: DataTypes.STRING(20),
          allowNull: true
        },
        ca_ser_code: {
          type: DataTypes.STRING(5),
          allowNull: true
        },
        ca_paym: {
          type: DataTypes.STRING(2),
          allowNull: true
        },
        ca_datetime: {
          type: DataTypes.STRING(12),
          allowNull: true
        },
        ca_s_date: {
          type: DataTypes.STRING(8),
          allowNull: true
        },
        ca_amou: {
          type: DataTypes.INTEGER,
          allowNull: true
        },
        ca_ser_m: {
          type: DataTypes.INTEGER,
          allowNull: true
        },
        ca_tax: {
          type: DataTypes.INTEGER,
          allowNull: true
        },
        ca_appr: {
          type: DataTypes.STRING(12),
          allowNull: true
        },
        ca_ori_no: {
          type: DataTypes.STRING(12),
          allowNull: true
        },
        ca_ccode: {
          type: DataTypes.STRING(4),
          allowNull: true
        },
        ca_cname: {
          type: DataTypes.STRING(16),
          allowNull: true
        },
        ca_ga_no: {
          type: DataTypes.STRING(15),
          allowNull: true
        },
        ca_in_gubun: {
          type: DataTypes.STRING(1),
          allowNull: true
        },
        ca_in_code: {
          type: DataTypes.STRING(4),
          allowNull: true
        },
        ca_in_name: {
          type: DataTypes.STRING(16),
          allowNull: true
        },
        ca_sign: {
          type: DataTypes.STRING(2048),
          allowNull: true
        },
        ca_out_date: {
          type: DataTypes.STRING(13),
          allowNull: true
        },
        ca_out_code: {
          type: DataTypes.STRING(10),
          allowNull: true
        },
        ca_io_gubun: {
          type: DataTypes.STRING(2),
          allowNull: true
        },
        ca_io_user: {
          type: DataTypes.STRING(20),
          allowNull: true
        },
        ca_ip: {
          type: DataTypes.STRING(15),
          allowNull: true
        },
        ca_pc_no: {
          type: DataTypes.STRING(10),
          allowNull: true
        },
        ca_jang_serno: {
          type: DataTypes.INTEGER,
          allowNull: true
        },
        ca_bigo: {
          type: DataTypes.STRING(255),
          allowNull: true
        },
        ca_appr2: {
          type: DataTypes.STRING(12),
          allowNull: true
        },
        ca_imgum: {
          type: DataTypes.STRING(10),
          allowNull: true
        },
        ca_cancel_user: {
          type: DataTypes.STRING(20),
          allowNull: true
        },
        ca_taxck: {
          type: DataTypes.VIRTUAL,
          get(){return 'none'}
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
              { name: "ca_no" },
            ]
          },
          {
            name: "Index1",
            using: "BTREE",
            fields: [
              { name: "ca_out_date" },
            ]
          },
          {
            name: "Index2",
            using: "BTREE",
            fields: [
              { name: "ca_out_code" },
            ]
          },
          {
            name: "Index3",
            using: "BTREE",
            fields: [
              { name: "ca_jang_serno" },
            ]
          },
          {
            name: "Index4",
            using: "BTREE",
            fields: [
              { name: "ca_yuhyung" },
            ]
          },
        ]
      });
      return ws_card;
    }else if(table_info.table_type == 'F'){
      super.init({
        ca_no: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        ca_gubun: {
          type: DataTypes.STRING(2),
          allowNull: true
        },
        ca_yuhyung: {
          type: DataTypes.STRING(2),
          allowNull: true
        },
        ca_an_code: {
          type: DataTypes.STRING(2),
          allowNull: true
        },
        ca_m_no: {
          type: DataTypes.STRING(10),
          allowNull: true
        },
        ca_pos_mode: {
          type: DataTypes.STRING(2),
          allowNull: true
        },
        ca_card: {
          type: DataTypes.STRING(20),
          allowNull: true
        },
        ca_ser_code: {
          type: DataTypes.STRING(5),
          allowNull: true
        },
        ca_paym: {
          type: DataTypes.STRING(2),
          allowNull: true
        },
        ca_datetime: {
          type: DataTypes.STRING(12),
          allowNull: true
        },
        ca_s_date: {
          type: DataTypes.STRING(8),
          allowNull: true
        },
        ca_amou: {
          type: DataTypes.INTEGER,
          allowNull: true
        },
        ca_ser_m: {
          type: DataTypes.INTEGER,
          allowNull: true
        },
        ca_tax: {
          type: DataTypes.INTEGER,
          allowNull: true
        },
        ca_appr: {
          type: DataTypes.STRING(12),
          allowNull: true
        },
        ca_ori_no: {
          type: DataTypes.STRING(12),
          allowNull: true
        },
        ca_ccode: {
          type: DataTypes.STRING(4),
          allowNull: true
        },
        ca_cname: {
          type: DataTypes.STRING(16),
          allowNull: true
        },
        ca_ga_no: {
          type: DataTypes.STRING(15),
          allowNull: true
        },
        ca_in_gubun: {
          type: DataTypes.STRING(1),
          allowNull: true
        },
        ca_in_code: {
          type: DataTypes.STRING(4),
          allowNull: true
        },
        ca_in_name: {
          type: DataTypes.STRING(16),
          allowNull: true
        },
        ca_sign: {
          type: DataTypes.STRING(2048),
          allowNull: true
        },
        ca_out_date: {
          type: DataTypes.STRING(13),
          allowNull: true
        },
        ca_out_code: {
          type: DataTypes.STRING(10),
          allowNull: true
        },
        ca_io_gubun: {
          type: DataTypes.STRING(2),
          allowNull: true
        },
        ca_io_user: {
          type: DataTypes.STRING(20),
          allowNull: true
        },
        ca_ip: {
          type: DataTypes.STRING(15),
          allowNull: true
        },
        ca_pc_no: {
          type: DataTypes.STRING(10),
          allowNull: true
        },
        ca_jang_serno: {
          type: DataTypes.INTEGER,
          allowNull: true
        },
        ca_bigo: {
          type: DataTypes.STRING(255),
          allowNull: true
        },
        ca_appr2: {
          type: DataTypes.STRING(12),
          allowNull: true
        },
        ca_ipgum: {
          type: DataTypes.VIRTUAL,
          get(){return 'none'}
        },
        ca_cancel_user: {
          type: DataTypes.STRING(20),
          allowNull: true
        },
        ca_taxck: {
          type: DataTypes.INTEGER,
          allowNull: true
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
              { name: "ca_no" },
            ]
          },
          {
            name: "Index1",
            using: "BTREE",
            fields: [
              { name: "ca_out_date" },
            ]
          },
          {
            name: "Index2",
            using: "BTREE",
            fields: [
              { name: "ca_out_code" },
            ]
          },
          {
            name: "Index3",
            using: "BTREE",
            fields: [
              { name: "ca_jang_serno" },
            ]
          },
          {
            name: "Index4",
            using: "BTREE",
            fields: [
              { name: "ca_yuhyung" },
            ]
          },
        ]
      });
      return ws_card;
    }else if(table_info.table_type == 'E' || table_info.table_type == 'G'){
      super.init({
        ca_no: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        ca_gubun: {
          type: DataTypes.STRING(2),
          allowNull: true
        },
        ca_yuhyung: {
          type: DataTypes.STRING(2),
          allowNull: true
        },
        ca_an_code: {
          type: DataTypes.STRING(2),
          allowNull: true
        },
        ca_m_no: {
          type: DataTypes.STRING(10),
          allowNull: true
        },
        ca_pos_mode: {
          type: DataTypes.STRING(2),
          allowNull: true
        },
        ca_card: {
          type: DataTypes.STRING(20),
          allowNull: true
        },
        ca_ser_code: {
          type: DataTypes.STRING(5),
          allowNull: true
        },
        ca_paym: {
          type: DataTypes.STRING(2),
          allowNull: true
        },
        ca_datetime: {
          type: DataTypes.STRING(12),
          allowNull: true
        },
        ca_s_date: {
          type: DataTypes.STRING(8),
          allowNull: true
        },
        ca_amou: {
          type: DataTypes.INTEGER,
          allowNull: true
        },
        ca_ser_m: {
          type: DataTypes.INTEGER,
          allowNull: true
        },
        ca_tax: {
          type: DataTypes.INTEGER,
          allowNull: true
        },
        ca_appr: {
          type: DataTypes.STRING(12),
          allowNull: true
        },
        ca_ori_no: {
          type: DataTypes.STRING(12),
          allowNull: true
        },
        ca_ccode: {
          type: DataTypes.STRING(4),
          allowNull: true
        },
        ca_cname: {
          type: DataTypes.STRING(16),
          allowNull: true
        },
        ca_ga_no: {
          type: DataTypes.STRING(15),
          allowNull: true
        },
        ca_in_gubun: {
          type: DataTypes.STRING(1),
          allowNull: true
        },
        ca_in_code: {
          type: DataTypes.STRING(4),
          allowNull: true
        },
        ca_in_name: {
          type: DataTypes.STRING(16),
          allowNull: true
        },
        ca_sign: {
          type: DataTypes.STRING(2048),
          allowNull: true
        },
        ca_out_date: {
          type: DataTypes.STRING(13),
          allowNull: true
        },
        ca_out_code: {
          type: DataTypes.STRING(10),
          allowNull: true
        },
        ca_io_gubun: {
          type: DataTypes.STRING(2),
          allowNull: true
        },
        ca_io_user: {
          type: DataTypes.STRING(20),
          allowNull: true
        },
        ca_ip: {
          type: DataTypes.STRING(15),
          allowNull: true
        },
        ca_pc_no: {
          type: DataTypes.STRING(10),
          allowNull: true
        },
        ca_jang_serno: {
          type: DataTypes.INTEGER,
          allowNull: true
        },
        ca_bigo: {
          type: DataTypes.STRING(255),
          allowNull: true
        },
        ca_appr2: {
          type: DataTypes.STRING(12),
          allowNull: true
        },
        ca_ipgum: {
          type: DataTypes.STRING(10),
          allowNull: true
        },
        ca_cancel_date: {
          type: DataTypes.STRING(20),
          allowNull: true
        },
        ca_taxck: {
          type: DataTypes.VIRTUAL,
          get(){return 'none'}
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
              { name: "ca_no" },
            ]
          },
          {
            name: "Index1",
            using: "BTREE",
            fields: [
              { name: "ca_out_date" },
            ]
          },
          {
            name: "Index2",
            using: "BTREE",
            fields: [
              { name: "ca_out_code" },
            ]
          },
          {
            name: "Index3",
            using: "BTREE",
            fields: [
              { name: "ca_jang_serno" },
            ]
          },
          {
            name: "Index4",
            using: "BTREE",
            fields: [
              { name: "ca_yuhyung" },
            ]
          },
        ]
      });
      return ws_card;
    }else if(table_info.table_type == 'D'){
      super.init({
        ca_no: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        ca_gubun: {
          type: DataTypes.STRING(2),
          allowNull: true
        },
        ca_yuhyung: {
          type: DataTypes.STRING(2),
          allowNull: true
        },
        ca_an_code: {
          type: DataTypes.STRING(2),
          allowNull: true
        },
        ca_m_no: {
          type: DataTypes.STRING(10),
          allowNull: true
        },
        ca_pos_mode: {
          type: DataTypes.STRING(2),
          allowNull: true
        },
        ca_card: {
          type: DataTypes.STRING(20),
          allowNull: true
        },
        ca_ser_code: {
          type: DataTypes.STRING(5),
          allowNull: true
        },
        ca_paym: {
          type: DataTypes.STRING(2),
          allowNull: true
        },
        ca_datetime: {
          type: DataTypes.STRING(12),
          allowNull: true
        },
        ca_s_date: {
          type: DataTypes.STRING(8),
          allowNull: true
        },
        ca_amou: {
          type: DataTypes.INTEGER,
          allowNull: true
        },
        ca_ser_m: {
          type: DataTypes.INTEGER,
          allowNull: true
        },
        ca_tax: {
          type: DataTypes.INTEGER,
          allowNull: true
        },
        ca_appr: {
          type: DataTypes.STRING(12),
          allowNull: true
        },
        ca_ori_no: {
          type: DataTypes.STRING(12),
          allowNull: true
        },
        ca_ccode: {
          type: DataTypes.STRING(4),
          allowNull: true
        },
        ca_cname: {
          type: DataTypes.STRING(16),
          allowNull: true
        },
        ca_ga_no: {
          type: DataTypes.STRING(15),
          allowNull: true
        },
        ca_in_gubun: {
          type: DataTypes.STRING(1),
          allowNull: true
        },
        ca_in_code: {
          type: DataTypes.STRING(4),
          allowNull: true
        },
        ca_in_name: {
          type: DataTypes.STRING(16),
          allowNull: true
        },
        ca_sign: {
          type: DataTypes.STRING(2048),
          allowNull: true
        },
        ca_out_date: {
          type: DataTypes.STRING(13),
          allowNull: true
        },
        ca_out_code: {
          type: DataTypes.STRING(10),
          allowNull: true
        },
        ca_io_gubun: {
          type: DataTypes.STRING(2),
          allowNull: true
        },
        ca_io_user: {
          type: DataTypes.STRING(20),
          allowNull: true
        },
        ca_ip: {
          type: DataTypes.STRING(15),
          allowNull: true
        },
        ca_pc_no: {
          type: DataTypes.STRING(10),
          allowNull: true
        },
        ca_jang_serno: {
          type: DataTypes.INTEGER,
          allowNull: true
        },
        ca_bigo: {
          type: DataTypes.STRING(255),
          allowNull: true
        },
        ca_appr2: {
          type: DataTypes.STRING(12),
          allowNull: true
        },
        ca_ipgum: {
          type: DataTypes.VIRTUAL,
          get(){return 'none'}
        },
        ca_cancel_user: {
          type: DataTypes.STRING(20),
          allowNull: true
        },
        ca_taxck: {
          type: DataTypes.VIRTUAL,
          get(){return 'none'}
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
              { name: "ca_no" },
            ]
          },
          {
            name: "Index1",
            using: "BTREE",
            fields: [
              { name: "ca_out_date" },
            ]
          },
          {
            name: "Index2",
            using: "BTREE",
            fields: [
              { name: "ca_out_code" },
            ]
          },
          {
            name: "Index3",
            using: "BTREE",
            fields: [
              { name: "ca_jang_serno" },
            ]
          },
          {
            name: "Index4",
            using: "BTREE",
            fields: [
              { name: "ca_yuhyung" },
            ]
          },
        ]
      });
      return ws_card;
    }else if(table_info.table_type == 'C'){
      super.init({
        ca_no: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        ca_gubun: {
          type: DataTypes.STRING(2),
          allowNull: true
        },
        ca_yuhyung: {
          type: DataTypes.STRING(2),
          allowNull: true
        },
        ca_an_code: {
          type: DataTypes.STRING(2),
          allowNull: true
        },
        ca_m_no: {
          type: DataTypes.STRING(10),
          allowNull: true
        },
        ca_pos_mode: {
          type: DataTypes.STRING(2),
          allowNull: true
        },
        ca_card: {
          type: DataTypes.STRING(20),
          allowNull: true
        },
        ca_ser_code: {
          type: DataTypes.STRING(5),
          allowNull: true
        },
        ca_paym: {
          type: DataTypes.STRING(2),
          allowNull: true
        },
        ca_datetime: {
          type: DataTypes.STRING(12),
          allowNull: true
        },
        ca_s_date: {
          type: DataTypes.STRING(8),
          allowNull: true
        },
        ca_amou: {
          type: DataTypes.INTEGER,
          allowNull: true
        },
        ca_ser_m: {
          type: DataTypes.INTEGER,
          allowNull: true
        },
        ca_tax: {
          type: DataTypes.INTEGER,
          allowNull: true
        },
        ca_appr: {
          type: DataTypes.STRING(12),
          allowNull: true
        },
        ca_ori_no: {
          type: DataTypes.STRING(12),
          allowNull: true
        },
        ca_ccode: {
          type: DataTypes.STRING(4),
          allowNull: true
        },
        ca_cname: {
          type: DataTypes.STRING(16),
          allowNull: true
        },
        ca_ga_no: {
          type: DataTypes.STRING(15),
          allowNull: true
        },
        ca_in_gubun: {
          type: DataTypes.STRING(1),
          allowNull: true
        },
        ca_in_code: {
          type: DataTypes.STRING(4),
          allowNull: true
        },
        ca_in_name: {
          type: DataTypes.STRING(16),
          allowNull: true
        },
        ca_sign: {
          type: DataTypes.STRING(2048),
          allowNull: true
        },
        ca_out_date: {
          type: DataTypes.STRING(13),
          allowNull: true
        },
        ca_out_code: {
          type: DataTypes.STRING(10),
          allowNull: true
        },
        ca_io_gubun: {
          type: DataTypes.STRING(2),
          allowNull: true
        },
        ca_io_user: {
          type: DataTypes.STRING(20),
          allowNull: true
        },
        ca_ip: {
          type: DataTypes.STRING(15),
          allowNull: true
        },
        ca_pc_no: {
          type: DataTypes.STRING(10),
          allowNull: true
        },
        ca_jang_serno: {
          type: DataTypes.INTEGER,
          allowNull: true
        },
        ca_bigo: {
          type: DataTypes.STRING(255),
          allowNull: true
        },
        ca_appr2: {
          type: DataTypes.VIRTUAL,
          get(){return 'none'}
        },
        ca_ipgum: {
          type: DataTypes.VIRTUAL,
          get(){return 'none'}
        },
        ca_cancel_user: {
          type: DataTypes.STRING(20),
          allowNull: true
        },
        ca_taxck: {
          type: DataTypes.VIRTUAL,
          get(){return 'none'}
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
              { name: "ca_no" },
            ]
          },
          {
            name: "Index1",
            using: "BTREE",
            fields: [
              { name: "ca_out_date" },
            ]
          },
          {
            name: "Index2",
            using: "BTREE",
            fields: [
              { name: "ca_out_code" },
            ]
          },
          {
            name: "Index3",
            using: "BTREE",
            fields: [
              { name: "ca_jang_serno" },
            ]
          },
          {
            name: "Index4",
            using: "BTREE",
            fields: [
              { name: "ca_yuhyung" },
            ]
          },
        ]
      });
      return ws_card;
    }else if(table_info.table_type == 'B'){
      super.init({
        ca_no: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        ca_gubun: {
          type: DataTypes.STRING(2),
          allowNull: true
        },
        ca_yuhyung: {
          type: DataTypes.STRING(2),
          allowNull: true
        },
        ca_an_code: {
          type: DataTypes.STRING(2),
          allowNull: true
        },
        ca_m_no: {
          type: DataTypes.STRING(10),
          allowNull: true
        },
        ca_pos_mode: {
          type: DataTypes.STRING(2),
          allowNull: true
        },
        ca_card: {
          type: DataTypes.STRING(20),
          allowNull: true
        },
        ca_ser_code: {
          type: DataTypes.STRING(5),
          allowNull: true
        },
        ca_paym: {
          type: DataTypes.STRING(2),
          allowNull: true
        },
        ca_datetime: {
          type: DataTypes.STRING(12),
          allowNull: true
        },
        ca_s_date: {
          type: DataTypes.STRING(8),
          allowNull: true
        },
        ca_amou: {
          type: DataTypes.INTEGER,
          allowNull: true
        },
        ca_ser_m: {
          type: DataTypes.INTEGER,
          allowNull: true
        },
        ca_tax: {
          type: DataTypes.INTEGER,
          allowNull: true
        },
        ca_appr: {
          type: DataTypes.STRING(12),
          allowNull: true
        },
        ca_ori_no: {
          type: DataTypes.STRING(12),
          allowNull: true
        },
        ca_ccode: {
          type: DataTypes.STRING(4),
          allowNull: true
        },
        ca_cname: {
          type: DataTypes.STRING(16),
          allowNull: true
        },
        ca_ga_no: {
          type: DataTypes.STRING(15),
          allowNull: true
        },
        ca_in_gubun: {
          type: DataTypes.STRING(1),
          allowNull: true
        },
        ca_in_code: {
          type: DataTypes.STRING(4),
          allowNull: true
        },
        ca_in_name: {
          type: DataTypes.STRING(16),
          allowNull: true
        },
        ca_sign: {
          type: DataTypes.STRING(2048),
          allowNull: true
        },
        ca_out_date: {
          type: DataTypes.STRING(13),
          allowNull: true
        },
        ca_out_code: {
          type: DataTypes.STRING(10),
          allowNull: true
        },
        ca_io_gubun: {
          type: DataTypes.STRING(2),
          allowNull: true
        },
        ca_io_user: {
          type: DataTypes.STRING(20),
          allowNull: true
        },
        ca_ip: {
          type: DataTypes.STRING(15),
          allowNull: true
        },
        ca_pc_no: {
          type: DataTypes.STRING(10),
          allowNull: true
        },
        ca_jang_serno: {
          type: DataTypes.INTEGER,
          allowNull: true
        },
        ca_bigo: {
          type: DataTypes.STRING(255),
          allowNull: true
        },
        ca_appr2: {
          type: DataTypes.STRING(12),
          allowNull: true
        },
        ca_imgum: {
          type: DataTypes.STRING(10),
          allowNull: true
        },
        ca_cancel_date: {
          type: DataTypes.STRING(20),
          allowNull: true
        },
        ca_taxck: {
          type: DataTypes.INTEGER,
          allowNull: true
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
              { name: "ca_no" },
            ]
          },
          {
            name: "Index1",
            using: "BTREE",
            fields: [
              { name: "ca_out_date" },
            ]
          },
          {
            name: "Index2",
            using: "BTREE",
            fields: [
              { name: "ca_out_code" },
            ]
          },
          {
            name: "Index3",
            using: "BTREE",
            fields: [
              { name: "ca_jang_serno" },
            ]
          },
          {
            name: "Index4",
            using: "BTREE",
            fields: [
              { name: "ca_yuhyung" },
            ]
          },
        ]
      });
      return ws_card;
    }else{
      super.init({
        ca_no: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        ca_gubun: {
          type: DataTypes.STRING(2),
          allowNull: true
        },
        ca_yuhyung: {
          type: DataTypes.STRING(2),
          allowNull: true
        },
        ca_an_code: {
          type: DataTypes.STRING(2),
          allowNull: true
        },
        ca_m_no: {
          type: DataTypes.STRING(10),
          allowNull: true
        },
        ca_pos_mode: {
          type: DataTypes.STRING(2),
          allowNull: true
        },
        ca_card: {
          type: DataTypes.STRING(20),
          allowNull: true
        },
        ca_ser_code: {
          type: DataTypes.STRING(5),
          allowNull: true
        },
        ca_paym: {
          type: DataTypes.STRING(2),
          allowNull: true
        },
        ca_datetime: {
          type: DataTypes.STRING(12),
          allowNull: true
        },
        ca_s_date: {
          type: DataTypes.STRING(8),
          allowNull: true
        },
        ca_amou: {
          type: DataTypes.INTEGER,
          allowNull: true
        },
        ca_ser_m: {
          type: DataTypes.INTEGER,
          allowNull: true
        },
        ca_tax: {
          type: DataTypes.INTEGER,
          allowNull: true
        },
        ca_appr: {
          type: DataTypes.STRING(12),
          allowNull: true
        },
        ca_ori_no: {
          type: DataTypes.STRING(12),
          allowNull: true
        },
        ca_ccode: {
          type: DataTypes.STRING(4),
          allowNull: true
        },
        ca_cname: {
          type: DataTypes.STRING(16),
          allowNull: true
        },
        ca_ga_no: {
          type: DataTypes.STRING(15),
          allowNull: true
        },
        ca_in_gubun: {
          type: DataTypes.STRING(1),
          allowNull: true
        },
        ca_in_code: {
          type: DataTypes.STRING(4),
          allowNull: true
        },
        ca_in_name: {
          type: DataTypes.STRING(16),
          allowNull: true
        },
        ca_sign: {
          type: DataTypes.STRING(2048),
          allowNull: true
        },
        ca_out_date: {
          type: DataTypes.STRING(13),
          allowNull: true
        },
        ca_out_code: {
          type: DataTypes.STRING(10),
          allowNull: true
        },
        ca_io_gubun: {
          type: DataTypes.STRING(2),
          allowNull: true
        },
        ca_io_user: {
          type: DataTypes.STRING(20),
          allowNull: true
        },
        ca_ip: {
          type: DataTypes.STRING(15),
          allowNull: true
        },
        ca_pc_no: {
          type: DataTypes.STRING(10),
          allowNull: true
        },
        ca_jang_serno: {
          type: DataTypes.INTEGER,
          allowNull: true
        },
        ca_bigo: {
          type: DataTypes.STRING(255),
          allowNull: true
        },
        ca_appr2: {
          type: DataTypes.STRING(12),
          allowNull: true
        },
        ca_ipgum: {
          type: DataTypes.STRING(12),
          allowNull: true
        },
        ca_cancel_date: {
          type: DataTypes.STRING(20),
          allowNull: true
        },
        ca_taxck: {
          type: DataTypes.INTEGER,
          allowNull: true
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
              { name: "ca_no" },
            ]
          },
          {
            name: "Index1",
            using: "BTREE",
            fields: [
              { name: "ca_out_date" },
            ]
          },
          {
            name: "Index2",
            using: "BTREE",
            fields: [
              { name: "ca_out_code" },
            ]
          },
          {
            name: "Index3",
            using: "BTREE",
            fields: [
              { name: "ca_jang_serno" },
            ]
          },
          {
            name: "Index4",
            using: "BTREE",
            fields: [
              { name: "ca_yuhyung" },
            ]
          },
        ]
      });
      return ws_card;
    }
  }
}
