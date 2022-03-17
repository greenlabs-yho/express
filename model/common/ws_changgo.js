const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes, table_info) => {
  return ws_changgo.init(sequelize, DataTypes, table_info);
}

class ws_changgo extends Sequelize.Model {
  static init(sequelize, DataTypes, table_info) {
    if(table_info.table_type == 'A'){
      super.init({
        c_no: {
          type: DataTypes.VIRTUAL,
          get(){
            return 'none';
          }
        },
        c_date: {
          type: DataTypes.STRING(13),
          allowNull: true,
          primaryKey: true
        },
        c_num: {
          type: DataTypes.STRING(4),
          allowNull: true
        },
        c_pcode: {
          type: DataTypes.STRING(10),
          allowNull: true
        },
        c_insu: {
          type: DataTypes.DECIMAL(15,2),
          allowNull: true
        },
        c_outsu: {
          type: DataTypes.DECIMAL(15,2),
          allowNull: true
        },
        c_jangso_no: {
          type: DataTypes.TINYINT,
          allowNull: true
        },
        c_jangso: {
          type: DataTypes.STRING(20),
          allowNull: true
        },
        c_p_name: {
          type: DataTypes.STRING(50),
          allowNull: true
        },
        c_p_unit: {
          type: DataTypes.STRING(30),
          allowNull: true
        },
        c_bigo: {
          type: DataTypes.STRING(100),
          allowNull: true
        },
        c_bunho: {
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
              { name: "c_num" },
            ]
          },
          {
            name: "Index0",
            unique: true,
            using: "BTREE",
            fields: [
              { name: "c_date" },
              { name: "c_num" },
              { name: "c_pcode" },
            ]
          },
          {
            name: "Index1",
            using: "BTREE",
            fields: [
              { name: "c_pcode" },
            ]
          },
        ]
      });
      return ws_changgo;
    }else{
      super.init({
        c_no: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        c_date: {
          type: DataTypes.STRING(13),
          allowNull: true
        },
        c_num: {
          type: DataTypes.STRING(4),
          allowNull: true
        },
        c_pcode: {
          type: DataTypes.STRING(10),
          allowNull: true
        },
        c_insu: {
          type: DataTypes.DECIMAL(15,2),
          allowNull: true
        },
        c_outsu: {
          type: DataTypes.DECIMAL(15,2),
          allowNull: true
        },
        c_jangso_no: {
          type: DataTypes.TINYINT,
          allowNull: true
        },
        c_jangso: {
          type: DataTypes.STRING(20),
          allowNull: true
        },
        c_p_name: {
          type: DataTypes.STRING(50),
          allowNull: true
        },
        c_p_unit: {
          type: DataTypes.STRING(30),
          allowNull: true
        },
        c_bigo: {
          type: DataTypes.STRING(100),
          allowNull: true
        },
        c_bunho: {
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
              { name: "c_no" },
            ]
          },
          {
            name: "Index0",
            unique: true,
            using: "BTREE",
            fields: [
              { name: "c_date" },
              { name: "c_num" },
              { name: "c_pcode" },
            ]
          },
          {
            name: "Index1",
            using: "BTREE",
            fields: [
              { name: "c_pcode" },
            ]
          },
        ]
      });
      return ws_changgo;
    }
  }
}
