const { connect, disconnect } = require('mongoose')
const { User } = require('./models')

connect('mongodb://127.0.0.1:27017/menuger')

.then(()=> Promise.all([User.deleteMany()]))
.then(()=> {
    const pepito = new User({
        name: 'Pepito Grillo',
        email: 'pepito@grillo.com',
        password: '123123123'
    })

    const wendy = new User({
        name: 'Wendy Darling',
        email: 'wendy@darling.com',
        password: '123123123'
    })

    const peter = new User({
        name: 'Peter Pan',
        email: 'peter@pan.com',
        password: '123123123'
    })

    const james = new User({
        name: 'James Hook',
        email: 'james@hook.com',
        password: '123123123'
    })

    return Promise.all([
        pepito.save(),
        wendy.save(),
        peter.save(),
        james.save()

         // .then(users => {
    //     const [pepito, wendy, peter, james] = users})
    ])


    .catch(error => {
        debugger
    })
    .then(() => disconnect())
})