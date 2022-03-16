const SequelizeManager = require("../../utils/sequelize-manager");

const getTopicInfo = async() => {
  const sManager = new SequelizeManager("mysql_1");
  
  const result = sManager.models.topic.findAll();
  return result
}

module.exports = {getTopicInfo}