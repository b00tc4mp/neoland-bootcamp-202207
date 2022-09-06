const { connect, disconnect } = require('mongoose')
const { Address,Cart,Item,Order,Product,User } = require('./models')

connect('mongodb://localhost:27017/finalProject')

    .then(() => Promise.all([Address.deleteMany(),Cart.deleteMany(),Item.deleteMany(),Order.deleteMany(),Product.deleteMany(),User.deleteMany()]))
    .then(() => {
        // primero crear carrito
        const pepito = new User({
            // role:'anonymous'
            cart: cart1.id
        })
        const wendy = new User({
            name: 'Wendy Darling',
            email: 'wendy@darling.com',
            password: '123123123',
            role:'client',
            cart: cart2.id

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
        ])
    })

    // .then(([pepito, wendy, peter, james]) => {
    //     const note1 = new Note({ user: pepito.id, text: 'Hola, Pepito!' })
    //     const note2 = new Note({ user: wendy.id, text: 'Hola, Wendy!' })
    //     const note3 = new Note({ user: peter.id, text: 'Hola, Peter!' })
    //     const note4 = new Note({ user: james.id, text: 'Hola, James!' })

    //     return Promise.all([
    //         note1.save(),
    //         note2.save(),
    //         note3.save(),
    //         note4.save()
    //     ])
    //     .then(()=> User.findById(pepito.id,'name email').lean())
    //     .then(user=>{
    //         debugger
    //     })
    // })
    .catch(error => {
        debugger
    })
    .then(() => disconnect())