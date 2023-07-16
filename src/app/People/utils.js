const getIdOnUrl = (url) => {
  urlArray = url.split('/')
  return urlArray[urlArray.length - 2]
}
const WOOKIE_LANGUAGE = {
  NAME: 'whrascwo',
  MASS: 'scracc',
  HEIGHT: 'acwoahrracao',
  HOMEWORLD_NAME: 'acooscwoohoorcanwaWhrascwo',
  HOMEWORLD_ID: 'acooscwoohoorcanwaId',
}
module.exports = { getIdOnUrl, WOOKIE_LANGUAGE }
