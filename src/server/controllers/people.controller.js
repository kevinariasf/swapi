const { peopleFactory } = require('../../app/People')
const { planetFactory } = require('../../app/Planet')
const { _isWookieeFormat, generateRandom } = require('./utils')

const get = async (req, res) => {
  try {
    const language = _isWookieeFormat(req) ? 'wookiee' : false
    const people = await peopleFactory(req.params.id, language)
    res.status(200).json(people)
  } catch (error) {
    if (error.message === 'People not found')
      res.status(404).json('People not found')
  }
}

const getWeightOnPlanetRandom = async (req, res) => {
  const peopleId = generateRandom(82)
  const planetId = generateRandom(60)
  let people
  let planet
  try {
    people = await peopleFactory(peopleId)
    planet = await planetFactory(planetId)
  } catch (error) {
    if (error.message.includes('not found'))
      res.status(404).json('People or planet not found')
    return
  }
  if (people.getHomeworldId() == planet.getId()) {
    res.status(500).json('Planet is the home planet')
  } else if (!planet.getGravity() || planet.getGravity() === 'unknown') {
    res.status(500).json('Planet gravity is unknown')
  } else if (!people.getMass() || people.getMass() === 'unknown') {
    res.status(500).json('People mass is unknown')
  } else {
    res.status(200).json({
      people,
      planet,
      weightOnPlanet: people.getWeightOnPlanet(planet.getGravity()),
    })
  }
}

module.exports = { get, getWeightOnPlanetRandom }
