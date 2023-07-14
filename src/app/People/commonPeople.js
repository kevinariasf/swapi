const AbstractPeople = require('./abstractPeople')

class CommonPeople extends AbstractPeople {
  constructor(id) {
    super()
    this.id = id
  }
}

module.exports = CommonPeople
