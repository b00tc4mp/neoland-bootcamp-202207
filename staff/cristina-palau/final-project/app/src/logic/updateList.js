import { validateCallback, validateText, validateString, validateArray, validateNumber } from 'validators'
import { ClientError, ServerError } from 'errors'

const API_URL = process.env.REACT_APP_API_URL

function updateList(token, listId, title, ingredients, callback) {
     
    validateText(token, listId)
    validateString(title)
    validateArray(ingredients)
    validateCallback(callback)
     
    const xhr = new XMLHttpRequest

    // response
    xhr.onload = function () {
        const status = xhr.status

        if (status >= 500)
            callback(new ServerError(`server error (${status})`))
        else if (status >= 400)
            callback(new ClientError(`client error (${status})`))
        else if (status === 201) {
            callback(null)
        }
    }

    // request

    xhr.open('PATCH', `${API_URL}/lists/${listId}`)

    xhr.setRequestHeader('Content-type', 'application/json')

    xhr.setRequestHeader('Authorization', `Bearer ${token}`)

    const json = JSON.stringify({ title, ingredients })

    xhr.send(json)
}

export default updateList
