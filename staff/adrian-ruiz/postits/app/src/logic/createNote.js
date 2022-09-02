/**
 * @param {string} title The note title
 * @param {string} text The note text
 * 
 * @throws {TypeError} Error on failed verification inputs
 * @throws {Error} Errors
 */
import { validateText, validateCallback } from "validators"
const API_URL = process.env.REACT_APP_API_URL

function createNote(userToken, title, text, callback) {

    validateCallback(callback)
    validateText(title)
    if (typeof text !== 'string') throw new TypeError(`${text} is not a string`)

    if (!title) {
        callback(new Error('Title is not defined, note not created'))
        return
    }

    const xhr = new XMLHttpRequest

    xhr.onload = function () {

        const status = xhr.status

        if (status >= 500)
            callback(new Error(`Server error (${status})`))
        if (status >= 400) {
            callback(new Error(`Client error (${JSON.parse(xhr.response).error})`))
        } else if (status === 204)
            //TODO CHANGE STATUS TO 201
            callback(null)
    }

    // Creo nueva nota
    const note =
    {
        title: title,
        text: text,
    }

    xhr.open('POST', `${API_URL}/notes`)

    xhr.setRequestHeader('Content-type', 'application/json')
    xhr.setRequestHeader('Authorization', `Bearer ${userToken}`)

    const body = JSON.stringify(note)

    xhr.send(body)
}


export default createNote