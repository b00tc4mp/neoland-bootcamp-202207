const mongodb = require('mongodb')

const { MongoClient } = mongodb

const client = new MongoClient('mongodb://localhost:27017');

(async () => {
    try {
        const connection = await client.connect()

        const db = connection.db('test')

        const users = db.collection('users')

        let result = await users.deleteMany({})

        console.log('delete many', result)

        result = await users.insertOne({
            name: 'pepe',
            email: 'pepe@pepe.com',
            password: '123123123'
        })

        console.log('inserted', result)

        result = await connection.close()

        console.log('connection closed', result)
    } catch (error) {
        console.log(error)
    }
})()