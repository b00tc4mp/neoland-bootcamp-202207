/**
 * Deletes a note from database
 * 
 * @param {string} userId The user identifier
 * @param {string} noteId The note identifier
 * @param {funcion} callbback The function expression that provides a result
 *
 * @throws {TypeError} On invalid inputs
 */

function deleteNote(token, noteId, callback) {

    if (typeof token !== 'string') throw new TypeError('user id is not a string')
    if (token.trim().length === 0) throw new Error('user id is empty or blank')
    if (typeof noteId !== 'string') throw new TypeError('note id is not a string')
    if (noteId.trim().length === 0) throw new Error('note id is empty or blank')

    if (typeof callback !== 'function') throw new TypeError('callback is not a function')

    const xhr = new XMLHttpRequest

    // response

    xhr.onload = function () {
        const status = xhr.status

        if (status >= 500)
            callback(new Error(`server error (${status})`))
        else if (status >= 400)
            callback(new Error(`client error (${status})`))
        else if (status === 200) {

            const json = xhr.responseText

            const user = JSON.parse(json)

            if (!user.notes || user.notes.length === 0) callback(new Error(`note with id ${noteId} not found`))
            
            const notes = user.notes

        
            const noteIndex = notes.findIndex(note =>
            note.id === noteId)

            if (noteIndex === -1) callback(new Error(`note with id ${noteId} not found`))
           
            notes.splice(noteIndex, 1)

            const xhr2 = new XMLHttpRequest

            // response

            xhr2.onload = function () {
                const status = xhr2.status

                if (status >= 500)
                    callback(new Error(`server error (${status})`))
                else if (status >= 400)
                    callback(new Error(`client error (${status})`))
                else if (status === 204)
                    callback(null)
            }

            // request

            xhr2.open('PATCH', 'https://b00tc4mp.herokuapp.com/api/v2/users')

            xhr2.setRequestHeader('Authorization', `Bearer ${token}`)
            xhr2.setRequestHeader('Content-type', 'application/json')

            //const json2 = JSON.stringify({ notes: notes })
            const json2 = JSON.stringify({ notes })

            xhr2.send(json2)
        }
    }

    // request

    xhr.open('GET', 'https://b00tc4mp.herokuapp.com/api/v2/users')

    xhr.setRequestHeader('Authorization', `Bearer ${token}`)

    xhr.send()
}
