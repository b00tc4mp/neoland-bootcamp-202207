const { readdir, readFile } = require('fs')
const { AuthError, SystemError, UnknownError } = require('../errors')
const { validateEmail, validatePassword, validateCallback } = require('../validators')


function authentificateUser(email, password, callback) {
    validateEmail(email)
    validatePassword(password)
    validateCallback(callback)
    const folder = './data/users'

    readdir(folder, (error, files) => {

    if (error) return callback(new SystemError (`cannot list files from folder ${folder}`))
        // {res.status(500).json({error: error.message})
        //SystemError
        //callback(error, null) --> Early return
        // return}
            
        // esto es para poder dejar el archivo de . en la carpeta users
        // esto lo repetiré infitito para cuando haga el forEach y borrado de usuarios no me borre tambien este archivo

        files = files.filter(file => !file.startsWith('.')) 

            if (files.length) {
                let index = 0
                let file = files[index];

                (function iterate() {
                    readFile(`${folder}/${file}`, 'utf8', (error, json) => {
                        if (error) return callback (new SystemError (`cannot read file ${file} in folder ${folder}`))
                            // res.status(500).json({ error: error.message })
                                             

                        const user = JSON.parse(json)

                        if (user.email === email) 
                            if (user.password === password) return callback (null, user.id)

                                // res.status(200).json({ userId: user.id })
                      
                            else return callback (new AuthError('wrong credentials'))

                                // res.status(401).json({ error: 'wrong credentials' })
                                //AuthError --> error de autentificación
           
                            index++

                            if (index < files.length) {
                                file = files[index]
                                iterate()

                                return

                            }
                            //AuthError --> error de autentificación
                            // res.status(401).json({ error: 'wrong credentials' })
                            callback(new AuthError('wrong credentials'))
                        })
                    })() //iife
                    return

                }
    
            callback(new AuthError('wrong credentials'))
            // res.status(500).json({ error: 'wrongs credentials' })
    })
    }



//// api.post('/api/users/auth', jsonBodyParser, (req, res) => {})

// api.listen(8080, () => console.log("api started"))

module.exports = authentificateUser

