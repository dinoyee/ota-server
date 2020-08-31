const path = require('path')

global._require = (_path) => {
    return require(path.join(__dirname, _path))
}

global.pathRoot = __dirname