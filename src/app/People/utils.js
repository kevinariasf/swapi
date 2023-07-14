const getIdOnUrl = (url) => {
  urlArray = url.split('/')
  return urlArray[urlArray.length - 2]
}

module.exports = { getIdOnUrl }
