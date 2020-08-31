const express = require('express')
const path = require('path')
const apiRouter = express.Router()

const packageApi = _require('/router/api/packageApi')
const plist = _require('/router/plist/plist')

function setRouter(app) {
    // static
    app.use('/apk', express.static(path.join(__dirname, '..', 'apk')))
    app.use('/ipa', express.static(path.join(__dirname, '..', 'ipa')))

    // get
    app.get('/plist/:file', plist)

    // vue
    app.use(express.static(path.join(__dirname, '../../app', 'dist')))

    // api
    apiRouter.route('/package/:method').post(packageApi) // POST::(/api/package/:method)
    app.use('/api', apiRouter)
}

module.exports = {setRouter}