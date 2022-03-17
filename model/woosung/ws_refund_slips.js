const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ws_refund_slips', {
    idx: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    sa_code: {
      type: DataTypes.STRING(19),
      allowNull: false
    },
    user_code: {
      type: DataTypes.STRING(20),
      allowNull: false,
      comment: "환불된 농약사DB명을 저장합니다"
    },
    table_prefix: {
      type: DataTypes.STRING(10),
      allowNull: false,
      comment: "환불된 데이터의 테이블명을 저장합니다."
    },
    refund_dt: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "환불날짜"
    },
    refund_user: {
      type: DataTypes.STRING(24),
      allowNull: true,
      comment: "환불처리자"
    },
    refund_status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 2,
      comment: "1:환불완료, 2:환불중"
    },
    update_dt: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "업데이트날짜"
    }
  }, {
    sequelize,
    tableName: 'ws_refund_slips',
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
