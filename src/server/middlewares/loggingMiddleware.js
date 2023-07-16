const loggingRepository = require('../../app/repository/logging.repository')

const loggingMiddleware = (db) => (req, res, next) => {
  const ip = (
    req.headers['x-forwarded-for'] ||
    req.connection.remoteAddress ||
    ''
  )
    .split(',')[0]
    .trim()
  const headers = JSON.stringify(req.headers)
  const originalUrl = req.originalUrl
  // Persist this info on DB
  const action = originalUrl.split('/')[2]
  if (action != 'getLogs') {
    loggingRepository.create(action, headers, ip)
  }
  next()
}

module.exports = loggingMiddleware
