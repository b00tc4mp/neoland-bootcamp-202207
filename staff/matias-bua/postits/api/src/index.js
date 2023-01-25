require('dotenv').config()

const { connect, disconnect } = require('mongoose')
const { createLogger } = require('./utils')
const Logger = createLogger(module)
const cors = require('cors')
const { name, version } = require('../package.json')

//const MONGO_URL = process.env.MONGO_URL
//const PORT = process.env.PORT

const { env: { MONGO_URL, PORT }} = process

connect(MONGO_URL)
    .then(() => {
        Logger.info('db connected')

        const express = require('express')
        
        const api = express()
        
        const { usersRouter, notesRouter } = require('./routes')   
        
        api.use(cors())
        
        api.get('/', (req, res) => res.send(`${name} v${version} ;)`))

        api.use('/api', usersRouter, notesRouter)

        api.listen(PORT, () => Logger.info(`${name} v${version} started and listening in port ${PORT}`))

        process.on('SIGINT', () => {
            if (!process.stopped) {
                process.stopped = true

                Logger.info('\napi stopped')

                disconnect()
                    .then(() => {
                        Logger.info('db disconnected')

                        process.exit(0)
                    })
            }
        })
    })
    .catch(error => {
        Logger.error(error)
    })