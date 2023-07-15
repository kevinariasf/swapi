const app = require('../../app')

const get = async (req, res) => {
  let logs = await app.db.logging.findAll()
  res.status(200).json(logs)
}

module.exports = { get }
