import { validateEmail, validatePassword, validateCallback, validateText } from 'validators'
import {  ClientError, ServerError } from 'errors'

const API_URL = process.env.REACT_APP_API_URL

function registerUser(name, email, password, callback) {
    validateText(name)
    validateEmail(email)
    validatePassword(password)
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
            callback(null);
    }

    // request

    xhr.open('POST', `${API_URL}/users`)

    xhr.setRequestHeader('Content-type', 'application/json')

    xhr.send(`{ "name": "${name}", "email": "${email}", "password": "${password}"}`)
}

export default registerUser