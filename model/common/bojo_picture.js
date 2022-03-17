const config = require('config');
const serverConfig = config.get('serverConfig');
const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return bojo_picture.init(sequelize, DataTypes);
}

class bojo_picture extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    pm_no: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    pm_ucode: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    pm_gcode: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    pm_userid: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    pm_datack: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    pm_info: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    pm_savedate: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    pm_title: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    pm_saledate: {
      type: DataTypes.STRING(13),
      allowNull: true
    },
    pm_path: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    pm_daymoney: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pm_ibgum: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pm_totalmoney: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    image_url: {
      type: Sequelize.VIRTUAL,
      get () {
        return `${serverConfig.imgRoot}${this.pm_path.substring(2)}`
      }
    }    
  }, {
    sequelize,
    tableName: 'bojo_picture',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "pm_no" },
        ]
      },
      {
        name: "Index1",
        using: "BTREE",
        fields: [
          { name: "pm_ucode" },
          { name: "pm_datack" },
          { name: "pm_gcode" },
        ]
      },
      {
        name: "Index2",
        using: "BTREE",
        fields: [
          { name: "pm_saledate" },
        ]
      },
    ]
  });
  return bojo_picture;
  }
}
