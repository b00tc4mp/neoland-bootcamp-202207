var fs = require('fs')

fs.readFile('./helloworld.txt', 'utf8', function (error, content) {
    if (error) {
        console.log(error)

        return
    }

    console.log(content)
})