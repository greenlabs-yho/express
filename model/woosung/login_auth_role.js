const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'login_auth_role',
    {
      idx: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      user_idx: {
        type: DataTypes.STRING(100),
        allowNull: false,
        comment: '유저IDX',
      },
      role_no: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
        comment: '권한Level 0:master, 1:normal',
      },
    },
    {
      sequelize,
      tableName: 'login_auth_role',
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
