const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ws_barcode', {
    b_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    b_unit: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    b_box: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    b_barcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    b_addno: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    b_addname: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    b_bunru: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    b_company: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    b_table_no: {
      type: DataTypes.STRING(10),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ws_barcode',
    timestamps: false,
    indexes: [
      {
        name: "Index1",
        using: "BTREE",
        fields: [
          { name: "b_name" },
        ]
      },
      {
        name: "Index2",
        using: "BTREE",
        fields: [
          { name: "b_addno" },
        ]
      },
    ]
  });
};
