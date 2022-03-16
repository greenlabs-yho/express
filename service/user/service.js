const config = require('config');
const databaseConfig = config.get('databaseConfig');

const { Sequelize, DataTypes, QueryTypes } = require('sequelize');

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

// utils/database.js 에 해당.
const getTableConnection = async() => {
    try {  
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

        return {
          sequelize,
          models: {user: userModel}
        }

    } catch (error) {
      throw error;
    }
}

// service/xxx.js 에 해당.
const getUserInfo_old = async() => {
  const conn = await getTableConnection();
  const result = await conn.models.user.findAll()

  //conn.sequelize.close();
  return result
}


// 새로운 버전
const dbInfo = require("..");
const getUserInfo = async() => {
  const result = dbInfo.userModel.findAll();
  
  return result
}

module.exports = {getUserInfo}