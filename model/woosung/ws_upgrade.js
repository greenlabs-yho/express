const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ws_upgrade', {
    up_code: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: ""
    },
    up_name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    up_area: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    up_ver: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    up_date: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    up_ip: {
      type: DataTypes.BLOB,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ws_upgrade',
    timestamps: false,
    indexes: [
      {
        name: "Index",
        using: "BTREE",
        fields: [
          { name: "up_code" },
        ]
      },
    ]
  });
};
