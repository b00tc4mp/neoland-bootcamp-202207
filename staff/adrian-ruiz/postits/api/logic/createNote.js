const AuthError = require('errors/src/AuthError')
const { User, Note } = require('../models')

async function createNote(userId, title, text){
    const user = await User.findOne({id: userId})
    debugger
    if(!user) throw new AuthError(`${userId} not found in db`)


    const newNote = new Note({user: userId, title, text})
    
    user.notes.push(newNote)
    debugger
    await user.save()
    
    return 

}

module.exports = createNote