
const express = require('express')
const https = require('https')
const httpsUtils = require('./utils/https')

const app = express()

app.get('/', function (req, res) {
    res.json({})
})

https.createServer(httpsUtils.httpsOptions(), app).listen(9000)