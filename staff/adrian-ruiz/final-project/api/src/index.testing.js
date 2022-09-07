const {mongoose, Types: {ObjectId}} = require('mongoose')
const { User, Company, InventoryItem } = require('./models')
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

const falseId = new ObjectId

    ; (async () => {
        const company1 = await Company.create(companyData)
        await User.create({ name: 'Testing', email: 'test@test.com', password: '123123Aa!', company: falseId , role: 'admin' })
        const populatedUsers = await User.find().populate('company')
        console.log(populatedUsers)
    })()

