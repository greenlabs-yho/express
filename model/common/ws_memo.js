const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes, table_info) => {
  return ws_memo.init(sequelize, DataTypes, table_info);
}

class ws_memo extends Sequelize.Model {
  static init(sequelize, DataTypes, table_info) {
    if(table_info.table_type == 'A'){
      super.init({
        mb_no: {
          type: DataTypes.VIRTUAL,
          get() {
            return 'none'
          }
        },
        mo_id: {
          type: DataTypes.STRING(10),
          allowNull: true,
          primaryKey: true
        },
        mo_datetime: {
          type: DataTypes.STRING(20),
          allowNull: true
        },
        mo_code: {
          type: DataTypes.STRING(10),
          allowNull: true
        },
        mo_memo: {
          type: DataTypes.TEXT,
          allowNull: true
        },
        mo_font: {
          type: DataTypes.STRING(30),
          allowNull: true
        },
        mo_fontsize: {
          type: DataTypes.INTEGER,
          allowNull: true
        },
        mo_fontcolor: {
          type: DataTypes.INTEGER,
          allowNull: true
        },
        mo_backcolor: {
          type: DataTypes.INTEGER,
          allowNull: true
        },
        mo_fontbold: {
          type: DataTypes.TINYINT,
          allowNull: true
        },
        mo_FontItalic: {
          type: DataTypes.TINYINT,
          allowNull: true
        },
        mo_FontUnderline: {
          type: DataTypes.TINYINT,
          allowNull: true
        },
        mo_FontStrikethru: {
          type: DataTypes.TINYINT,
          allowNull: true
        },
        mo_Alignment: {
          type: DataTypes.TINYINT,
          allowNull: true
        },
        mo_Orientation: {
          type: DataTypes.TINYINT,
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
              { name: "mo_id" },
            ]
          },
          {
            name: "Index0",
            unique: true,
            using: "BTREE",
            fields: [
              { name: "mo_id" },
              { name: "mo_datetime" },
              { name: "mo_code" },
            ]
          },
        ]
      });
      return ws_memo;
    }else{
      super.init({
        mb_no: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        mo_id: {
          type: DataTypes.STRING(10),
          allowNull: true
        },
        mo_datetime: {
          type: DataTypes.STRING(20),
          allowNull: true
        },
        mo_code: {
          type: DataTypes.STRING(10),
          allowNull: true
        },
        mo_memo: {
          type: DataTypes.TEXT,
          allowNull: true
        },
        mo_font: {
          type: DataTypes.STRING(30),
          allowNull: true
        },
        mo_fontsize: {
          type: DataTypes.INTEGER,
          allowNull: true
        },
        mo_fontcolor: {
          type: DataTypes.INTEGER,
          allowNull: true
        },
        mo_backcolor: {
          type: DataTypes.INTEGER,
          allowNull: true
        },
        mo_fontbold: {
          type: DataTypes.TINYINT,
          allowNull: true
        },
        mo_FontItalic: {
          type: DataTypes.TINYINT,
          allowNull: true
        },
        mo_FontUnderline: {
          type: DataTypes.TINYINT,
          allowNull: true
        },
        mo_FontStrikethru: {
          type: DataTypes.TINYINT,
          allowNull: true
        },
        mo_Alignment: {
          type: DataTypes.TINYINT,
          allowNull: true
        },
        mo_Orientation: {
          type: DataTypes.TINYINT,
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
              { name: "mb_no" },
            ]
          },
          {
            name: "Index0",
            unique: true,
            using: "BTREE",
            fields: [
              { name: "mo_id" },
              { name: "mo_datetime" },
              { name: "mo_code" },
            ]
          },
        ]
      });
      return ws_memo;
    }
  }
}
