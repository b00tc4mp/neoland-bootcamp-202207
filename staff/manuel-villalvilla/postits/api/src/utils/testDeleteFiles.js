const { unlink } = require('fs')
const readFolder  = require('../utils/readFolder')

module.exports = function (folder, done) {
    readFolder(folder, (error, files) => {
        if (error) return done(error)

        if (files.length === 0) return done(error)

        let count = 0

        files.forEach(file => {
            unlink(`${folder}/${file}`, error => { // funcion de fs para borrar archivos
                if (error) return done(error)

                count++

                if (count === files.length) done()
            })
        })
    })
}