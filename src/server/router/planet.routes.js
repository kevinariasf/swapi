const planetController = require('../controllers/planet.controller')

const planetRoutes = (server, app) => {
  server.get('/hfswapi/getPlanet/:id', planetController.get)

  server.get(
    '/hfswapi/getWeightOnPlanetRandom',
    planetController.getWeightOnPlanetRandom
  )
}

module.exports = { planetRoutes }
