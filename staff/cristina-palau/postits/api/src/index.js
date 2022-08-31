const { connect, disconnect } = require('mongoose')
const logger = require('./utils/createLogger')(module);

    (async () => {
        await connect('mongodb://127.0.0.1:27017/postits')

        logger.info('db connected')
        
        const express = require('express')

        const api = express()
        
        const { usersRouter, notesRouter } = require('./routes')
        
        api.use('/api', usersRouter, notesRouter)

        api.listen(8080, () => logger.info('api started'))

        process.on('SIGINT', async () => {
            if (!process.stopped) {
                process.stopped = true

                logger.info('api stopped')

                await disconnect()
                logger.info('db disconnected')
                process.exit(0)

            }
        })
    })()