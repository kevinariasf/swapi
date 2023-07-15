const _isWookieeFormat = (req) => {
  if (req.query.format && req.query.format == 'wookiee') {
    return true
  }
  return false
}

function generateRandom(maxLimit = 100) {
  let random = Math.random() * maxLimit
  random = Math.floor(random)
  return random
}

module.exports = { _isWookieeFormat, generateRandom }
