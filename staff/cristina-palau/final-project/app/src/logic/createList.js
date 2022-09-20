import { validateCallback, validateText, validateString, validateArray } from 'validators'
import { ClientError, ServerError } from 'errors'


const API_URL = process.env.REACT_APP_API_URL

function createList(token, title, ingredients, callback) {
     
    validateText(token)
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

    xhr.open('POST', `${API_URL}/lists/`)

    xhr.setRequestHeader('Content-type', 'application/json')

    xhr.setRequestHeader('Authorization', `Bearer ${token}`)

    const json = JSON.stringify({ title, ingredients })

    xhr.send(json)
}

export default createList
