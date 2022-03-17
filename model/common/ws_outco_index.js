const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes, table_info) => {
  return ws_outco_index.init(sequelize, DataTypes, table_info);
}

class ws_outco_index extends Sequelize.Model {
  static init(sequelize, DataTypes, table_info) {
  super.init({
    oulx_code: {
      type: DataTypes.STRING(5),
      allowNull: false,
      primaryKey: true
    },
    oulx_name: {
      type: DataTypes.STRING(100),
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
          { name: "oulx_code" },
        ]
      },
      {
        name: "Index0",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "oulx_code" },
        ]
      },
    ]
  });
  return ws_outco_index;
  }
}
