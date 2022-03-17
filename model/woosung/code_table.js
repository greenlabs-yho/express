const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'code_table',
    {
      idx: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      pidx: {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: '부모 idx 가 없으면 최상위 분류 값으로 볼 수 있음',
      },
      value: {
        type: DataTypes.STRING(255),
        allowNull: false,
        comment: '코드 값',
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: 'code_table',
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
