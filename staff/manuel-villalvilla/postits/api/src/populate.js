const { User, Note } = require('./models')
const { connect, disconnect } = require('mongoose');

(async () => {
    await connect('mongodb://localhost:27017/postits')

    await Promise.all([User.deleteMany(), Note.deleteMany()])

    const name = 'manu'
    const password = '123123123'

    for (let i = 0; i < 10; i++) {
        const email = 'manu' + i + '@manu.com'
        const user = await User.create({ name, email, password })
        console.log('user ' + user.id + ' created')
        for (let z = 0; z < 10; z++) {
            const text = 'nota' + z
            await Note.create({ user: user.id, text })
            if (z === 9) console.log('10 notes created for user ' + user.id)
        }
    }

    await disconnect()
})()



