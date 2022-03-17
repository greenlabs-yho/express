const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes, table_info) => {
  return ws_item_docksung.init(sequelize, DataTypes, table_info);
}

class ws_item_docksung extends Sequelize.Model {
  static init(sequelize, DataTypes, table_info) {
  super.init({
    itd_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    itd_name: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    itd_color: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    itd_color_len: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: table_info.table_name,
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "itd_id" },
        ]
      },
      {
        name: "Index0",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "itd_id" },
        ]
      },
    ]
  });
  return ws_item_docksung;
  }
}
