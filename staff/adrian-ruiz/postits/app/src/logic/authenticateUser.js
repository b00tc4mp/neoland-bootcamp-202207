import { mailRegex } from "./constants"
import { validateCallback, validateEmail, validatePassword } from "validators"
const API_URL = process.env.REACT_APP_API_URL
/**
 * @param {string} email The user email
 * @param {string} password The user password
 * 
 * @throws {TypeError} Error on failed verification inputs
 */

function authenticateUser(email, password, callback){
    validateEmail(email)
    validatePassword(password)
    validateCallback(callback)
    
    const xhr = new XMLHttpRequest

    xhr.onload = function(){

        const status = xhr.status

        if(status >=500)
            callback(new Error(`Server error (${status})`))
        if(status >= 400){
            console.log(xhr)
            callback(new Error(`Client error (${JSON.parse(xhr.response).error})`))
        }else if( status === 200)
            callback(null, JSON.parse(xhr.response).token)
    }
    
    xhr.open('POST', `${API_URL}/users/auth`)

    xhr.setRequestHeader('Content-type', 'application/json')

    xhr.send(`{"email": "${email}", "password": "${password}"}`)

}

export default authenticateUser