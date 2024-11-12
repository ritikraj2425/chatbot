const AuthenticationRoutes = require('./authentication')
const historyRoute =  require('./history')
const UpdateUserRoutes = require('./update')
module.exports = [AuthenticationRoutes,historyRoute, UpdateUserRoutes]
