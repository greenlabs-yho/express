const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'pos_info',
    {
      idx: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      value: {
        type: DataTypes.STRING(100),
      },
    },
    {
      sequelize,
      tableName: 'pos_info',
      timestamps: true,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'idx' }],
        },
      ],
    },
  );
};
