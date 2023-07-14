const peopleRoutes = (server, app) => {
  server.get('/hfswapi/getPeople/:id', async (req, res) => {
    res.sendStatus(501)
  })
}

module.exports = { peopleRoutes }
