const peopleController = require('../controllers/people.controller')

const peopleRoutes = (server, app) => {
  server.get('/hfswapi/getPeople/:id', peopleController.get)
}

module.exports = { peopleRoutes }
