const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pos_outsales_detail', {
    idx: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    outsales_idx: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "포스별 거래내역의 idx",
      references: {
        model: 'pos_outsales',
        key: 'idx'
      }
    },
    sa_idx: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "거래의 품목별 idx"
    }
  }, {
    sequelize,
    tableName: 'pos_outsales_detail',
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
        name: "pos_outsales_detail_FK",
        using: "BTREE",
        fields: [
          { name: "outsales_idx" },
        ]
      },
    ]
  });
};
