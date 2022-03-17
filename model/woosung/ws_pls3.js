const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ws_pls3', {
    '코드': {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    '등록번호': {
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
    '일반명': {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    '제품명': {
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
    '제조사': {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    '등록일': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    '작물': {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    '적용병해충': {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    '사용적기및방법': {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    '사용량': {
      type: DataTypes.STRING(50),
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
      type: DataTypes.STRING(50),
      allowNull: true
    },
    '회사등록일': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    '작용기작': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    '품목번호': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    '작물코드': {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    '병해충코드': {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    '사용여부': {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    '임시작물명': {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    '구분': {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    '수정일자': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    '디비일자': {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ws_pls3',
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
        name: "Index2",
        using: "BTREE",
        fields: [
          { name: "제품명" },
        ]
      },
      {
        name: "Index3",
        using: "BTREE",
        fields: [
          { name: "작물" },
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
          { name: "제조사" },
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
