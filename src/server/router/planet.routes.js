const planetRoutes = (server, app) => {
  server.get('/hfswapi/getPlanet/:id', async (req, res) => {
    res.sendStatus(501)
  })

  server.get('/hfswapi/getWeightOnPlanetRandom', async (req, res) => {
    res.sendStatus(501)
  })
}

module.exports = { planetRoutes }
