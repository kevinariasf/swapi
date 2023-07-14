const { peopleRoutes } = require('./people.routes')
const { planetRoutes } = require('./planet.routes')
const { logRoutes } = require('./log.routes')

const applySwapiEndpoints = (server, app) => {
  server.get('/hfswapi/test', async (req, res) => {
    const data = await app.swapiFunctions.genericRequest(
      'https://swapi.dev/api/',
      'GET',
      null,
      true
    )
    res.send(data)
  })

  peopleRoutes(server, app)

  planetRoutes(server, app)

  logRoutes(server, app)
}

module.exports = applySwapiEndpoints
