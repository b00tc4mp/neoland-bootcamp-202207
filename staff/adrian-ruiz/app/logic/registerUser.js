/**
 * @param {string} name The user name
 * @param {string} email The user email
 * @param {string} password The user password
 * 
 * @throws {TypeError} Error on failed verification inputs
 */
function registerUser(name, email, password, callback){
    
    if(nameRegex.test(name) === false) throw new Error ('\nName does not meet the requirements:\n- Between 1 and 20 characters\n- Exclusively letters\n- No Blanks')
    if (typeof email !== 'string') throw new TypeError('email is not string')
    if (email.trim().length === 0) throw new Error('email is empty or blank')
    if (!mailRegex.test(email)) throw new Error('Email is not valid')

    if(!(password.match(requiredPass))) throw new Error('\nPassword does not meet the requirements: \n- Between 8 and 15 characters\n- At least 1 capital letter\n- At least 1 lowercase letter\n- At least 1 symbol')

    if (typeof callback !== 'function') throw new TypeError('callback is not a function')

    const xhr = new XMLHttpRequest

    // response
    xhr.onload = function() {
        
        const status = xhr.status

        if(status >=500)
            callback(new Error(`Server error (${status})`))
        if(status >= 400){
            callback(new Error(`client error (${status})`))
        }else if( status >= 200)
            callback(null)
    }
    
    // request
    xhr.open('POST', 'https://b00tc4mp.herokuapp.com/api/v2/users')

    xhr.setRequestHeader('Content-type', 'application/json')

    xhr.send(`{"name": "${name}", "username": "${email}", "password": "${password}","userID": "${Date.now()}"}`)

}