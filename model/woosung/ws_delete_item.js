const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ws_delete_item', {
    it_code: {
      type: DataTypes.STRING(10),
      allowNull: true
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
    it_addname: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    it_danwi: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    it_category2: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    it_no: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    user_code: {
      type: DataTypes.STRING(20),
      allowNull: true,
      comment: "삭제된 농약사DB명을 저장합니다"
    },
    table_prefix: {
      type: DataTypes.STRING(10),
      allowNull: true,
      comment: "삭제된 데이터의 테이블명을 저장합니다."
    },
    delete_user: {
      type: DataTypes.STRING(24),
      allowNull: true,
      comment: "삭제자"
    },
    delete_dt: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "삭제날짜"
    }
  }, {
    sequelize,
    tableName: 'ws_delete_item',
    timestamps: false
  });
};
