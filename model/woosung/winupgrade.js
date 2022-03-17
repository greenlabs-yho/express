const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('winupgrade', {
    '코드': {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: ""
    },
    '업체명': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    '지역명': {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    '버젼': {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    '일자': {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    '아피': {
      type: DataTypes.BLOB,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'winupgrade',
    timestamps: false,
    indexes: [
      {
        name: "Index",
        using: "BTREE",
        fields: [
          { name: "코드" },
        ]
      },
    ]
  });
};
