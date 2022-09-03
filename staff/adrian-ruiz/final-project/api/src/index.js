const mongoose = require('mongoose')
const { User, Company } = require('./models')
const express = require('express')


;(async () => {

    await mongoose.connect('mongodb://localhost:27017/ERP-testing')
    console.log('connected to DB')

    const api = express()

    const { usersRouter } = require('./routes')


   /*  
   ESTO PARA CUANDO CONECTEMOS CON LA APP

   api.use((_, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.setHeader('Access-Control-Allow-Methods', '*')
        res.setHeader('Access-Control-Allow-Headers', '*')

        next()
    }) */

    api.use('/api', usersRouter)

    api.listen(8080, () => { 'API started in port 8080' })

    process.on('SIGINT', async () => { 
        await mongoose.disconnect()
        console.log('db disconnected')
        process.exit(0)  
    })
})()