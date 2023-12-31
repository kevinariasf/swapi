class AbstractPeople {
  constructor(id) {
    if (this.constructor == AbstractPeople) {
      throw new Error("Abstract classes can't be instantiated.")
    }
  }

  async init() {
    throw new Error('Init is not implemented')
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

  getWeightOnPlanet(planetGravity) {
    return this.mass * planetGravity
  }
}

module.exports = AbstractPeople
