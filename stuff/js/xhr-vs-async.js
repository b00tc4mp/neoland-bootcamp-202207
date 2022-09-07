function registerUser(name, email, password, callback) {
    // TODO validate inputs

    const xhr = new XMLHttpRequest

    // response

    xhr.onload = function() {
        console.log('attend response')
        
        const status = xhr.status

        if (status >= 500)
            callback(new Error(`server error (${status})`))
        else if (status >= 400)
            callback(new Error(`client error (${status})`))
        else if (status === 201) 
            callback(null)            
    }

    // request

    console.log('do request')
    
    xhr.open('POST', 'https://b00tc4mp.herokuapp.com/api/v2/users')

    xhr.setRequestHeader('Content-type', 'application/json')

    xhr.send(`{ "name": "${name}", "username": "${email}", "password": "${password}"}`)
}

registerUser('Pa Jarito', 'pa@jarito2.com', '123123123', () => console.log('register callback attended'))

console.log('hola mundo')

console.log('block 10s')

var before = Date.now()

while(Date.now() - before < 10000); // NOOP

// VM1872:23 do request
// VM1872:34 hola mundo
// VM1872:36 block 10s
// undefined
// VM1872:9 attend response
// VM1872:32 register callback attended