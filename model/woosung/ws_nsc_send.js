const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ws_nsc_send', {
    c_nsc_no: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    c_nsc_senddatetime: {
      type: DataTypes.STRING(20),
      allowNull: true,
      comment: "보낸일시"
    },
    c_nsc_nongserial: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    c_nsc_mysaupno: {
      type: DataTypes.STRING(12),
      allowNull: true,
      comment: "판매자사업번호"
    },
    c_nsc_mytel: {
      type: DataTypes.STRING(15),
      allowNull: true,
      comment: "판매자일반전화"
    },
    c_nsc_myower: {
      type: DataTypes.STRING(20),
      allowNull: true,
      comment: "판매자(대표자)"
    },
    c_nsc_myhp: {
      type: DataTypes.STRING(15),
      allowNull: true,
      comment: "판매자핸드폰"
    },
    c_nsc_mysangho: {
      type: DataTypes.STRING(30),
      allowNull: true,
      comment: "판매자상호"
    },
    c_nsc_saleno: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "판매고유번호"
    },
    c_nsc_gubun: {
      type: DataTypes.STRING(5),
      allowNull: true,
      comment: "구분"
    },
    c_nsc_wscode: {
      type: DataTypes.STRING(10),
      allowNull: true,
      comment: "우성회원코드"
    },
    c_nsc_salecode: {
      type: DataTypes.STRING(10),
      allowNull: true,
      comment: "장부일련번호"
    },
    c_nsc_salename: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "구매자이름"
    },
    c_nsc_salepost: {
      type: DataTypes.STRING(10),
      allowNull: true,
      comment: "구매자우편번호"
    },
    c_nsc_salepostjuso: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "구매지주소"
    },
    c_nsc_salejuso: {
      type: DataTypes.STRING(30),
      allowNull: true,
      comment: "구매자상주소"
    },
    c_nsc_salepon: {
      type: DataTypes.STRING(15),
      allowNull: true,
      comment: "구매자전화번호"
    },
    c_nsc_salebirth: {
      type: DataTypes.STRING(10),
      allowNull: true,
      comment: "구매자생일(생략)"
    },
    c_nsc_nongpumno: {
      type: DataTypes.STRING(15),
      allowNull: true,
      comment: "품목번호"
    },
    c_nsc_salebarcode: {
      type: DataTypes.STRING(20),
      allowNull: true,
      comment: "바코드"
    },
    c_nsc_nongpumname: {
      type: DataTypes.STRING(30),
      allowNull: true,
      comment: "품목명"
    },
    c_nsc_nongbrandname: {
      type: DataTypes.STRING(30),
      allowNull: true,
      comment: "상표명"
    },
    c_nsc_nongpumunit: {
      type: DataTypes.STRING(30),
      allowNull: true,
      comment: "등록규격"
    },
    c_nsc_saledate: {
      type: DataTypes.STRING(13),
      allowNull: true,
      comment: "판매일시"
    },
    c_nsc_salesu: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "수량"
    },
    c_nsc_saledanwi: {
      type: DataTypes.STRING(30),
      allowNull: true,
      comment: "규격"
    },
    c_nsc_salejakmul: {
      type: DataTypes.STRING(30),
      allowNull: true,
      comment: "작물명"
    },
    c_nsc_salefarmcode: {
      type: DataTypes.STRING(20),
      allowNull: true,
      comment: "경영체번호"
    },
    c_nsc_sale_pname: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "품목명"
    },
    c_nsc_sale_punit: {
      type: DataTypes.STRING(30),
      allowNull: true,
      comment: "품목규격"
    },
    c_nsc_sale_pdanwi: {
      type: DataTypes.STRING(10),
      allowNull: true,
      comment: "품목단위"
    },
    c_nsc_sale_pcode: {
      type: DataTypes.STRING(10),
      allowNull: true,
      comment: "품목코드"
    },
    c_nsc_sale_paddno: {
      type: DataTypes.STRING(20),
      allowNull: true,
      comment: "품목등록번호"
    },
    c_nsc_sale_agreedate: {
      type: DataTypes.STRING(10),
      allowNull: true,
      comment: "동의일자"
    },
    c_nsc_senduser: {
      type: DataTypes.STRING(10),
      allowNull: true,
      comment: "작업자"
    },
    c_nsc_return: {
      type: DataTypes.STRING(2),
      allowNull: true,
      comment: "전송여부"
    },
    c_nsc_saletable: {
      type: DataTypes.STRING(10),
      allowNull: true,
      comment: "우성데이타베이스명"
    },
    c_nsc_nong_jcode: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "작물코드"
    },
    c_nsc_unit: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    c_nsc_unit1: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "포장용량"
    },
    c_nsc_unit2: {
      type: DataTypes.STRING(6),
      allowNull: true,
      comment: "포장단위코드"
    },
    c_nsc_bugcode: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "병해충코드"
    },
    c_job_unit: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    c_job_senddate: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    c_nsc_saledanga: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ws_nsc_send',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "c_nsc_no" },
        ]
      },
      {
        name: "Index2",
        using: "BTREE",
        fields: [
          { name: "c_nsc_sale_paddno" },
        ]
      },
      {
        name: "Index3",
        using: "BTREE",
        fields: [
          { name: "c_nsc_nongbrandname" },
        ]
      },
      {
        name: "Index4",
        using: "BTREE",
        fields: [
          { name: "c_nsc_sale_punit" },
        ]
      },
      {
        name: "Index5",
        using: "BTREE",
        fields: [
          { name: "c_nsc_nongserial" },
          { name: "c_nsc_saleno" },
        ]
      },
      {
        name: "Index6",
        using: "BTREE",
        fields: [
          { name: "c_nsc_salecode" },
        ]
      },
      {
        name: "Index7",
        using: "BTREE",
        fields: [
          { name: "c_nsc_sale_pcode" },
        ]
      },
      {
        name: "Index1",
        using: "BTREE",
        fields: [
          { name: "c_nsc_saleno" },
          { name: "c_nsc_gubun" },
          { name: "c_nsc_saletable" },
        ]
      },
    ]
  });
};
