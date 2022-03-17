const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sign_in_history', {
    idx: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    platform: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    id: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    w_nosw: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    w_db_name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    w_sangho: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    w_table_prefixs: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    created_at: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'sign_in_history',
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
