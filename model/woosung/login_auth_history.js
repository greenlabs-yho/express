const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'login_auth_history',
    {
      idx: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      user_idx: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'idx',
        },
      },
      status: {
        type: DataTypes.TINYINT,
        allowNull: false,
        comment: '유저의 로그인 상태(0:로그인, 1:로그아웃)',
      },
    },
    {
      sequelize,
      tableName: 'login_auth_history',
      timestamps: true,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'idx' }],
        },
        {
          name: 'login_auth_history_FK',
          using: 'BTREE',
          fields: [{ name: 'user_idx' }],
        },
      ],
    },
  );
};
