const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'pos_sales',
    {
      idx: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      pos_idx: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'pos_info',
          key: 'idx',
        },
      },
      user_idx: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'login_auth_woosung',
          key: 'idx',
        },
      },
      user_nm: {
        type: DataTypes.STRING(24),
        allowNull: false,
      },
      petty_cash: {
        type: DataTypes.INTEGER,
        allowNull: false,
        default: 0,
      },
      memo: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      status: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: '1:영업중, 0:마감',
      },
      closedAt: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: 'pos_sales',
      timestamps: true,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'idx' }],
        },
        {
          name: 'pos_sales_FK',
          using: 'BTREE',
          fields: [{ name: 'user_idx' }],
        },
        {
          name: 'pos_sales_FK_1',
          using: 'BTREE',
          fields: [{ name: 'pos_idx' }],
        },
      ],
    },
  );
};
