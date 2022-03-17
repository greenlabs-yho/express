const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes, table_info) => {
  return ws_item_bunru_ms.init(sequelize, DataTypes, table_info);
}

class ws_item_bunru_ms extends Sequelize.Model {
  static init(sequelize, DataTypes, table_info) {
  super.init({
    itg_bunru: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    itg_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    itg_name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    itg_color: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    itg_color_len: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    itg_id_z: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    itg_name_z: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    itg_color_z: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    itg_color_len_z: {
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
          { name: "itg_bunru" },
          { name: "itg_id" },
          { name: "itg_id_z" },
        ]
      },
      {
        name: "Index0",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "itg_bunru" },
          { name: "itg_id" },
          { name: "itg_id_z" },
        ]
      },
    ]
  });
  return ws_item_bunru_ms;
  }
}
