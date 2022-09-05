import { validateCallback } from 'validators'
import { ClientError, ServerError } from 'errors'
import {validateString, validateText} from 'validators'

const API_URL = process.env.REACT_APP_API_URL

function updateNoteText(token, noteId, text, callback) {
    validateText(token, noteId)
    validateString(text)
    validateCallback(callback)

    const xhr = new XMLHttpRequest

    xhr.onload = function () {
        const status = xhr.status

        if (status >= 500)
            callback(new ServerError(`server error (${status})`))
        else if (status >= 400)
            callback(new ClientError(`client error (${status})`))
        else if (status === 204)
            callback(null)
    }

    // request

    xhr.open('PATCH', `${API_URL}/notes/${noteId}`)

    xhr.setRequestHeader('Authorization', `Bearer ${token}`)
    xhr.setRequestHeader('Content-type', 'application/json')

    //const json2 = JSON.stringify({ notes: notes })
    const json = JSON.stringify({ text })

    xhr.send(json)
}

export default updateNoteText