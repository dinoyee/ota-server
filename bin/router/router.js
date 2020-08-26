const express = require('express')
const pageRouter = express.Router()
const apiRouter = express.Router()

const pageIndex = _require('/router/page/index')

const packageApi = _require('/router/api/packageApi')

function setRouter(app) {
    // page
    pageRouter.route('/').get(pageIndex)
    app.use('/', pageRouter)

    // api
    apiRouter.route('/package/:method').post(packageApi)
    app.use('/api', apiRouter)
}

module.exports = {setRouter}