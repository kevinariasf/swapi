const app = require('../')
const { getIdOnUrl } = require('./utils')

const AbstractPeople = require('./abstractPeople')

class CommonPeople extends AbstractPeople {
  constructor(id) {
    super()
    this.id = id
  }

  async init() {
    let people = await app.db.swPeople.findOne({
      where: { id: this.getId() },
    })
    if (!people) {
      console.log('NOOOO EXISTE')
      const peopleData = await app.swapiFunctions.genericRequest(
        `https://swapi.dev/api/people/${this.id}`,
        'GET',
        null,
        true
      )

      if (peopleData.detail === 'Not found') {
        throw new Error('People not found')
      }

      const homeworldData = await app.swapiFunctions.genericRequest(
        peopleData.homeworld,
        'GET',
        null,
        true
      )
      people = await app.db.swPeople.create({
        id: this.id,
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
}

module.exports = CommonPeople
