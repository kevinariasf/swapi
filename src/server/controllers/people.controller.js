const { peopleFactory } = require('../../app/People')
const { _isWookieeFormat } = require('./utils')

const get = async (req, res) => {
  const language = _isWookieeFormat(req) ? 'wookiee' : false
  const people = await peopleFactory(req.params.id, language)
  res.status(200).json(people)
}

module.exports = { get }
