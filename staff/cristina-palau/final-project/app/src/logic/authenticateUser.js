import { validateEmail, validatePassword, validateCallback } from 'validators'
import { AuthError, ClientError, ServerError } from 'errors'

const API_URL = process.env.REACT_APP_API_URL

function authenticateUser(email, password, callback) {
    validateEmail(email)
    validatePassword(password)
    validateCallback(callback)

    const xhr = new XMLHttpRequest

    xhr.onload = function () {
        const status = xhr.status

        const json = xhr.responseText
        const { error, token } = JSON.parse(json)

        if (status >= 500)
            callback(new ServerError(error))
        else if (status === 401)
            callback(new AuthError(error))
        else if (status >= 400)
            callback(new ClientError(error))
        else if (status === 200)
            callback(null, token)
    }


    xhr.open('POST', `${API_URL}/users/auth`)

    xhr.setRequestHeader('Content-type', 'application/json')

    xhr.send(`{ "email": "${email}", "password": "${password}" }`)
}

export default authenticateUser