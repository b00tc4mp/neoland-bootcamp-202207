const { runWithErrorHandling } = require('../../utils')
const logger = require('../../logger')(module)
const retrieveNotes = require('../../logic/retrieveNotes')
const { validateToken } = require('../../utils')

function retrieveNotesHandler(req, res){
    runWithErrorHandling(() => {
        const { userId } = await validateToken(req)
        

        return (async () => {
            const notes = await retrieveNotes(userId)
            
            res.json(notes)

            logger.info(`User: ${userId} retrieved notes succesfully`)
        })()
    },res, logger)
}

module.exports = retrieveNotesHandler