/**
 * @param {string} email The user email
 * @param {string} password The user password
 * 
 * @throws {TypeError} Error on failed verification inputs
 */

function authenticateUser(email, password, callback){
    if (typeof email !== 'string') throw new TypeError('email is not a string')
    if (email.trim().length === 0) throw new Error('email is empty or blank')
    if (!mailRegex.test(email)) throw new Error('Email is not valid')
    if (typeof password !== 'string') throw new TypeError('password is not a string')
    if (password.trim().length === 0) throw new Error('password is empty or blank')
    if (password.length < 8 || password.length > 15) throw new Error('password length is less than 8 characters or more than 15')
    

    if (typeof callback !== 'function') throw new TypeError('callback is not a function')
    
    const xhr = new XMLHttpRequest

    xhr.onload = function(){

        const status = xhr.status

        if(status >=500)
        callback(new Error(`Server error (${status})`))
        if(status >= 400){
            callback(new Error(`client error (${status})`))
        }else if( status >= 200)
            callback(null, JSON.parse(xhr.response).token)
    }
    debugger
    xhr.open('POST','https://b00tc4mp.herokuapp.com/api/v2/users/auth')

    xhr.setRequestHeader('Content-type', 'application/json')

    xhr.send(`{"username": "${email}", "password": "${password}"}`)

}