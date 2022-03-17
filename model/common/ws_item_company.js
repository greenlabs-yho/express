const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes, table_info) => {
  return ws_item_company.init(sequelize, DataTypes, table_info);
}

class ws_item_company extends Sequelize.Model {
  static init(sequelize, DataTypes, table_info) {
  super.init({
    itc_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      unique: "Index0"
    },
    itc_name: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    itc_making_home: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    itc_color: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    itc_color_len: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: table_info.table_name,
    timestamps: false,
    indexes: [
      {
        name: "Index0",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "itc_id" },
        ]
      },
    ]
  });
  return ws_item_company;
  }
}
