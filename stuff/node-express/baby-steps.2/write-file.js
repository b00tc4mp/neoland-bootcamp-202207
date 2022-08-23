const { writeFile } = require('fs')

//const data = process.argv[2]
//const file = process.argv[3]
const [, , data, file] = process.argv


writeFile(file, data, 'utf8', error => {
    if (error) {
        console.error(error)
    }
})