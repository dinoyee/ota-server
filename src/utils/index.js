const fs = require('fs')
const path = require('path')

const getTemplate = (template) => {
    const file = path.join(__dirname, '..', 'templates') + '/' + template
    try {
        const data = fs.readFileSync(file, "utf8")
        return data.toString()
    } catch (e) {
        return e.toString()
    }
}

module.exports = {getTemplate}