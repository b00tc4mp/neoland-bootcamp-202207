const { readdir, unlink } = require('fs')
function cleanFolder(folder, callback) {
    readdir(folder, (error, files) => {
        if (error) {
            callback(new Error(`Can't list files from folder: ${folder}`))
            return
        }
        files = files.filter(file => !file.startsWith('.'))

        if (files.length === 0){
            callback(null)
            return
        }
            

        let count = 0

        files.forEach(file => {
            unlink(`${folder}/${file}`, error => {
                if (error) {
                    callback(new Error(`Can't remove file: ${file} from folder: ${folder}`))
                    return
                }

                count++

                if (count === files.length)
                    callback(null)
            })
        })
    })
}

module.exports = cleanFolder