const service = require('./service')

const getTopicList = async (req, res) => {
    
    console.log(process.env.NODE_ENV)
    const result = await service.getTopicInfo()
    res.json(result)
}


module.exports = {getTopicList}