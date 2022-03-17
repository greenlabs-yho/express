const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ws_server', {
    s_no: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    s_name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    s_ip: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    s_bigo: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    s_memo: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    s_memo_2232: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ws_server',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "s_no" },
        ]
      },
    ]
  });
};
