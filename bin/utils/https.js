
const fs = require('fs')
const os = require('os')
const ip = require('ip')
const path = require('path')
const shelljs = require('shelljs')

function httpsOptions() {
    let key, cert
    const cerFolder = os.homedir() + '/.ota-server/' + ip.address()
    try {
        key = fs.readFileSync(cerFolder + '/cert.key', 'utf-8')
        cert = fs.readFileSync(cerFolder + '/cert.cer', 'utf-8')
    } catch (e) {
        shelljs.exec('sh  ' + path.join(__dirname, 'generate-certificate.sh') + ' ' + ip.address()).code
        key = fs.readFileSync(cerFolder + '/cert.key', 'utf-8')
        cert = fs.readFileSync(cerFolder + '/cert.cer', 'utf-8')
    }
    return {
        key: key,
        cert: cert
    }
}

module.exports = {httpsOptions}