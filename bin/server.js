// Init
require('./global')
const express = require('express')
const https = require('https')
const app = express()

// Utils
const httpsUtils = _require('/utils/https')
const envUtils = _require('/utils/env')

// Router
const router = _require('/router/router')

console.log('https://' + envUtils.host + ':' + envUtils.port)

router.setRouter(app)

https.createServer(httpsUtils.httpsOptions(), app).listen(envUtils.port)