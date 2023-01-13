import fs from 'fs'
import path from 'path'

const getTemplate = (template) => {
    const file = path.join(__dirname, '..', 'templates') + '/' + template
    try {
        const data = fs.readFileSync(file, "utf8")
        return data.toString()
    } catch (e) {
        return e.toString()
    }
}

export { getTemplate }