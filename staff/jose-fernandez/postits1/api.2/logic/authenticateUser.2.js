const { readdir, readFile } = require('fs')

function authenticateUser(email,password,callback){
    try {
        readdir('./data/users', (error, files) => {
            try {
                if (error) {
                    callback(error)
                    return
                }
                if (files.length) {
                    let index = 0
                    let file = files[index];

                    (function iterate() {
                        readFile(`./data/users/${file}`, 'utf8', (error, json) => {
                            try {
                                if (error) {
                                    callback(error)
                                    return
                                }

                                const user = JSON.parse(json)

                                if (user.email === email) {
                                    if (user.password === password) {
                                        callback(null,user.id)
                                        // res.status(200).send(`user with email ${email} and userId ${user.id}`)
                                        
                                        return
                                    } else {
                                       callback(new Error(`email or password wrongs credentials`))
                                        // res.status(401).json({ error: `email or password wrongs credentials` })
                                        return
                                    }

                                }

                                index++

                                if (index < files.length) {
                                    file = files[index]

                                    iterate()

                                    return
                                }
                                callback(error)
                                // res.status(401).json({ error: `email or password wrongs credentials` })
                                
                            }catch(error){
                                callback(error)
                            }
                        })

                    })()
                    return
                }
                callback(error)
                // res.status(401).json({ error: `wrongs credentials` })
            } catch (error) {
                callback(error)
                // res.status(401).json({ error: `wrongs credentials` })
            }

        })
    } catch (error) {
        callback(error)
        // res.status(401).json({ error: `wrongs credentials` })
    }
}
api.listen(8080, () => console.log('api started'))

module.exports = authenticateUser