const app = require('../')
class Planet {
  constructor(id) {
    this.id = id
  }

  async init() {
    let planet = await app.db.swPlanet.findOne({
      where: { id: this.getId() },
    })
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

      planet = await app.db.swPlanet.create({
        id: this.id,
        name: planetData.name,
        gravity: isNaN(gravityValue) ? null : gravityValue,
      })
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
