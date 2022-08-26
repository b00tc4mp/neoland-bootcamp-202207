const { readdir } = require('fs')

module.exports = function (folder, callback) {
    readdir(folder, (error, files) => {
        if (error) return callback(error)

        files = files.filter(file => !file.startsWith('.'))

        callback(null, files)
    })
}