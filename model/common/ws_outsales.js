const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes, table_info) => {
  return ws_outsales.init(sequelize, DataTypes, table_info);
}

class ws_outsales extends Sequelize.Model {
  static init(sequelize, DataTypes, table_info) {
    const model = {
      sa_no: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      sa_iock: {
        type: DataTypes.TINYINT,
        allowNull: true
      },
      sa_inck: {
        type: DataTypes.TINYINT,
        allowNull: true
      },
      sa_datetime: {
        type: DataTypes.STRING(13),
        allowNull: true
      },
      sa_num: {
        type: DataTypes.STRING(4),
        allowNull: true
      },
      sa_gcode: {
        type: DataTypes.STRING(10),
        allowNull: true
      },
      sa_pcode: {
        type: DataTypes.STRING(10),
        allowNull: true
      },
      sa_su: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true
      },
      sa_danga: {
        type: DataTypes.DECIMAL(15, 5),
        allowNull: true
      },
      sa_vat: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      sa_ibgum: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      sa_bigo: {
        type: DataTypes.STRING(200),
        allowNull: true
      },
      sa_d_change: {
        type: DataTypes.TINYINT,
        allowNull: true
      },
      sa_grant: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      sa_dc: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      sa_point: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      sa_time: {
        type: DataTypes.STRING(8),
        allowNull: true
      },
      sa_work: {
        type: DataTypes.STRING(50),
        allowNull: true
      },
      sa_buhap: {
        type: DataTypes.TINYINT,
        allowNull: true
      },
      sa_p_name: {
        type: DataTypes.STRING(50),
        allowNull: true
      },
      sa_p_unit: {
        type: DataTypes.STRING(30),
        allowNull: true
      },
      sa_hand: {
        type: DataTypes.TINYINT,
        allowNull: true
      },
      sa_area: {
        type: DataTypes.TINYINT,
        allowNull: true
      },
      sa_moneyck: {
        type: DataTypes.TINYINT,
        allowNull: true
      },
      sa_noja: {
        type: DataTypes.TINYINT,
        allowNull: true
      },
      sa_napumdate: {
        type: DataTypes.STRING(10),
        allowNull: true
      },
      sa_usesu: {
        type: DataTypes.STRING(10),
        allowNull: true
      },
      sa_jakmul: {
        type: DataTypes.STRING(30),
        allowNull: true
      },
      sa_bug: {
        type: DataTypes.STRING(30),
        allowNull: true
      },
      sa_jakck: {
        type: DataTypes.TINYINT,
        allowNull: true
      },
      sa_senddate: {
        type: DataTypes.STRING(50),
        allowNull: true
      },
      sa_del_info: {
        type: DataTypes.STRING(50),
        allowNull: true
      },
      sa_sendck: {
        type: DataTypes.TINYINT,
        allowNull: true
      },      
    };
    let options;
    switch (table_info.table_type) {
      case 'A':
        model.sa_no = {
          type: DataTypes.VIRTUAL,
          get() {
            return 'none'
          }
        }
        model.sa_num = {
          type: DataTypes.STRING(4),
          allowNull: true,
          primaryKey: true
        }
        model.sa_bigo = {
          type: DataTypes.STRING(255),
          allowNull: true
        }
        model.sa_senddate = {
          type: DataTypes.VIRTUAL,
          get() {
            return 'none'
          }
        }
        model.sa_del_info = {
          type: DataTypes.VIRTUAL,
          get() {
            return 'none'
          }
        }
        model.sa_sendck = {
          type: DataTypes.VIRTUAL,
          get() {
            return 'none'
          }
        }
        options = {
          sequelize,
          tableName: table_info.table_name,
          timestamps: false,
          indexes: [
            {
              name: "PRIMARY",
              unique: true,
              using: "BTREE",
              fields: [
                { name: "sa_num" },
              ]
            },
            {
              name: "Index1",
              using: "BTREE",
              fields: [
                { name: "sa_datetime" },
                { name: "sa_num" },
                { name: "sa_gcode" },
                { name: "sa_pcode" },
                { name: "sa_iock" },
              ]
            },
            {
              name: "Index2",
              using: "BTREE",
              fields: [
                { name: "sa_gcode" },
              ]
            },
            {
              name: "Index3",
              using: "BTREE",
              fields: [
                { name: "sa_pcode" },
              ]
            },
            {
              name: "Index4",
              using: "BTREE",
              fields: [
                { name: "sa_datetime" },
              ]
            },
          ]
        }
        break;
      case 'B':
        model.sa_no = {
          type: DataTypes.VIRTUAL,
          get() {
            return 'none'
          }
        }
        model.sa_num = {
          type: DataTypes.STRING(4),
          allowNull: true,
          primaryKey: true
        }
        model.sa_su = {
          type: DataTypes.DECIMAL(10, 2),
          allowNull: true
        }
        model.sa_danga = {
          type: DataTypes.DECIMAL(15, 5),
          allowNull: true
        }
        model.sa_bigo = {
          type: DataTypes.STRING(255),
          allowNull: true
        }
        model.sa_napumdate = {
          type: DataTypes.VIRTUAL,
          get() {
            return 'none'
          }
        }
        model.sa_usesu = {
          type: DataTypes.VIRTUAL,
          get() {
            return 'none'
          }
        },
          model.sa_jakmul = {
            type: DataTypes.VIRTUAL,
            get() {
              return 'none'
            }
          }
        model.sa_bug = {
          type: DataTypes.VIRTUAL,
          get() {
            return 'none'
          }
        }
        model.sa_jakck = {
          type: DataTypes.VIRTUAL,
          get() {
            return 'none'
          }
        }
        model.sa_senddate = {
          type: DataTypes.VIRTUAL,
          get() {
            return 'none'
          }
        }
        model.sa_del_info = {
          type: DataTypes.VIRTUAL,
          get() {
            return 'none'
          }
        }
        model.sa_sendck = {
          type: DataTypes.VIRTUAL,
          get() {
            return 'none'
          }
        }
        options = {
          sequelize,
          tableName: table_info.table_name,
          timestamps: false,
          indexes: [
            {
              name: "PRIMARY",
              unique: true,
              using: "BTREE",
              fields: [
                { name: "sa_num" },
              ]
            },
            {
              name: "Index1",
              using: "BTREE",
              fields: [
                { name: "sa_datetime" },
                { name: "sa_num" },
                { name: "sa_gcode" },
                { name: "sa_pcode" },
                { name: "sa_iock" },
              ]
            },
            {
              name: "Index2",
              using: "BTREE",
              fields: [
                { name: "sa_gcode" },
              ]
            },
            {
              name: "Index3",
              using: "BTREE",
              fields: [
                { name: "sa_pcode" },
              ]
            },
            {
              name: "Index4",
              using: "BTREE",
              fields: [
                { name: "sa_datetime" },
              ]
            },
          ]
        }
        break;
      default:
        options = {
          sequelize,
          tableName: table_info.table_name,
          timestamps: false,
          indexes: [
            {
              name: "PRIMARY",
              unique: true,
              using: "BTREE",
              fields: [
                { name: "sa_no" },
              ]
            },
            {
              name: "Index1",
              using: "BTREE",
              fields: [
                { name: "sa_datetime" },
                { name: "sa_num" },
                { name: "sa_gcode" },
                { name: "sa_pcode" },
                { name: "sa_iock" },
              ]
            },
            {
              name: "Index2",
              using: "BTREE",
              fields: [
                { name: "sa_gcode" },
              ]
            },
            {
              name: "Index3",
              using: "BTREE",
              fields: [
                { name: "sa_pcode" },
              ]
            },
            {
              name: "Index4",
              using: "BTREE",
              fields: [
                { name: "sa_datetime" },
              ]
            },
          ]
        }
        break;
    }
    super.init(model, options);
    return ws_outsales;
  }
}
