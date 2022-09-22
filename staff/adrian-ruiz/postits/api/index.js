require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const logger = require('./logger')(module)
const { name, version } = require('./package.json')

const {env : { MONGO_URL, PORT}} = process
    ; (async () => {

        await mongoose.connect(MONGO_URL)

        logger.info(`Connected to db: ${MONGO_URL}`)

        const api = express()

        const { usersRouter, notesRouter } = require('./routes')

        api.use((_, res, next) => {
            res.setHeader('Access-Control-Allow-Origin', '*')
            res.setHeader('Access-Control-Allow-Methods', '*')
            res.setHeader('Access-Control-Allow-Headers', '*')

            next()
        })

        api.use('/api', usersRouter, notesRouter)

        api.listen(PORT, () => { logger.info(`${name} v${version} started and listening in port ${PORT}`) })

        process.on('SIGINT', async () => { // similar a eventListener pero de node. SIGINT = CTRL+C         
            await mongoose.disconnect()
            logger.info('db disconnected')
            process.exit(0) // para q pare el server     
        })
    })()


