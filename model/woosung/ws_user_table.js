const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define('ws_user_table', {
    idx: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_code: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    type: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "w: 소매용,n: 도매용,u: 기타용"
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    table_name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    table_type: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    table_prefix: {
      type: new DataTypes.VIRTUAL(DataTypes.STRING(20)),
      get: function () {
        return `${this.get('type')}${this.get('year')}`
      }
    }
  }, {
    sequelize,
    tableName: 'ws_user_table',
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
