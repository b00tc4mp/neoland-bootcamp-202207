function registerUser(name, email, password, callback) {
    // TODO validate inputs

    const xhr = new XMLHttpRequest

    // response

    xhr.onload = function() {
        const status = xhr.status

        if (status >= 500)
            callback(new Error(`server error (${status})`))
        else if (status >= 400)
            callback(new Error(`client error (${status})`))
        else if (status === 201) 
            callback(null)            
    }

    // request
    
    xhr.open('POST', 'https://b00tc4mp.herokuapp.com/api/v2/users')

    xhr.setRequestHeader('Content-type', 'application/json')

    xhr.send(`{ "name": "${name}", "username": "${email}", "password": "${password}"}`)
}