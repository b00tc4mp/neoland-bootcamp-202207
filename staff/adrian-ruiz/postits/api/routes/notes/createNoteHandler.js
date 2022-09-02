const { runWithErrorHandling } = require('../../utils')
const logger = require('../../logger')(module)
const createNote = require('../../logic/createNote')
const {validateToken} = require('../../utils')

function createNoteHandler(req, res){
    runWithErrorHandling( async () => {
        const { userId } = await validateToken(req)

        const { body: { title, text = '' } } = req

        return (async () => {
            const noteId = await createNote(userId, title, text)
            // TODO CHANGE TO 201 AND RETURN NOTE
            res.status(204).send()

            logger.info(`Note: ${noteId} created succesfully`)
        })()
    },res, logger)
}

module.exports = createNoteHandler