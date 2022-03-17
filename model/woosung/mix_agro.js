const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mix_agro', {
    NUMB: {
      type: DataTypes.STRING(8),
      allowNull: false,
      primaryKey: true
    },
    NUMB2: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    CROPS: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    BUNL: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    MADE: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    GABU: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    GUBU: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    HONY: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    NAME1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    NAME2: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    NAME3: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    NAME4: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    NAME5: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    NAME: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    PAGE1: {
      type: DataTypes.STRING(5),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'mix_agro',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "NUMB" },
        ]
      },
    ]
  });
};
