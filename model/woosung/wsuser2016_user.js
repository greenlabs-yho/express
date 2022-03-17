const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wsuser2016_user', {
    ws_code: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: "",
      comment: "코드"
    },
    ws_user_id: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "아디"
    },
    ws_user_pass: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "패스워드"
    },
    ws_user_jikwi: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "직위"
    },
    ws_user_master: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "마스타"
    },
    ws_user_stop: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "자격일시정지"
    },
    ws_user_insert: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "등록"
    },
    ws_user_indata: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "매입자료"
    },
    ws_user_indanga: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "매입단가"
    },
    ws_user_outbunsuk: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ws_user_bunsuk: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "분석작업"
    },
    ws_user_yangsik: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "양식작업"
    },
    ws_user_update: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "업수정"
    },
    ws_user_majin: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "마진 -- 사용안함"
    },
    ws_user_all: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "전부"
    }
  }, {
    sequelize,
    tableName: 'wsuser2016_user',
    timestamps: false
  });
};
