const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ws_farm_outco', {
    idx: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_idx: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'idx'
      }
    },
    database_idx: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ws_user_table',
        key: 'idx'
      }
    },
    company_idx: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'companies',
        key: 'idx'
      }
    },
    code: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: "",
      comment: "고객코드, ws_outco.mb_code, ws_outsales.sa_gcode 필드 데이터"
    },
    crop: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "주요작물, ws_outco.mb_main_crop 필드 데이터"
    }
  }, {
    sequelize,
    tableName: 'ws_farm_outco',
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
        name: "wfo_user_fk_idx",
        using: "BTREE",
        fields: [
          { name: "user_idx" },
        ]
      },
      {
        name: "wfo_wut_fk_idx",
        using: "BTREE",
        fields: [
          { name: "database_idx" },
        ]
      },
      {
        name: "wfo_company_fk_idx",
        using: "BTREE",
        fields: [
          { name: "company_idx" },
        ]
      },
    ]
  });
};
