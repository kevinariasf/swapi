const app = require('../')
const peopleRepository = require('../repository/people.repository')
const { getIdOnUrl } = require('./utils')

const AbstractPeople = require('./abstractPeople')

class CommonPeople extends AbstractPeople {
  constructor(id) {
    super()
    this.id = id
  }

  async init() {
    let people = await peopleRepository.find(this.getId())
    if (!people) {
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
      people = await peopleRepository.create(
        this.id,
        peopleData.name,
        peopleData.mass,
        peopleData.height,
        homeworldData.name,
        getIdOnUrl(peopleData.homeworld)
      )
    }
    this.name = people.name
    this.mass = people.mass
    this.height = people.height
    this.homeworldName = people.homeworld_name
    this.homeworldId = people.homeworld_id
  }
}

module.exports = CommonPeople
