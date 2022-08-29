const express = require('express')
const mongoose = require('mongoose')
const { RegexError, AuthError, NotFoundError ,DuplicityError, FormatError } = require('errors')
const {sign, verify, JsonWebTokenError, TokenExpiredError, NotBeforeError} = require('jsonwebtoken')
const logger = require('./logger')(module)
const authenticateUser = require('./logic/authenticateUser')
const retrieveUser = require('./logic/retrieveUser')
const registerUser = require('./logic/registerUser');


(async () => {

    await mongoose.connect('mongodb://localhost:27017/postits')

    logger.info('Connected to db: mongodb://localhost:27017/postits')

    const api = express()

    const jsonBodyParser = express.json()

    api.post('/api/users', jsonBodyParser, async (req, res) => {
        try {

            const { body: { name, email, password } } = req

            await registerUser(name, email, password)

            res.status(201).send()
            logger.info(`User: ${email} registered succesfully`)

        } catch (error) {
            debugger
            if (error instanceof DuplicityError)
                res.status(409).json({ error: error.message })
            else if (error instanceof TypeError || error instanceof FormatError || error instanceof RegexError)
                res.status(400).json({ error: error.message })
            else res.status(500).json({ error: 'System error' })

            logger.error(error)
        }
    })

    api.post('/api/users/auth', jsonBodyParser, async (req, res) => {
        try {

            const { body: { email, password } } = req

            const userId = await authenticateUser(email, password)

            const token = sign({sub: userId}, 'ImagineLosingTimeToHackThis', {expiresIn: '15s'})

            res.status(200).json({ token })
            logger.info(`User: ${userId} authenticated succesfully`)

        } catch (error) {
            if (error instanceof AuthError || error instanceof NotFoundError)
                res.status(401).json({ error: error.message })
            else if (error instanceof TypeError || error instanceof FormatError || error instanceof RegexError)
                res.status(400).json({ error: error.message })
            else res.status(500).json({ error: 'System error' })

            logger.error(error)
        }
    })

    api.get('/api/users', (req, res) => {

        try{
            
            const {headers: {authorization} } = req

            const token = authorization.substring(7)
            const payload = verify(token, 'ImagineLosingTimeToHackThis')
    
            const userId = payload.sub
    
            // 
            return (async () => {
                const user = await retrieveUser(userId)
                
                res.json({name: user.name, email: user.email, notes: user.notes})

                logger.info(`User: ${user} retrieved succesfully`)
            })()

        }catch(error){
            // TODO CHECK TOKEN ERRORS AND LOGIC ERRORS
            if(error instanceof NotFoundError)
                res.status(401).json({error: error.message})
            else if(error instanceof JsonWebTokenError || error instanceof TokenExpiredError || error instanceof NotBeforeError)
                res.status(401).json({error: 'Token not valid'})
            else
                res.status(500).json({error: 'System error'})

            logger.error(error)
        }
       
    })

    api.listen(8080, () => { logger.info('api started') })

    process.on('SIGINT', async () => { // similar a eventListener pero de node. SIGINT = CTRL+C         
        await mongoose.disconnect()
        logger.info('db disconnected')
        process.exit(0) // para q pare el server     
    })
})()


