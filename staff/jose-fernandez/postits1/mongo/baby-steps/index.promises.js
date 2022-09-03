const mongodb = require('mongodb')

const { MongoClient } = mongodb

const client = new MongoClient('mongodb://localhost:27017')

client.connect() //promete una conexion
    .then(connection => {
        const db = connection.db('postits')

        const users = db.collection('users')

        return users.deleteMany({})

            .then(result => {
                console.log('delete many', result)

                return users.insertOne({
                    name: 'luanna',
                    email: 'lu@anna.com',
                    password: '123123123'
                })
            }).then(result => {
                console.log('insert one', result)

                return connection.close()
                    .then(() => console.log('disconnect'))
            })
    })
    .catch(error => {
        console.error('ERROR', error)
    })
