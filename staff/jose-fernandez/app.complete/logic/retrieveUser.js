function retrieveUser(token, callback) {
        // TODO validate inputs

        // const token = token.find(function (token) {
        //     return token === email
        // }

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
        else if (status === 200)
        debugger;
            callback(null)
    }

    //request

    //el metodo open es para crear una conexion con el servidor remoto(iniciarlizar la conexion) 
    xhr.open('GET', 'https://b00tc4mp.herokuapp.com/api/v2/users')

    //el metodo setRequestHeader establece el valor de un encabezado de solicitud HTTP. Debe llamar después de open(), pero antes de send().setRequestHeader()
    xhr.setRequestHeader('Authorization', `bearer ${token}` )

    //el metodo send es para el envio de la solicitud al servidor
    xhr.send()
}
