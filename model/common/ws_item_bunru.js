const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes, table_info) => {
  return ws_item_bunru.init(sequelize, DataTypes, table_info);
}

class ws_item_bunru extends Sequelize.Model {
  static init(sequelize, DataTypes, table_info) {
  super.init({
    itb_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    itb_name: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    itb_color: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    itb_color_len: {
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
          { name: "itb_id" },
        ]
      },
      {
        name: "Index0",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "itb_id" },
        ]
      },
    ]
  });
  return ws_item_bunru;
  }
}
