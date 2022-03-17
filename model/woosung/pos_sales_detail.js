const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'pos_sales_detail',
    {
      idx: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      sales_idx: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'pos_sales',
          key: 'idx',
        },
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        default: 0,
      },
      category1: {
        type: DataTypes.TEXT,
        allowNull: true,
        comment: '대분류',
      },
      category2: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: '중분류',
      },
    },
    {
      sequelize,
      tableName: 'pos_sales_detail',
      timestamps: true,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'idx' }],
        },
        {
          name: 'pos_sales_detail_FK',
          using: 'BTREE',
          fields: [{ name: 'sales_idx' }],
        },
      ],
    },
  );
};
