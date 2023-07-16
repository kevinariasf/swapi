const app = require('..')

const findAll = async () => {
  return await app.db.logging.findAll()
}

const create = async (action, header, ip) => {
  return await app.db.logging.create({
    action,
    header,
    ip,
  })
}

module.exports = { findAll, create }
