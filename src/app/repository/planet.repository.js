const app = require('..')

const find = async (id) => {
  return await app.db.swPlanet.findOne({
    where: { id },
  })
}

const create = async (id, name, gravity) => {
  return await app.db.swPlanet.create({
    id,
    name,
    gravity,
  })
}

module.exports = { find, create }
