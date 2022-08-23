const { readFile } = require('fs')

//const file = process.argv[2]
const [, , file] = process.argv

readFile(file, 'utf8', (error, content) => {
    if (error) {
        console.log(error)

        return
    }

    console.log(content)
})