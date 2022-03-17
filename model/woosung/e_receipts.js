const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('e_receipts', {
    idx: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ws_farm_outco_idx: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ws_farm_outco',
        key: 'idx'
      }
    },
    sa_iock: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    sa_datetime: {
      type: DataTypes.STRING(13),
      allowNull: false
    },
    hash: {
      type: DataTypes.STRING(257),
      allowNull: false
    },
    year: {
      type: DataTypes.STRING(13),
      allowNull: false
    },    
  }, {
    sequelize,
    tableName: 'e_receipts',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idx" },
        ]
      },
      {
        name: "receipt_key",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ws_farm_outco_idx" },
          { name: "sa_iock" },
          { name: "sa_datetime" },
          { name: "year" },
        ]
      },
      {
        name: "e_outco_key_idx",
        using: "BTREE",
        fields: [
          { name: "ws_farm_outco_idx" },
        ]
      },
    ]
  });
};
