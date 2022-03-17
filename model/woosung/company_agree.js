const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('company_agree', {
    idx: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    company_idx: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'companies',
        key: 'idx'
      }
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "추후 meta table 정의 예정"
    },
    value: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    is_active: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'company_agree',
    timestamps: true,
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
        name: "company_fk_idx",
        using: "BTREE",
        fields: [
          { name: "company_idx" },
        ]
      },
    ]
  });
};
