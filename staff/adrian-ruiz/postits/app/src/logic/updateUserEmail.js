import {mailRegex} from "./constants"
import { validateCallback, validateEmail } from "validators"
import { ServerError } from "errors"

const API_URL = process.env.REACT_APP_API_URL

function updateUserEmail (token, newEmail, callback){
    validateEmail(newEmail)
    validateCallback(callback)

    const xhr = new XMLHttpRequest

    xhr.onload = function(){
        const status = xhr.status
        if(status >= 500)
            callback(new Error(`Server error (${status})`))
        if(status >=400)
            callback(new Error(`Client error (${JSON.parse(xhr.response).error})`))
        if(status === 204)
            callback(null)
    }

    xhr.onerror = function (){
        callback(new ServerError('Connection failed'))
    }

    xhr.open('PATCH',`${API_URL}/users/updateEmail`)

    xhr.setRequestHeader('Content-type', 'application/json')
    xhr.setRequestHeader('Authorization', `Bearer ${token}`)

    const newData = {
        email: newEmail,
    }
    xhr.send(JSON.stringify(newData))
}

export default updateUserEmail