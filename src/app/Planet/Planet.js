const app = require('../')
const planetRepository = require('../repository/planet.repository')

class Planet {
  constructor(id) {
    this.id = id
  }

  async init() {
    let planet = await planetRepository.find(this.getId())
    if (!planet) {
      const planetData = await app.swapiFunctions.genericRequest(
        `https://swapi.dev/api/planets/${this.id}`,
        'GET',
        null,
        true
      )
      if (planetData.detail === 'Not found') {
        throw new Error('Planet not found')
      }

      const gravityValue = planetData.gravity.split(' ')[0]
      const gravity = isNaN(gravityValue) ? null : gravityValue
      planet = await planetRepository.create(this.id, planetData.name, gravity)
    }

    this.name = planet.name
    this.gravity = planet.gravity
  }

  getId() {
    return this.id
  }

  getName() {
    return this.name
  }

  getGravity() {
    return this.gravity
  }
}

module.exports = Planet
