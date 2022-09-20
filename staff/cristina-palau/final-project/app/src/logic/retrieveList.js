import { validateCallback, validateText } from 'validators'
import { ClientError, ServerError } from 'errors'

const API_URL = process.env.REACT_APP_API_URL

function retrieveList(token, listId, callback) {
    validateText(token)
    validateText(listId)
    validateCallback(callback)

    const xhr = new XMLHttpRequest

    // response

    xhr.onload = function () {
        const status = xhr.status

        if (status >= 500)
            callback(new ServerError(`server error (${status})`))
        else if (status >= 400)
            callback(new ClientError(`client error (${status})`))
        else if (status === 200) {

            const json = xhr.responseText

            const list = JSON.parse(json)

            callback(null, list)
        }
    }

    // request

    xhr.open('GET', `${API_URL}/lists/${listId}`)

    xhr.setRequestHeader('Authorization', `Bearer ${token}`)

    xhr.send()
}

export default retrieveList