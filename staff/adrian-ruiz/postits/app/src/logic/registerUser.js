
/**
 * @param {string} name The user name
 * @param {string} email The user email
 * @param {string} password The user password
 * 
 * @throws {TypeError} Error on failed verification inputs
 */
 import {nameRegex} from "./constants"
 import { validateCallback, validateEmail, validatePassword } from "validators"
 const API_URL = process.env.REACT_APP_API_URL
function registerUser(name, email, password, callback) {
    validateEmail(email)
    validatePassword(password)
    validateCallback(callback)
    if (nameRegex.test(name) === false) throw new Error('\nName does not meet the requirements:\n- Between 1 and 20 characters\n- Exclusively letters\n- No Blanks')


    const xhr = new XMLHttpRequest

    // response
    xhr.onload = function () {

        const status = xhr.status

        if (status >= 500)
            callback(new Error(`Server error (${status})`))
        if (status >= 400) {
            callback(new Error(`${JSON.parse(xhr.response).error}`))
        } else if (status === 201)
            callback(null)
    }

    // request
    xhr.open('POST', `${API_URL}/users`)

    xhr.setRequestHeader('Content-type', 'application/json')

    xhr.send(`{"name": "${name}", "email": "${email}", "password": "${password}"}`)

}

export default registerUser