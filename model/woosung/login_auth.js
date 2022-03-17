const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'login_auth',
    {
      idx: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      w_nosw: {
        type: DataTypes.STRING(24),
        allowNull: false,
      },
      method: {
        type: DataTypes.STRING(15),
        allowNull: true,
      },
      user_idx: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'login_auth_woosung',
          key: 'idx',
        },
      },
    },
    {
      sequelize,
      tableName: 'login_auth',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'idx' }],
        },
        {
          name: 'idx',
          using: 'BTREE',
          fields: [{ name: 'user_idx' }],
        },
      ],
    },
  );
};
