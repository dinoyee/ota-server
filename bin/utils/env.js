require('dotenv').config()

const ip = require('ip')
const port = process.env.PORT || 1234
const host = process.env.HOST || ip.address()

module.exports = {port, host}