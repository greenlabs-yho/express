const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wsuser', {
    nosw: {
      type: DataTypes.STRING(8),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    i_date: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: ""
    },
    e_date: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: ""
    },
    backup: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: ""
    },
    serino: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: ""
    },
    sangho: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    },
    area: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: ""
    },
    tel: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: ""
    },
    handpon: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: ""
    },
    '업그레이드': {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    '버젼': {
      type: DataTypes.STRING(10),
      allowNull: true,
      defaultValue: ""
    },
    '자동백업': {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    LastJob: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: ""
    },
    saupjano: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: ""
    },
    uptae: {
      type: DataTypes.STRING(200),
      allowNull: true,
      defaultValue: ""
    },
    jongmok: {
      type: DataTypes.STRING(200),
      allowNull: true,
      defaultValue: ""
    },
    bank1: {
      type: DataTypes.STRING(200),
      allowNull: true,
      defaultValue: ""
    },
    bank2: {
      type: DataTypes.STRING(200),
      allowNull: true,
      defaultValue: ""
    },
    settype: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      defaultValue: 0
    },
    bigo: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: ""
    },
    e_job: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      defaultValue: 0
    },
    dae_name: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: ""
    },
    pos: {
      type: DataTypes.STRING(7),
      allowNull: true,
      defaultValue: ""
    },
    posjuso: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: ""
    },
    juso: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: ""
    },
    url: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: ""
    },
    jobname: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: ""
    },
    fax: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: ""
    },
    mail: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: ""
    },
    kwanggo: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: ""
    },
    ipno: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: ""
    },
    DisMemo: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    s_date: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: ""
    },
    upilja: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: ""
    },
    yugibosu: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    '예약일자': {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: ""
    },
    '예약번호': {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    '유지보수': {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    '자료경로': {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    OS: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    '메모': {
      type: DataTypes.TEXT,
      allowNull: true
    },
    '접속': {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    '체크시간': {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    '글자색': {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    '바탕색': {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    '글효과': {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    '마침일시': {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    '업종유형': {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    '실행수': {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    '실행합': {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    '별명': {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    b_no: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    b_tot: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    '연동코드': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    '알림마당1': {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    '알림마당2': {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    '알림마당3': {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    '알림마당4': {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    '유지보수내용': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    MacAddr1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    MacAddr2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    comchk: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    w_serial_c: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "cpu"
    },
    w_serial_m: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "마더보드"
    },
    w_serial_h: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "HDD"
    },
    w_serial_na: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "맥ALL"
    },
    w_serial_n: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "맥1"
    },
    w_jobck: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'wsuser',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "nosw" },
        ]
      },
      {
        name: "index",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "nosw" },
        ]
      },
    ]
  });
};
