const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ws_pls_danwi', {
    '코드': {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    '품목코드': {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    '상세코드': {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    '구분': {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    '제조사': {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    '등록번호': {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    '상표명': {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    '품목명': {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    '등록규격': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    '용도': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    '바코드': {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    '단위코드': {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    '판매단위': {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    '포장용량': {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    '포장코드': {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    '포장단위': {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    '사용여부': {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    '수정일자': {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    '디비일자': {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ws_pls_danwi',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "코드" },
        ]
      },
      {
        name: "Index1",
        using: "BTREE",
        fields: [
          { name: "등록번호" },
          { name: "상표명" },
        ]
      },
    ]
  });
};
