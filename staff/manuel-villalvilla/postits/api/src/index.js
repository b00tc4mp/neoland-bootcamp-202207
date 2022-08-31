const express = require('express')
const api = express()
const mongoose = require('mongoose')
const { homeRouter, usersRouter, notesRouter } = require('./routes')
const { logger } = require('./utils');


(async () => {

    await mongoose.connect('mongodb://localhost:27017/postits') // si tiene resolucion negativa, lanza un error y se va

    logger.info('db connected')

    api.use('/api', homeRouter, usersRouter, notesRouter)

    api.listen(8080, () => logger.info('api started'))

    // SIGINT - señal de interrupcion
    process.on('SIGINT', async () => { // similar a eventListener pero de node. SIGINT = CTRL+C
        await mongoose.disconnect()

        logger.info('db disconnected')

        logger.info('api stopped')

        process.exit(0) // para q pare el server, porque ahora yo he tomado el control de CTRL+C
    })

})()