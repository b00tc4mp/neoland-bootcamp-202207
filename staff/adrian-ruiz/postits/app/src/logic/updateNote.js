/**
 * @param {string} token The user token from server
 * @param {string} noteId The note identifier
 * @param {string} title The note title 
 * @param {string} text The note text
 * 
 * @throws {TypeError} Error on failed verification inputs
 */
 import { validateCallback, validateString, validateText } from "validators"

const API_URL = process.env.REACT_APP_API_URL
function updateNote(token, noteId, title, text, callback) {
    //TODO -> Implement VISIBILITY
    validateCallback(callback)
    validateString(noteId)
    validateText(title)
    validateString(text)


    const xhr = new XMLHttpRequest

    xhr.onload = function () {
        const status = xhr.status

        if (status >= 500)
            callback(new Error(`server error (${status})`))
        else if (status >= 400)
            callback(new Error(`Client error (${JSON.parse(xhr.response).error})`))
        else if (status === 204)
            callback(null)
    }

    xhr.open('PATCH', `${API_URL}/notes/${noteId}`)

    xhr.setRequestHeader('Authorization', `Bearer ${token}`)
    xhr.setRequestHeader('Content-type', 'application/json')

    const newData = {
        title,
        text,
    }

    xhr.send(JSON.stringify(newData))
}



export default updateNote