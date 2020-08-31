const fs = require('fs')
const mustache = require('mustache')

module.exports = (req, res) => {
    res.json({
        t: req.params.file
    })
    return
    fs.readFile(pathRoot + '/utils/plistTemplate.plist', (err, data) => {
        if (err) res.json(err)
        let template = data.toString()

        res.json({
            t: template
        })
    })
}