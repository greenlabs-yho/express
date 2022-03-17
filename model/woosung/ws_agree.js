const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ws_agree', {
    do_no: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "일련번호"
    },
    do_ws_code: {
      type: DataTypes.STRING(10),
      allowNull: true,
      comment: "우성코드"
    },
    do_ws_sangho: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    do_ws_area: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    do_gcode: {
      type: DataTypes.STRING(10),
      allowNull: true,
      comment: "고객코드"
    },
    do_gname: {
      type: DataTypes.STRING(30),
      allowNull: true,
      comment: "고객"
    },
    do_ghp: {
      type: DataTypes.STRING(20),
      allowNull: true,
      comment: "핸드폰"
    },
    do_dong1: {
      type: DataTypes.TINYINT,
      allowNull: true,
      comment: "동의1"
    },
    do_dong2: {
      type: DataTypes.TINYINT,
      allowNull: true,
      comment: "동의2"
    },
    do_dong3: {
      type: DataTypes.TINYINT,
      allowNull: true,
      comment: "동의3"
    },
    do_dong1_date: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "동의일자1(필수)"
    },
    do_dong2_date: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "동의일자2(선택)"
    },
    do_sms_date1: {
      type: DataTypes.STRING(30),
      allowNull: true,
      comment: "문자전송일"
    },
    do_sms_date2: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    do_skip: {
      type: DataTypes.STRING(10),
      allowNull: true,
      comment: "팦업스킵"
    },
    do_jobname: {
      type: DataTypes.STRING(30),
      allowNull: true,
      comment: "작업자"
    }
  }, {
    sequelize,
    tableName: 'ws_agree',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "do_no" },
        ]
      },
    ]
  });
};
