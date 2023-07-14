const AbstractPeople = require('./abstractPeople')
const app = require('../')
const { getIdOnUrl } = require('./utils')

class WookieePeople extends AbstractPeople {
  constructor(id) {
    super()
    this.id = id
  }

  async init() {
    const peopleData = await app.swapiFunctions.genericRequest(
      `https://swapi.dev/api/people/${this.id}?format=wookiee`,
      'GET',
      null,
      true
    )
    const homeworldId = getIdOnUrl(peopleData.acooscwoohoorcanwa)
    const homeworldData = await app.swapiFunctions.genericRequest(
      `https://swapi.dev/api/planets/${homeworldId}?format=wookiee`,
      'GET',
      null,
      true
    )
    this.whrascwo = peopleData.whrascwo
    this.scracc = peopleData.scracc
    this.acwoahrracao = peopleData.acwoahrracao
    this.acooscwoohoorcanwaWhrascwo = homeworldData.whrascwo
    this.acooscwoohoorcanwaId = homeworldId
  }
}

module.exports = WookieePeople
