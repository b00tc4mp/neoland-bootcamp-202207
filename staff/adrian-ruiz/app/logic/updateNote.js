/**
 * @param {string} token The user token from server
 * @param {string} noteId The note identifier
 * @param {string} title The note title 
 * @param {string} text The note text
 * 
 * @throws {TypeError} Error on failed verification inputs
 */

function updateNote(token, noteId, title, text, callback){
    /* if(regexUserId.test(userId) === false) throw new Error(userId+' does not match ID pattern')
    if(typeof userId !== 'string') throw new Error(userId+ ' is not a string') */
    // TODO -> Token validation
    if(!(callback instanceof Function)) throw new Error(callback +' is not a function')
    if(regexNoteId.test(noteId) === false) throw new Error(noteId+' does not match ID pattern')
    if(typeof noteId !== 'string') throw new Error(noteId + ' is not a string')
    if(typeof text !== 'string') throw new Error(text + ' is not a string')
    if(typeof title !== 'string') throw new Error(`${title} is not a string`)
    if(title.trim().length === 0) throw new Error('Title can\'t be empty')
    
    const xhr = new XMLHttpRequest

    xhr.onload = function () {
        const status = xhr.status

        if(status >= 500)
            callback(new Error(`server error (${status})`))
        else if (status >= 400)
            callback(new Error(`client error (${status})`))
        else if (status === 200){
            const data = JSON.parse(xhr.response)
            const notes = data.notes

            const note = notes.find(note => note.id === noteId)

            note.text = text
            note.title = title
            const xhr2 = new XMLHttpRequest

            xhr2.onload = function () {
                const status = xhr2.status

                if (status >= 500)
                    callback(new Error(`server error (${status})`))
                else if (status >= 400)
                    callback(new Error(`client error (${status})`))
                else if (status === 204)
                    callback(null)
            }

            xhr2.open('PATCH','https://b00tc4mp.herokuapp.com/api/v2/users')

            xhr2.setRequestHeader('Authorization', `Bearer ${token}`)
            xhr2.setRequestHeader('Content-type', 'application/json')

            const newData = JSON.stringify({notes: notes})

            xhr2.send(newData)
        }
    }

    xhr.open('GET','https://b00tc4mp.herokuapp.com/api/v2/users' )

    xhr.setRequestHeader('Authorization', `Bearer ${token}`)

    xhr.send()
}
