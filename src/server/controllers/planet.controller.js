const { planetFactory } = require('../../app/Planet')

const get = async (req, res) => {
  try {
    const planet = await planetFactory(req.params.id)
    res.status(200).json(planet)
  } catch (error) {
    if (error.message === 'Planet not found')
      res.status(404).json('Planet not found')
  }
}

const getWeightOnPlanetRandom = async (req, res) => {
  res.sendStatus(501)
}

module.exports = { get, getWeightOnPlanetRandom }
