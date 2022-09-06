import { validateEmail, validateText, validateCallback } from 'validators'
const API_URL = process.env.REACT_APP_API_URL

function updateEmail(token, newEmail, callback) {
    validateText(token)
    validateEmail(newEmail)
    validateCallback(callback)

    const xhr = new XMLHttpRequest
    // response

    xhr.onload = function () {
        const status = xhr.status

        if (status >= 500)
            callback(new Error(`server error (${status})`))
        else if (status >= 400)
            callback(new Error(`client error (${status})`))
        else if (status === 204)
            callback(null)
    }

    // request

    xhr.open('PATCH', `${API_URL}/users`)

    xhr.setRequestHeader('Authorization', `Bearer ${token}`)
    xhr.setRequestHeader('Content-type', 'application/json')

    //const json2 = JSON.stringify({ notes: notes })
    xhr.send(`{ "newEmail": "${newEmail}"}`)

}


export default updateEmail