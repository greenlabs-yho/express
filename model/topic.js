const {Sequelize, DataTypes} = require('sequelize');
module.exports = (sequelize, DataTypes, table_info) => {
  return Topic.init(sequelize, DataTypes, table_info);
}

class Topic extends Sequelize.Model {
    static init(sequelize) {
      super.init({
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        title: DataTypes.STRING,
        description: DataTypes.STRING,
        author: DataTypes.STRING
      }, {
        sequelize,
        tableName: 'topic',
        timestamps: false
      })
      return Topic;
    }
  }
