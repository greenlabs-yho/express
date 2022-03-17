const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ws_payment_code', {
    idx: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      comment: "인덱스"
    },
    it_code: {
      type: DataTypes.STRING(10),
      allowNull: true,
      comment: "품목번호"
    },
    it_name: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "품목명"
    },
    user_code: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "농약사코드"
    },
    table_name: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "테이블명"
    }
  }, {
    sequelize,
    tableName: 'ws_payment_code',
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
      {
        name: "idx_ws_user_table_1",
        using: "BTREE",
        fields: [
          { name: "user_code" },
          { name: "table_name" },
        ]
      },
    ]
  });
};
