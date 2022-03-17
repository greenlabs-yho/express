const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return bojo_setup_option.init(sequelize, DataTypes);
};

class bojo_setup_option extends Sequelize.Model {
  static init(sequelize, DataTypes) {
    super.init(
      {
        b_so_type: {
          type: DataTypes.STRING(1),
          allowNull: false,
          primaryKey: true,
        },
        b_so_changgoname: {
          type: DataTypes.STRING(200),
          allowNull: true,
        },
        b_so_gubun: {
          type: DataTypes.INTEGER,
          allowNull: true,
        },
        b_so_point: {
          type: DataTypes.INTEGER,
          allowNull: true,
        },
        b_so_name1: {
          type: DataTypes.STRING(300),
          allowNull: true,
        },
        b_so_name2: {
          type: DataTypes.STRING(300),
          allowNull: true,
        },
      },
      {
        sequelize,
        tableName: 'bojo_setup_option',
        timestamps: false,
        indexes: [
          {
            name: 'PRIMARY',
            unique: true,
            using: 'BTREE',
            fields: [{ name: 'b_so_type' }],
          },
        ],
      },
    );
    return bojo_setup_option;
  }
}
