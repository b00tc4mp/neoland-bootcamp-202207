const { NotFoundError, NotFoundError404 } = require('errors')
const { validateText } = require('validators')
const { User, Note } = require('../models')

function createNote(userId, title, text = ''){

    //TODO VALIDATE INPUTS
    validateText(title, 'Title')
    if (typeof text !== 'string') throw new TypeError(`Text is not a string`)

    return (async() => {
        const user = await User.findById(userId).lean()
    
        if(!user) throw new NotFoundError404(`${userId} not found in db`)
    
        const note = await Note.create({user: user._id, title, text})
        
        return note.id
    })()
}

module.exports = createNote