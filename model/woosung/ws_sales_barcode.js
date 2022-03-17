const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ws_sales_barcode', {
    idx: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    barcode: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    sa_code: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    user_code: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    table_prefix: {
      type: DataTypes.STRING(10),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ws_sales_barcode',
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
