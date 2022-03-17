const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes, table_info) => {
  return ws_outco_bunru.init(sequelize, DataTypes, table_info);
}

class ws_outco_bunru extends Sequelize.Model {
  static init(sequelize, DataTypes, table_info) {
  super.init({
    oc_b_iock: {
      type: DataTypes.TINYINT,
      allowNull: false,
      primaryKey: true
    },
    oc_b_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    oc_b_name: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    oc_b_color: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    oc_b_color_len: {
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
          { name: "oc_b_iock" },
          { name: "oc_b_id" },
        ]
      },
      {
        name: "Index0",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "oc_b_id" },
          { name: "oc_b_iock" },
        ]
      },
    ]
  });
  return ws_outco_bunru;
  }
}
