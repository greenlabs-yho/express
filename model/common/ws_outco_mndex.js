const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes, table_info) => {
  return ws_outco_mndex.init(sequelize, DataTypes, table_info);
}

class ws_outco_mndex extends Sequelize.Model {
  static init(sequelize, DataTypes, table_info) {
  super.init({
    oumx_code: {
      type: DataTypes.STRING(5),
      allowNull: false,
      primaryKey: true
    },
    oumx_name: {
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
          { name: "oumx_code" },
        ]
      },
      {
        name: "Index0",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "oumx_code" },
        ]
      },
    ]
  });
  return ws_outco_mndex;
  }
}
