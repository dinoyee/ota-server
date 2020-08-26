const express = require('express')
const path = require('path')
const apiRouter = express.Router()

const packageApi = _require('/router/api/packageApi')

function setRouter(app) {
    // vue
    app.use(express.static(path.join(__dirname, '../../app', 'dist')))
    // api
    apiRouter.route('/package/:method').post(packageApi)
    app.use('/api', apiRouter)
}

module.exports = {setRouter}