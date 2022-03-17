const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'queue_check',
    {
      idx: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      phone_number: {
        type: DataTypes.STRING(12),
        allowNull: false,
        comment: '숫자만 입력',
        unique: 'phone_number_UNIQUE',
        // validate: {
        //   is: /^01\d{8,9}$/,
        // },
      },
      status: {
        type: DataTypes.TINYINT,
        allowNull: false,
        comment: '1:대기, 2:진행중, 3:완료, 4:오류',
      },
      error_message: {
        type: DataTypes.TEXT,
        allowNull: true,
        comment: '오류발생 시 에러메시지',
      },
    },
    {
      sequelize,
      tableName: 'queue_check',
      timestamps: true,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'idx' }],
        },
        {
          name: 'phone_number_UNIQUE',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'phone_number' }],
        },
      ],
    },
  );
};
