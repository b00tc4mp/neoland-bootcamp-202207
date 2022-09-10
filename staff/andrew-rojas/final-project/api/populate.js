const { connect, disconnect } = require("mongoose");
const { User, Articles } = require('./src/models')

connect("mongodb://localhost:27017/final-project-test")
  
  .then(() => Promise.all([User.deleteMany(), Articles.deleteMany()]))
  .then(() => {
    const lewis = new User({
      name: "Lewis Hamilton",
      email: "lewis@hamilton.com",
      password: "123123123",
    })

    const george = new User({
      name: "George Russell",
      email: "george@russell.com",
      password: "123123123",
    })

    const carlos = new User({
      name: "Carlos Sainz",
      email: "carlos@sainz.com",
      password: "123123123",
    })

    return Promise.all([
      lewis.save(),
      george.save(),
      carlos.save(),
    ])


  })

  .then(() => {
    const product1 = new Articles({
      productName: 'Fanta limon',
      category: 'bebida',
      quantity: '30',
      description: ''
    })

    const product2 = new Articles({
      productName: 'Fanta naranja',
      category: 'bebida',
      quantity: '90',
      description: ''
    })

    return Promise.all([
      product1.save(),
      product2.save(),
    ])
  })

  .catch(error => {
    console.log(error)
  })
  .then(() => disconnect())
