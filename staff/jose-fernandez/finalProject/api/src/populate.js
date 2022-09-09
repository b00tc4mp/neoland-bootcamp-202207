const { connect, disconnect } = require('mongoose')
const { Address, Cart, Item, Order, Product, User } = require('./models')
// 
connect('mongodb://localhost:27017/finalProject')
    // 
    .then(() => Promise.all([Address.deleteMany(), Cart.deleteMany(), Item.deleteMany(), Order.deleteMany(), Product.deleteMany(), User.deleteMany()]))
    .then(() => {
        //firts
        const product1 = new Product({
            name:'airMax90',
            sku: 'nkh1144',
            price: 150,
            discount: 0,
            stock: 114
        })
        const product2 = new Product({
            name:'airMax270',
            sku: 'nkh1244',
            price: 140,
            discount: 0,
            stock: 114
        })
        const product3 = new Product({
            name:'airJordan',
            sku: 'nkh1344',
            price: 190,
            discount: 0,
            stock: 114
        })
        const product4 = new Product({
            name:'techFleece',
            sku: 'nkh1444',
            price: 180,
            discount: 0,
            stock: 114
        })
        return Promise.all([
            product1.save(),
            product2.save(),
            product3.save(),
            product4.save()
        ])
    })
    .then(([product1, product2, product3, product4]) => {
        //primero crear producto
        //embebido se declara antes de save()
        const item1 = new Item({
            product: product1.id,
            price: 300,
            qty: 2
        })
        const item2 = new Item({
            product: product2.id,
            price: 140,
            qty: 1
        })
        const item3 = new Item({
            product: product3.id,
            price: 570,
            qty: 3
        })
        const item4 = new Item({
            product: product4.id,
            price: 180,
            qty: 1
        })

        // primero crear item
        const cart1 = new Cart({
            items: [item1, item2, item3]
        })
        const cart2 = new Cart({
            items: [item2, item3]
        })
        const cart3 = new Cart({
            items: [item4]
        })
        const cart4 = new Cart({
            items: [item3]
        })

        // primero crear carrito
        const pepito = new User({
            // role:'anonymous'
            cart: cart1
        })

        const wendy = new User({
            name: 'Wendy Darling',
            email: 'wendy@darling.com',
            password: '123123123',
            role: 'client',
            cart: cart2

        })
        const peter = new User({
            name: 'Peter Pan',
            email: 'peter@pan.com',
            password: '123123123',
            role: 'client',
            cart: cart3
        })
        const james = new User({
            // role:'anonymous'
            cart: cart4
        })

        return Promise.all([
            pepito.save(),
            wendy.save(),
            peter.save(),
            james.save()
        ])
            .then(() => {
                //primero registro de usuario
                const addressPepito = new Address({
                    fullname: 'Pepito PC',
                    address: 'villarroel 180',
                    passport: '124886290'
                })
                const addressWendy = new Address({
                    fullname: 'Wendy PC',
                    address: 'villarroel 180',
                    passport: '126526240'
                })
                const addressPeter = new Address({
                    fullname: 'Peter PC',
                    address: 'villarroel 180',
                    passport: '127963240'
                })
                const addressJames = new Address({
                    fullname: 'James PC',
                    address: 'villarroel 180',
                    passport: '119037470'
                })

                //duda en cart, redunda con user,(user ya contiene cart)
                const order1 = new Order({
                    user: pepito.id,
                    cart: cart1,
                    date: new Date,
                    paymentAddress: addressPepito,
                    shippingAddress: addressPepito,
                    paymentMethod: 'creditCard'
                })

                const order2 = new Order({
                    user: wendy.id,
                    cart: cart2,
                    date: new Date,
                    paymentAddress: addressWendy,
                    shippingAddress: addressWendy,
                    paymentMethod: 'paypal'
                })

                const order3 = new Order({
                    user: peter.id,
                    cart: cart3,
                    date: new Date,
                    paymentAddress: addressPeter,
                    shippingAddress: addressPeter,
                    paymentMethod: 'paypal'
                })
                const order4 = new Order({
                    user: james.id,
                    cart: cart4,
                    date: new Date,
                    paymentAddress: addressJames,
                    shippingAddress: addressJames,
                    paymentMethod: 'creditCard'
                })
                return Promise.all([
                    order1.save(),
                    order2.save(),
                    order3.save(),
                    order4.save()
                ])
            })
    })
    .then(() => disconnect())
    .catch (console.error)