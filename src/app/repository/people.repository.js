const app = require('..')

const find = async (id) => {
  return await app.db.swPeople.findOne({
    where: { id },
  })
}

const create = async (id, name, mass, height, homeworld_name, homeworld_id) => {
  return await app.db.swPeople.create({
    id,
    name,
    mass,
    height,
    homeworld_name,
    homeworld_id,
  })
}

module.exports = { find, create }
