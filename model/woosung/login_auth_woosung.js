const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'login_auth_woosung',
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
      user_id: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: 'user_id',
      },
      user_pw: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      salt: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      insert_dt: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      update_dt: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      wrong_cnt: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      cellphone: {
        type: DataTypes.STRING(13),
        allowNull: true,
        unique: 'cellphone',
      },
      cellphone_cert: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      email: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      email_cert: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      terminal_type: {
        type: DataTypes.STRING(3),
        allowNull: false,
        defaultValue: 'n',
      },
      pos_mode: {
        type: DataTypes.STRING(3),
        allowNull: false,
        defaultValue: 'n',
      },
    },
    {
      sequelize,
      tableName: 'login_auth_woosung',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'idx' }],
        },
        {
          name: 'user_id',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'user_id' }],
        },
        {
          name: 'cellphone',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'cellphone' }],
        },
      ],
    },
  );
};
