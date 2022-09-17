const express = require('express')
const cors = require('cors')
const api = express()
const mongoose = require('mongoose')
require('dotenv').config()
const { env: { MONGO_URL, PORT } } = process
const { homeRouter, usersRouter, notesRouter } = require('./routes')
const { logger } = require('./utils')
const { name, version } = require('../package.json');

(async () => {

    await mongoose.connect(MONGO_URL) // si tiene resolucion negativa, lanza un error y se va

    logger.info('db connected')

    api.use(cors())

    // api.use('*', (req, res, next) => { // manu le pone el asterisco al principio
    //     res.setHeader('Access-Control-Allow-Origin', '*')
    //     // con esta linea puedo permitir los metodos q yo quiera (post, get, delete, etc)
    //     res.setHeader('Access-Control-Allow-Methods', '*')
    //     res.setHeader('Access-Control-Allow-Headers', '*')

    //     next()
    // })

    api.use('/api', usersRouter, notesRouter, homeRouter)

    api.listen(PORT, () => logger.info(`${name} v${version} started`))

    // SIGINT - señal de interrupcion
    process.on('SIGINT', async () => { // similar a eventListener pero de node. SIGINT = CTRL+C
        await mongoose.disconnect()

        logger.info('db disconnected')

        logger.info('api stopped')

        process.exit(0) // para q pare el server, porque ahora yo he tomado el control de CTRL+C
    })

})()