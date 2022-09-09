const mongoose = require('mongoose')
const {Company, User, InventoryItem, Customer, Estimate, Invoice} = require('./models')
require('dotenv').config()
const {env : { MONGO_URL }} = process

;(async () => {

    await mongoose.connect(MONGO_URL)

    await Promise.all([Company.deleteMany(), User.deleteMany(), InventoryItem.deleteMany(), Customer.deleteMany(), Estimate.deleteMany(), Invoice.deleteMany()])

    const newCompany = {
        name: "Adrian's Company",
        legalName: "Adrian S.L",
        legalId: "123123123B",
        companyEmail : "12@12.com"
    }

    const company = await Company.create(newCompany)
    const users = [
        {
            name : "Adrian",
            lastName : "Ruiz",
            email : "12@12.com",
            password : "123123123Aa!",
            company: company.id,
            role: "admin"
        },
        {
            name : "Accountant",
            lastName : "Surname",
            email : "a12@12.com",
            password : "123123123Aa!",
            company: company.id,
            role: "accountant"
        },
        {
            name : "Employee",
            lastName : "Surname",
            email : "e12@12.com",
            password : "123123123Aa!",
            company: company.id,
            role: "employee"
        }
    ]

    const _users = await User.create(users)

    //TODO DE ESTA MANERA DOY POR HECHO QUE EL PRIMER USUARIO SIEMPRE SERÁ EL ADMIN... Y PODRÍA ACABAR ANTES LA SEGUNDA PROMESA... DEBERIA REALIZAR UN IF PARA COMPROBAR EL NOMBRE/ROL
    company.admin = _users[0]
    company.users.push(..._users)
    await company.save()

    const items = [{
            company : company.id,
            name : "Populated item 1",
            sku : "SKU-P0001",
        },
        {
            company : company.id,
            name : "Populated item 2",
            sku : "SKU-P0002",
        },
        {
            company : company.id,
            name : "Populated item 3",
            sku : "SKU-P0003",
        }]

        const _items = await InventoryItem.create(items)

    const customers = [{
        company: company.id,
        name: "Populated Customer 1"
    },
    {
        company: company.id,
        name: "Populated Customer 2"
    },
    {
        company: company.id,
        name: "Populated Customer 3"
    }]

    const _customers = await Customer.create(customers)

    const estimates = [{
        company: company.id,
        estimateNumber: "P001",
        customer : {
            refId: _customers[0].id,
            name: "Populated Name Estimate",
            email: "Populated@estimate.com",
            billingAddress: "Populated Street Estimate"
        },
        terms : "30 days",
        estimateDate : new Date(),
        products : [{
            id: _items[0].id,
            price : 35,
            amount : 2
        },
        {
            id: _items[1].id,
            price : 10,
            amount: 3
        }],
        totalAmount: 100
    },
    {
        company: company.id,
        estimateNumber: "P002",
        customer : {
            refId: _customers[1].id,
            name: "Populated Name Estimate2",
            email: "Populated2@estimate.com",
            billingAddress: "Populated Street Estimate2"
        },
        terms : "30 days",
        estimateDate : new Date(),
        products : [{
            id: _items[0].id,
            price : 20,
            amount : 2
        },
        {
            id: _items[2].id,
            price : 2,
            amount: 5
        }],
        totalAmount: 50
    }]

    await Estimate.create(estimates)

    const invoices = [{
            company: company.id,
            invoiceNumber: "FR001",
            customer : {
                refId: _customers[0].id,
                name: "Populated Name Invoice",
                email: "Populated@invoice.com",
                billingAddress: "Populated Street Invoice"
            },
            terms : "30 days",
            invoiceDate : new Date("01/01/2022"),
            dueDate : new Date("01/01/2022"),
            products : [{
                id: _items[0].id,
                price : 35,
                amount : 2
            },
            {
                id: _items[1].id,
                price : 10,
                amount: 3
            }],
            totalAmount: 100,
            balance: 100
        },
        {
            company: company.id,
            invoiceNumber: "FR002",
            customer : {
                refId: _customers[1].id,
                name: "Populated Name Invoice",
                email: "Populated2@invoice.com",
                billingAddress: "Populated Street Invoice"
            },
            terms : "30 days",
            invoiceDate : new Date("01/01/2022"),
            dueDate : new Date("01/01/2022"),
            products : [{
                id: _items[0].id,
                price : 20,
                amount : 2
            },
            {
                id: _items[2].id,
                price : 2,
                amount: 5
            }],
            totalAmount: 50,
            balance: 50
        }]

    await Invoice.create(invoices)

    await mongoose.disconnect()
})()