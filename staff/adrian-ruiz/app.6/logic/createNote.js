/**
 * @param {string} userId The user identifier
 * @param {string} title The note title
 * @param {string} text The note text
 * 
 * @throws {TypeError} Error on failed verification inputs
 * @throws {Error} Errors
 */

function createNote(userId, title, text, callback){
    if(regexUserId.test(userId) === false) throw new Error(userId+' does not match ID pattern')
    if(typeof userId !== 'string') throw new TypeError(userId+ ' is not a string')
    if(!(callback instanceof Function)) throw new TypeError(callback +' is not a function')
    if(title.trim().length === 0) throw new Error('Title is empty or blank')
    if(typeof title !== 'string') throw new TypeError(`${title} is not a string`)
    if(typeof text !== 'string') throw new TypeError(`${text} is not a string`)
    
    // UPDATE CREATE NOTE SPECS FOR TITLE AND TEXT NEW FUNCTIONS
    
    const user = users.find(user => {
        return user.id === userId
    })

    if(!user){
        callback(new Error('User with id ' + userId + ' not found'))
        return
    }
    if(!title){
        callback(new Error('Title is not defined, note not created'))
        return
    }
    const note = {
        id:'note-'+Date.now(),
        title: title,
        text: text,
        user: userId
    }

    notes.push(note)

    callback(null)
}