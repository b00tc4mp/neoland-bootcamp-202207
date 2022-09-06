require('dotenv').config()
const { env: { MONGO_URL } } = process
const { User, Ad } = require('./models')
const { connect, disconnect } = require('mongoose');

(async () => {
    await connect(MONGO_URL)

    await Promise.all([User.deleteMany(), Ad.deleteMany()])

    const name = 'manu'
    const password = '123123123'

    function randomCountry () {
        const countries = ['ES', 'AR', 'MX']
        return countries[Math.floor(Math.random() * 3)]
    }

    for (let i = 0; i < 10; i++) {
        const email = 'manu' + i + '@manu.com'
        const user = await User.create({ name, email, password })
        for (let z = 0; z < 5; z++) {
            const title = 'ad ' + z
            const body = 'lorem ipsum no se que no se cuantos'
            const country = randomCountry()
            await Ad.create({ user: user.id, title, body, country })
        }
    }

    console.log('10 users created with 5 ads each')

    await disconnect()
})()



