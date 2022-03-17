const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('contact_auth', {
    idx: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    gubun: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "c",
      comment: "c:핸드폰, e:이메일"
    },
    contact: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "연락처"
    },
    auth_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "인증코드"
    },
    request_dt: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "요청날짜"
    },
    auth: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "인증여부"
    },
    auth_dt: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "인증날짜"
    }
  }, {
    sequelize,
    tableName: 'contact_auth',
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
