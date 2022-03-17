const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ws_smstext', {
    bo_st_smsck: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    bo_st_buru: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: ""
    },
    bo_st_naeyong: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    bo_st_title: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'ws_smstext',
    timestamps: false
  });
};
