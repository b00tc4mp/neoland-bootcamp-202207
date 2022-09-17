const mongodb = require('mongodb')

const { MongoClient } = mongodb

const client = new MongoClient('mongodb://localhost:27017')

client.connect()
    .then(connection => {
        const db = connection.db('test')

        const users = db.collection('users')

        return users.deleteMany({})
            .then(result => {
                console.log('delete many', result)
                return users.insertOne({
                    name: 'pepe',
                    email: 'pepe@pepe.com',
                    password: '123123123'
                })
                .then(result => {
                    // en result viene el id q genera mongo
                    console.log('inserted', result)
        
                    return connection.close()
                })
            })
    })
    .catch(error => { // atrapa cualquier error de los .then
        console.log(error)
    })