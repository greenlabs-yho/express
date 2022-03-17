const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes, table_info) => {
  return ws_chamgo.init(sequelize, DataTypes, table_info);
}

class ws_chamgo extends Sequelize.Model {
  static init(sequelize, DataTypes, table_info) {
  super.init({
    ch_display: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ch_fontcolor: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ch_backcolor: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ch_linecolor: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ch_font: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ch_ver: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ch_code: {
      type: DataTypes.STRING(30),
      allowNull: false,
      primaryKey: true
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
          { name: "ch_code" },
        ]
      },
      {
        name: "Index0",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ch_code" },
        ]
      },
    ]
  });
  return ws_chamgo;
  }
}
