const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wsuser2016_log', {
    w1_date_s1: {
      type: DataTypes.STRING(20),
      allowNull: true,
      comment: "시작시간"
    },
    w1_date_s2: {
      type: DataTypes.STRING(20),
      allowNull: true,
      comment: "종료시간"
    },
    w1_code: {
      type: DataTypes.STRING(10),
      allowNull: true,
      comment: "코드"
    },
    w1_id: {
      type: DataTypes.STRING(30),
      allowNull: true,
      comment: "아디"
    },
    w1_pass: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    w1_jikwi: {
      type: DataTypes.STRING(30),
      allowNull: true,
      comment: "직책"
    },
    w1_db: {
      type: DataTypes.STRING(10),
      allowNull: true,
      comment: "디비명"
    },
    w1_table: {
      type: DataTypes.STRING(10),
      allowNull: true,
      comment: "테이블명"
    },
    w1_ip: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'wsuser2016_log',
    timestamps: false,
    indexes: [
      {
        name: "Index1",
        using: "BTREE",
        fields: [
          { name: "w1_date_s1" },
        ]
      },
    ]
  });
};
