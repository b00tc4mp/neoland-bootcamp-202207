const mongodb = require('mongodb')

const { MongoClient } = mongodb

const client = new MongoClient('mongodb://127.0.0.1:27017')

client.connect()
    .then(connection => {
        const db = connection.db('postits')

        const users = db.collection('users')

        return users.deleteMany({})
            .then(result => {
                console.log('delete many', result)

                return users.intertOne({
                    name: 'James Hook 2',
                    email: 'james@hook.com',
                    password: '123123123'
                })
                    .then(result => {
                        console.log('insert one', result)
                        
                        return connection.close()
                            .then(() => console.log('disconnected'))
                    })
            })
    })
    .catch(error => {
        console.error('ERROR', error)
    })
