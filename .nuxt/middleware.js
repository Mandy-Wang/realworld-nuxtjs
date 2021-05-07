const middleware = {}

middleware['authenticated'] = require('..\\middleware\\authenticated.js')
middleware['authenticated'] = middleware['authenticated'].default || middleware['authenticated']

middleware['notAuthenticaticated'] = require('..\\middleware\\notAuthenticaticated.js')
middleware['notAuthenticaticated'] = middleware['notAuthenticaticated'].default || middleware['notAuthenticaticated']

export default middleware
