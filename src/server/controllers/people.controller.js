const { peopleFactory } = require('../../app/People')
const { _isWookieeFormat } = require('./utils')

const get = async (req, res) => {
  const people = await peopleFactory(req.params.id, _isWookieeFormat(req))
  res.status(200).json(people)
}

module.exports = { get }
