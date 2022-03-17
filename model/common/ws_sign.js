const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes, table_info) => {
  return ws_sign.init(sequelize, DataTypes, table_info);
}

class ws_sign extends Sequelize.Model {
  static init(sequelize, DataTypes, table_info) {
    if(table_info.table_type == 'A'){
      super.init({
        si_no: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        si_dateno: {
          type: DataTypes.STRING(20),
          allowNull: true
        },
        si_time: {
          type: DataTypes.STRING(8),
          allowNull: true
        },
        si_gcode: {
          type: DataTypes.STRING(10),
          allowNull: true
        },
        si_gname: {
          type: DataTypes.STRING(20),
          allowNull: true
        },
        si_juso: {
          type: DataTypes.STRING(255),
          allowNull: true
        },
        si_tel: {
          type: DataTypes.STRING(30),
          allowNull: true
        },
        si_jumin: {
          type: DataTypes.STRING(20),
          allowNull: true
        },
        si_misu: {
          type: DataTypes.INTEGER,
          allowNull: true
        },
        si_signdate: {
          type: DataTypes.STRING(20),
          allowNull: true
        },
        si_jobname: {
          type: DataTypes.STRING(20),
          allowNull: true
        },
        si_pc_no: {
          type: DataTypes.STRING(10),
          allowNull: true
        },
        si_ip: {
          type: DataTypes.STRING(15),
          allowNull: true
        },
        si_sign: {
          type: DataTypes.STRING(2048),
          allowNull: true
        },
        si_iock: {
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
              { name: "si_no" },
            ]
          },
          {
            name: "Index1",
            using: "BTREE",
            fields: [
              { name: "si_dateno" },
              { name: "si_gcode" },
              { name: "si_iock" },
            ]
          },
        ]
      });
      return ws_sign;
    }else{
      super.init({
        si_no: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        si_dateno: {
          type: DataTypes.STRING(20),
          allowNull: true
        },
        si_time: {
          type: DataTypes.STRING(8),
          allowNull: true
        },
        si_gcode: {
          type: DataTypes.STRING(10),
          allowNull: true
        },
        si_gname: {
          type: DataTypes.STRING(20),
          allowNull: true
        },
        si_juso: {
          type: DataTypes.STRING(50),
          allowNull: true
        },
        si_tel: {
          type: DataTypes.STRING(30),
          allowNull: true
        },
        si_jumin: {
          type: DataTypes.STRING(20),
          allowNull: true
        },
        si_misu: {
          type: DataTypes.INTEGER,
          allowNull: true
        },
        si_signdate: {
          type: DataTypes.STRING(20),
          allowNull: true
        },
        si_jobname: {
          type: DataTypes.STRING(20),
          allowNull: true
        },
        si_pc_no: {
          type: DataTypes.STRING(10),
          allowNull: true
        },
        si_ip: {
          type: DataTypes.STRING(15),
          allowNull: true
        },
        si_sign: {
          type: DataTypes.STRING(2048),
          allowNull: true
        },
        si_iock: {
          type: DataTypes.TINYINT,
          allowNull: true
        },
        si_dayibgum: {
          type: DataTypes.VIRTUAL,
          get() {
            return 'none'
          }
        },
        si_daymisu: {
          type: DataTypes.VIRTUAL,
          get() {
            return 'none'
          }
        },
        si_daytot: {
          type: DataTypes.VIRTUAL,
          get() {
            return 'none'
          }
        },
        si_del_date: {
          type: DataTypes.VIRTUAL,
          get() {
            return 'none'
          }
        },
        si_jikjunmisu: {
          type: DataTypes.VIRTUAL,
          get() {
            return 'none'
          }
        },
        
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
              { name: "si_no" },
            ]
          },
          {
            name: "Index1",
            using: "BTREE",
            fields: [
              { name: "si_dateno" },
              { name: "si_gcode" },
              { name: "si_iock" },
            ]
          },
        ]
      });
      return ws_sign;
    }
  }
}
