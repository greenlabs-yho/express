const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes, table_info) => {
  return ws_item_copy.init(sequelize, DataTypes, table_info);
}

class ws_item_copy extends Sequelize.Model {
  static init(sequelize, DataTypes, table_info) {
  super.init({
    it_no: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    it_code: {
      type: DataTypes.STRING(10),
      allowNull: true,
      unique: "Index1"
    },
    it_name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    it_unit: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    it_category: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    it_gubun: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    it_docksung: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    it_company: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    it_tax: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    it_hanggup: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    it_youtonggigan: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    it_youhosunbun: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    it_gaetong: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    it_chmgo: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    it_indanga: {
      type: DataTypes.DECIMAL(11,2),
      allowNull: true
    },
    it_dodanga: {
      type: DataTypes.DECIMAL(11,2),
      allowNull: true
    },
    it_sodanga: {
      type: DataTypes.DECIMAL(11,2),
      allowNull: true
    },
    it_hydanga: {
      type: DataTypes.DECIMAL(11,2),
      allowNull: true
    },
    it_godanga: {
      type: DataTypes.DECIMAL(11,2),
      allowNull: true
    },
    it_gidanga: {
      type: DataTypes.DECIMAL(11,2),
      allowNull: true
    },
    it_boxsu: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    it_stock: {
      type: DataTypes.DECIMAL(11,2),
      allowNull: true
    },
    it_point: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    it_barcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    it_homepage: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    it_bigo: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    it_jegoyear: {
      type: DataTypes.DECIMAL(11,2),
      allowNull: true
    },
    it_field1: {
      type: DataTypes.DECIMAL(11,2),
      allowNull: true
    },
    it_field2: {
      type: DataTypes.DECIMAL(11,2),
      allowNull: true
    },
    it_field3: {
      type: DataTypes.DECIMAL(11,2),
      allowNull: true
    },
    it_field4: {
      type: DataTypes.DECIMAL(11,2),
      allowNull: true
    },
    it_effect: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    it_forecolor: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    it_backcolor: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    it_datetime: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    it_noja: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    it_memo: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    it_addno: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    it_category2: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    it_addname: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    it_danwi: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    it_gijak: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    it_indock: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    it_fidock: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    it_jakmul: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    it_byeonghaechung: {
      type: DataTypes.TEXT,
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
          { name: "it_no" },
        ]
      },
      {
        name: "Index1",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "it_code" },
        ]
      },
      {
        name: "Index2",
        using: "BTREE",
        fields: [
          { name: "it_addno" },
          { name: "it_addname" },
        ]
      },
    ]
  });
  return ws_item_copy;
  }
}
