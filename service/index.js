const config = require('config');
const databaseConfig = config.get('databaseConfig');

const { Sequelize, DataTypes } = require('sequelize');

// models/xxx/yyy.js 에 해당
class User extends Sequelize.Model {
  static init(sequelize) {
    super.init({
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      email: DataTypes.STRING,
      name: DataTypes.STRING,
      display_name: DataTypes.STRING
    }, {
      sequelize,
      tableName: 'users',
      timestamps: false
    })

    return User;
  }
}


const sequelize = new Sequelize(databaseConfig.Database, databaseConfig.User, databaseConfig.Password, {
    host: databaseConfig.Host,
    dialect: databaseConfig.Product,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idel:10000
    }
});

const userModel = User.init(sequelize);
module.exports = {Sequelize, sequelize, userModel}



// 종료 signal 발생시 db connection 정리 작업
process.on('SIGINT', () => {
    sequelize.close();
    console.log("db closed");
  })