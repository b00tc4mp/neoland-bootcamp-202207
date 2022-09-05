import { ClientError, ServerError } from 'errors'
import { validateCallback, validateText} from 'validators'

const API_URL = process.env.REACT_APP_API_URL

function createNote(token, callback) {

    validateText(token)
    validateCallback(callback)

    const xhr = new XMLHttpRequest

    // response

    xhr.onload = function () {

        const status = xhr.status

        if (status >= 500)
            callback(new ServerError(`server error (${status})`))
        else if (status >= 400)
            callback(new ClientError(`client error (${status})`))
        else if (status === 201)
            callback(null)

        // request
    }
    xhr.open('POST', `${API_URL}/notes`)

    xhr.setRequestHeader('Authorization', `Bearer ${token}`)

    xhr.setRequestHeader('Content-type', 'application/json')

    const json = JSON.stringify({ text: '' })

    xhr.send(json)
}

export default createNote