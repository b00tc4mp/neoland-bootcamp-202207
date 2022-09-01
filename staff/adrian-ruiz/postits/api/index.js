const express = require('express')
const mongoose = require('mongoose')
const logger = require('./logger')(module)

    ; (async () => {

        await mongoose.connect('mongodb://localhost:27017/postits')

        logger.info('Connected to db: mongodb://localhost:27017/postits')

        const api = express()

        const { usersRouter, notesRouter } = require('./routes')

        api.use((_, res, next) => {
            res.setHeader('Access-Control-Allow-Origin', '*')
            res.setHeader('Access-Control-Allow-Methods', '*')
            res.setHeader('Access-Control-Allow-Headers', '*')

            next()
        })

        api.use('/api', usersRouter, notesRouter)

        api.listen(8080, () => { logger.info('api started') })

        process.on('SIGINT', async () => { // similar a eventListener pero de node. SIGINT = CTRL+C         
            await mongoose.disconnect()
            logger.info('db disconnected')
            process.exit(0) // para q pare el server     
        })
    })()


