const { runWithErrorHandling } = require('../../utils')
const logger = require('../../logger')(module)
const deleteNote = require('../../logic/deleteNote')
const {validateToken} = require('../../utils')

function deleteNoteHandler(req, res){
    runWithErrorHandling(async () => {
        const { userId } = await validateToken(req)
        
        const noteId = req.params.noteId
        debugger

        return (async () => {
            await deleteNote(userId, noteId)

            res.status(200).send()

            logger.info(`Note: ${noteId} deleted succesfully`)
        })()
    },res, logger)
}

module.exports = deleteNoteHandler