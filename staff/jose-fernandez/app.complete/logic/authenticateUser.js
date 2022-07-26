function authenticateUser(email, password, callback) {
    //TODO validate inputs
    const xhr=new XMLHttpRequest

    //
    xhr.onload=function(){
        const status= xhr.status

        
        if (status >= 500)
            callback(new Error(`server error(${status})`))
        else if (status >= 400)
            callback(new Error(`client error(${status})`))
        else if (status === 200){
            //recibo un JSON en la propiedad responseText del XHR
            const tokenJson = xhr.responseText
            
            //Parseo el JSON a JS
            const tokenObject=JSON.parse(tokenJson)
            
            //Accedoa a la propiedad token del objeto
            const token =tokenObject.token

            //llamo a callback con null, en el parametro  de manejo de errores
            callback(null,token)
        }
    }
    
    //el metodo open es para crear una conexion con el servidor remoto(iniciarlizar la conexion) 
    xhr.open('POST', 'https://b00tc4mp.herokuapp.com/api/v2/users/auth')

    //el metodo setRequestHeader establece el valor de un encabezado de solicitud HTTP. Debe llamar después de open(), pero antes de send().setRequestHeader()
    xhr.setRequestHeader('Content-type', 'application/json')

    //el metodo send es para el envio de la solicitud al servidor
    xhr.send(`{"username": "${email}","password": "${password}"}`)
}

authenticateUser( "jose@fer.com", "123123123", console.log)

//que la callback del authenticate llame al retrieveUser