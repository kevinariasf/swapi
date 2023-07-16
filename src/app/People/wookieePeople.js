const AbstractPeople = require('./abstractPeople')
const app = require('../')
const { getIdOnUrl, WOOKIE_LANGUAGE } = require('./utils')

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
    if (peopleData.detail === 'Not found') {
      throw new Error('People not found')
    }
    const homeworldId = getIdOnUrl(peopleData.acooscwoohoorcanwa)
    const homeworldData = await app.swapiFunctions.genericRequest(
      `https://swapi.dev/api/planets/${homeworldId}?format=wookiee`,
      'GET',
      null,
      true
    )
    this[WOOKIE_LANGUAGE.NAME] = peopleData[WOOKIE_LANGUAGE.NAME]
    this[WOOKIE_LANGUAGE.MASS] = peopleData[WOOKIE_LANGUAGE.MASS]
    this[WOOKIE_LANGUAGE.HEIGHT] = peopleData[WOOKIE_LANGUAGE.HEIGHT]
    this[WOOKIE_LANGUAGE.HOMEWORLD_NAME] = peopleData[WOOKIE_LANGUAGE.NAME]
    this[WOOKIE_LANGUAGE.HOMEWORLD_ID] = homeworldId
  }
}

module.exports = WookieePeople
