const planetController = require('../controllers/planet.controller')

const planetRoutes = (server, app) => {
  server.get('/hfswapi/getPlanet/:id', planetController.get)
}

module.exports = { planetRoutes }
