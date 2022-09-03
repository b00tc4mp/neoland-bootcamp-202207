const mongoose = require('mongoose')
const { User, Company } = require('./models')
const express = require('express')
const logger = require('./logger')(module)


;(async () => {

    await mongoose.connect('mongodb://localhost:27017/ERP-testing')
    logger.info('Connected to DB')

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

    api.listen(8080, () => { logger.info('API started and listening port 8080') })

    process.on('SIGINT', async () => { 
        await mongoose.disconnect()
        logger.info('DB disconnected')
        process.exit(0)  
    })
})()