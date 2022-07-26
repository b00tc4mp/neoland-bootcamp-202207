function registerUser(name, email, password, callback) {
    // TODO validate inputs


    //XMLHttpRequest nos permite hacer peticiones a un servidor web y obtener las respuestas que este envia
    const xhr = new XMLHttpRequest

    //response

    //el metodo onload se lanza cuando una transacción XMLHttpRequest se completa con éxito
    xhr.onload = function () {
        const status = xhr.status

        if (status >= 500)
            callback(new Error(`server error(${status})`))
        else if (status >= 400)
            callback(new Error(`client error(${status})`))
        else if (status === 201)
            callback(null)
    }

    xhr.onerror = function () {
        console.log('API CALL FAIL')
    }

    //request

    //el metodo open es para crear una conexion con el servidor remoto(iniciarlizar la conexion) 
    xhr.open('POST', 'https://b00tc4mp.herokuapp.com/api/v2/users')

    //el metodo setRequestHeader establece el valor de un encabezado de solicitud HTTP. Debe llamar después de open(), pero antes de send().setRequestHeader()
    xhr.setRequestHeader('Content-type', 'application/json')

    //el metodo send es para el envio de la solicitud al servidor
    xhr.send(`{"name": "${name}","username": "${email}","password": "${password}"}`)
}

registerUser("jose fer", "jose@fer.com", "123123123", console.log)