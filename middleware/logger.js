
const consoleLogger = function (req, res, next) {
    console.log('LOGGED')
    next()
}


module.exports = {consoleLogger}