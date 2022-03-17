const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'login_auth_agree',
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
      type: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: '추후 meta table 정의 예정',
      },
      value: {
        type: DataTypes.TINYINT,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'login_auth_agree',
      timestamps: true,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'idx' }],
        },
        // {
        //   name: 'user_idx_fk_idx',
        //   using: 'BTREE',
        //   fields: [{ name: 'user_idx' }],
        // },
      ],
    },
  );
};
