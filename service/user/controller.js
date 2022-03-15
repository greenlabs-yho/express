const service = require('./service')

const getUserList = async (req, res) => {
    
    console.log(process.env.NODE_ENV)
    const result = await service.getUserInfo()
    res.json(result)
}


module.exports = {getUserList}