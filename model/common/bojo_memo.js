const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return bojo_memo.init(sequelize, DataTypes);
}

class bojo_memo extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    b_mo_no: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    b_mo_id: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    b_mo_dateno: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    b_mo_time: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    b_mo_code: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    b_mo_font: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    b_mo_type: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    b_mo_memo1: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    b_mo_effect1: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    b_mo_memo2: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    b_mo_effect2: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'bojo_memo',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "b_mo_no" },
        ]
      },
      {
        name: "Index1",
        using: "BTREE",
        fields: [
          { name: "b_mo_id" },
          { name: "b_mo_dateno" },
          { name: "b_mo_code" },
          { name: "b_mo_type" },
        ]
      },
    ]
  });
  return bojo_memo;
  }
}
