/**
 * @throws {TypeError} Error on failed verification inputs
 */
 import { validateCallback } from "validators"
 const API_URL = process.env.REACT_APP_API_URL

function retrieveUser(token, callback){
    // TODO token validation (regex?)
    if(token.trim().length === 0) throw new Error('Token is empty or blank')
    if(typeof token !=='string') throw new Error('Token is not a string')
    validateCallback(callback)
    
    const xhr = new XMLHttpRequest

    xhr.onload = function(){

        const status = xhr.status

        if(status >=500)
        callback(new Error(`Server error (${status})`))
        if(status >= 400){
            callback(new Error(`Client error (${JSON.parse(xhr.response).error})`))
        }else if( status === 200){
            const data = JSON.parse(xhr.response)
            const user = {
                name: data.name,
                email: data.email
            }
            callback(null,user)
        }
            
    }
    
    xhr.open('GET', `${API_URL}/users`)

    xhr.setRequestHeader('Authorization', `Bearer ${token}`)
    xhr.send()

}

export default retrieveUser