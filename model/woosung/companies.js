const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('companies', {
    idx: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    db_name: {
      type: DataTypes.STRING(9),
      allowNull: false,
      comment: "ws_xxxxx 로 이루어진 데이터베이스 이름",
      unique: "db_name_UNIQUE",
      validate: {
        is: /^ws_\d{5}$/
      },
    },
    nosw: {
      type: DataTypes.STRING(24),
      allowNull: true,      
      comment: "wsuser2016.w_nosw 값"
    },    
  }, {
    sequelize,
    tableName: 'companies',
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
      {
        name: "db_name_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "db_name" },
        ]
      },      
    ]
  });
};
