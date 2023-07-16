const loggingRepository = require('../../app/repository/logging.repository')

const get = async (req, res) => {
  let logs = await loggingRepository.findAll()
  res.status(200).json(logs)
}

module.exports = { get }
