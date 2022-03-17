const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ws_pls_master', {
    '코드': {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    '등록번호': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    '구분': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    '품목명': {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    '주성분함량': {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    '상표명': {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    '인축독성': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    '어독성': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    '용도': {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    '제형': {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    '회사명': {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    '작용기작': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    '등록일': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    '일반명': {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    '작물명': {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    '적용병해충': {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    '사용적기': {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    '사용방법': {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    '사용량': {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    '희석배수': {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    '안전사용시기': {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    '안전사용횟수': {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    '디비일자': {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ws_pls_master',
    timestamps: false,
    indexes: [
      {
        name: "Index2",
        using: "BTREE",
        fields: [
          { name: "상표명" },
        ]
      },
      {
        name: "Index3",
        using: "BTREE",
        fields: [
          { name: "작물명" },
        ]
      },
      {
        name: "Index4",
        using: "BTREE",
        fields: [
          { name: "적용병해충" },
        ]
      },
      {
        name: "Index5",
        using: "BTREE",
        fields: [
          { name: "용도" },
        ]
      },
      {
        name: "Index6",
        using: "BTREE",
        fields: [
          { name: "회사명" },
        ]
      },
      {
        name: "Index7",
        using: "BTREE",
        fields: [
          { name: "등록번호" },
        ]
      },
      {
        name: "Index1",
        using: "BTREE",
        fields: [
          { name: "품목명" },
        ]
      },
    ]
  });
};
