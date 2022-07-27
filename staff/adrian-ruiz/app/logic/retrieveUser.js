/**
 * @throws {TypeError} Error on failed verification inputs
 */

function retrieveUser(token, callback){
    if (typeof callback !== 'function') throw new TypeError('callback is not a function')
    
    
    /* const user = users.find(function(user){
        return user.email === email
    }) */

    const xhr = new XMLHttpRequest

    xhr.onload = function(){

        const status = xhr.status

        if(status >=500)
        callback(new Error(`Server error (${status})`))
        if(status >= 400){
            callback(new Error(`client error (${status})`))
        }else if( status >= 200)
            callback(null,JSON.parse(xhr.response))
    }
    debugger
    xhr.open('GET', `https://b00tc4mp.herokuapp.com/api/v2/users/`)

    xhr.setRequestHeader('Authorization', `Bearer ${token}`)
    xhr.send()

}