const app = require('../')
const { getIdOnUrl } = require('./utils')

class AbstractPeople {
  constructor(id) {
    if (this.constructor == AbstractPeople) {
      throw new Error("Abstract classes can't be instantiated.")
    }
  }

  async init() {
    let people = await app.db.swPeople.findOne({
      where: { id: this.getId() },
    })
    if (!people) {
      const peopleData = await app.swapiFunctions.genericRequest(
        `https://swapi.dev/api/people/${this.id}`,
        'GET',
        null,
        true
      )
      const homeworldData = await app.swapiFunctions.genericRequest(
        peopleData.homeworld,
        'GET',
        null,
        true
      )

      people = await app.db.swPeople.create({
        id: peopleData.id,
        name: peopleData.name,
        mass: peopleData.mass,
        height: peopleData.height,
        homeworld_name: homeworldData.name,
        homeworld_id: getIdOnUrl(peopleData.homeworld),
      })
    }

    this.name = people.name
    this.mass = people.mass
    this.height = people.height
    this.homeworldName = people.homeworld_name
    this.homeworldId = people.homeworld_id
  }

  getId() {
    return this.id
  }

  getName() {
    return this.name
  }

  getMass() {
    return this.mass
  }

  getHeight() {
    return this.height
  }

  getHomeworldName() {
    return this.homeworldName
  }

  getHomeworldId() {
    return this.homeworldId
  }

  getWeightOnPlanet(planetId) {
    throw new Error('To be implemented')
  }
}

module.exports = AbstractPeople
