const logController = require('../controllers/log.controller')

const logRoutes = (server, app) => {
  server.get('/hfswapi/getLogs', logController.get)
}

module.exports = { logRoutes }
