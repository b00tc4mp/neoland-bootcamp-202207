import { validateText, validateCallbacks } from 'validators'
import { ClientError, ServerError } from 'errors'

/**
 * Deletes a note from database
 * 
 * @param {string} token The user session token
 * @param {string} noteId The note identifier
 * @param {function} callback The function expression that provides a result
 * 
 * @throws {TypeError} On invalid inputs
 */

const API_URL = process.env.REACT_APP_API_URL

function deleteNote(token, noteId, callback) {
    validateText(token, noteId)
    validateCallbacks(callback)


    const xhr = new XMLHttpRequest();

    // response
    xhr.onload = function () {
        const status = xhr.status

        if(status >= 500)
            callback(new ServerError(`server error (${status})`))
        else if (status >= 400)
            callback(new ClientError(`client error (${status})`))
        else if (status >= 204)
            callback(null)
        }

    // request
    xhr.open('DELETE', `${API_URL}/notes/${noteId}`)

    xhr.setRequestHeader('Authorization', `Bearer ${token}`)
    xhr.setRequestHeader('Content-Type', 'application/json')

    xhr.send()
}

export default deleteNote



// if (status >= 500)
// callback(new Error(`server error (${status})`))
// else if (status >= 400)
// callback(new Error(`client error (${status})`))
// else if (status === 200) {

// const json = xhr.responseText

// const data = JSON.parse(json)

// const notes = data.notes ? data.notes : []

// const noteIndex = notes.findIndex(note => note.id === noteId)

// if (noteIndex < 0) {
//     callback(new Error(`note with id ${noteId} not found`))

//     return
// }

// notes.splice(noteIndex, 1)

// const xhr2 = new XMLHttpRequest

// // response
// xhr2.onload = function () {
//     const status = xhr2.status

//     if (status >= 500)
//         callback(new Error(`server error (${status})`))
//     else if (status >= 400)
//         callback(new Error(`client error (${status})`))
//     else if (status === 204)
//         callback(null)
// }

// // request

// xhr2.open('DELETE', `${API_URL}/notes/${noteId}`)

// xhr2.setRequestHeader('Authorization', `Bearer ${token}`)
// xhr2.setRequestHeader('Content-type', 'application/json')

// //const json2 = JSON.stringify({ notes: notes })
// const json2 = JSON.stringify({ notes })

// xhr2.send(json2)
// }