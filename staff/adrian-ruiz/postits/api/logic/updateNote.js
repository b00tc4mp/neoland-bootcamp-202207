//TODO updateNote(userId, noteId, text, title, visibility )
const { User, Note } = require('../models')
const { NotFoundError, AuthError, BadRequestError } = require('errors')

function updateNote({userId, noteId, title, text, color, visibility}){
    // TODO VALIDATE INPUTS
    
    if(title === undefined && text === undefined && visibility === undefined && color === undefined ) throw new BadRequestError('Server can\'t process the request')

    return (async() => {
        
        const user = await User.findById(userId)

        if(!user) throw new NotFoundError(`User with id ${userId} not found`)
    
        const note = await Note.findOneAndUpdate({user: userId, _id: noteId}, {text, title, visibility, color, modifiedAt: new Date()})
        
        if(!note) throw new AuthError(`Note with id ${noteId} does not belong to user ${userId} and/or does not exists`)
        return
    })()
}

module.exports = updateNote