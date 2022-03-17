const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ws_picture', {
    pa_ucode: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true
    },
    pa_gcode: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true
    },
    pa_datack: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true
    },
    pa_userid: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true
    },
    pa_info: {
      type: DataTypes.TINYINT,
      allowNull: false,
      primaryKey: true
    },
    pa_datetime: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true
    },
    pa_title: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    pa_memo: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    pa_bunru: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    pa_path: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    pa_share: {
      type: DataTypes.TINYINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ws_picture',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "pa_ucode" },
          { name: "pa_gcode" },
          { name: "pa_datack" },
          { name: "pa_userid" },
          { name: "pa_info" },
          { name: "pa_datetime" },
        ]
      },
    ]
  });
};
