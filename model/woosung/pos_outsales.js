const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pos_outsales', {
    idx: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    pos_idx: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'pos_info',
        key: 'idx'
      }
    },
    sa_datetime: {
      type: DataTypes.STRING(19),
      allowNull: false,
      comment: "매출키"
    },
    sa_gcode: {
      type: DataTypes.STRING(5),
      allowNull: false,
      comment: "고객코"
    },
    user_code: {
      type: DataTypes.STRING(20),
      allowNull: false,
      comment: "농약사DB명을 저장합니다"
    },
    table_prefix: {
      type: DataTypes.STRING(10),
      allowNull: false,
      comment: "데이터의 테이블명을 저장합니다."
    }
  }, {
    sequelize,
    tableName: 'pos_outsales',
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
        name: "pos_outsales_FK",
        using: "BTREE",
        fields: [
          { name: "pos_idx" },
        ]
      },
    ]
  });
};
