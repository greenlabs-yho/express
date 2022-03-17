const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ws_kakao_send', {
    ka_no: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ka_sendtime: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ka_ws_code: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    ka_ws_sangho: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    ka_ws_area: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    ka_gcode: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    ka_gname: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    ka_garea: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ka_ghp: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ka_datetime: {
      type: DataTypes.STRING(13),
      allowNull: true
    },
    ka_sendtxt: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ka_jobname: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ws_kakao_send',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ka_no" },
        ]
      },
    ]
  });
};
