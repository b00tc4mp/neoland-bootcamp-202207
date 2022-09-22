const { runWithErrorHandling } = require('../../utils')
const logger = require('../../logger')(module)
const updateNote = require('../../logic/updateNote')
const { validateToken } = require('../../utils')

function updateNoteHandler(req, res){
    runWithErrorHandling(async () => {
        const { userId } = await validateToken(req)
        
        const { body: { title, text, color, visibility }} = req
        const noteId = req.params.noteId
        debugger

        return (async () => {
            await updateNote({userId, noteId, title, text, color, visibility})

            res.status(204).send()

            logger.info(`Note: ${noteId} updated succesfully`)
        })()
    },res, logger)
}

module.exports = updateNoteHandler