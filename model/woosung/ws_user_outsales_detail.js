const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ws_user_outsales_detail', {
    user_code: {
      type: DataTypes.STRING(8),
      allowNull: false,
      defaultValue: ""
    },
    table_prefix: {
      type: DataTypes.STRING(5),
      allowNull: false,
      defaultValue: ""
    },
    sa_datetime: {
      type: DataTypes.STRING(13),
      allowNull: true
    },
    year: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    total_price: {
      type: DataTypes.DECIMAL(44,0),
      allowNull: true
    },
    total_waesang: {
      type: DataTypes.DECIMAL(45,0),
      allowNull: true
    },
    category1: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    category2: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    category3: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    category4: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    category5: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    idx: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'ws_user_outsales_detail',
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
        name: "idx_user_outsales_detail_1",
        using: "BTREE",
        fields: [
          { name: "user_code" },
          { name: "year" },
        ]
      },
    ]
  });
};
