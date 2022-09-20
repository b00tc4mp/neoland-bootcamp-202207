import {  validateText, validateCallback } from 'validators'
import {  ClientError, ServerError } from 'errors'

const API_URL = process.env.REACT_APP_API_URL

function deleteList(token, listId, callback) {

    validateText(token, listId)
    validateCallback(callback)

    const xhr = new XMLHttpRequest

    // response

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

    xhr.open('DELETE', `${API_URL}/lists/${listId}`)

    xhr.setRequestHeader('Authorization', `Bearer ${token}`)
    xhr.setRequestHeader('Content-type', 'application/json')

    xhr.send()
}


export default deleteList