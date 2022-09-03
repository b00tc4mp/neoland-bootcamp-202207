const mongoose = require('mongoose')
const { User, Company } = require('./models')
mongoose.connect('mongodb://localhost:27017/ERP-testing')

const companyData = {
    name: 'Testing company',
    legalName: 'Testing SL',
    legalId: '123123123-X',
    telephone: 666555444,
    email: 'test@company.com',
    postalAddress: {
        street: 'Street 123 XZY',
        town: 'Benicarlo',
        state: 'Castellón',
        zipCode: 12580,
        Country: 'Spain'

    },
    physicalAddress: {
        street: 'Street 777 XZY',
        town: 'Benicarlo',
        state: 'Castellón',
        zipCode: 12580,
        Country: 'Spain'

    },
    sector: 'IT'
}

    ; (async () => {
        const company1 = await Company.create(companyData)
        await User.create({ name: 'Testing', email: 'test@test.com', password: '123', company: company1.id, rol: 'admin' })
        const populatedUsers = await User.find().populate('company')
        console.log(populatedUsers)
    })()

