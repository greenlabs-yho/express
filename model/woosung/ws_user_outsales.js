const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ws_user_outsales', {
    user_code: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    table_prefix: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    year: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    total_price: {
      type: DataTypes.DECIMAL(65,0),
      allowNull: true
    },
    total_waesang: {
      type: DataTypes.DECIMAL(65,0),
      allowNull: true
    },
    total_ibgum: {
      type: DataTypes.DECIMAL(65,0),
      allowNull: true
    },
    idx: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'ws_user_outsales',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idx" },
        ]
      },
    ]
  });
};
