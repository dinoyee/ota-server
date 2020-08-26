require('dotenv').config()

const express = require('express')
const https = require('https')
const httpsUtils = require('./utils/https')
const ip = require('ip')

const app = express()

const port = process.env.PORT

const index = require('./router/index')

console.log('https://' + ip.address() + ':' + port)

app.use('/', index)

https.createServer(httpsUtils.httpsOptions(), app).listen(port)