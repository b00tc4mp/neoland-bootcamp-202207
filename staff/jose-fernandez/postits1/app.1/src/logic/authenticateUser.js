import { EMAIL_REGEX } from './constants'

function authenticateUser(email, password, callback) {
    //TODO validate inputs
    if (typeof email !== 'string') throw new TypeError('email is not a string')
    if (email.trim().length === 0) throw new Error('email is empty or blank')
    if (email.length < 6) throw new Error('email length is not valid')
    if (!EMAIL_REGEX.test(email)) throw new Error('email is not valid')

    if (typeof password !== 'string') throw new TypeError('password is not a string')
    if (password.trim().length === 0) throw new Error('password is empty or blank')
    if (password.length < 8) throw new Error('password length is less than 8 characters')

    if (typeof callback !== 'function') throw new TypeError('callback is not a function')


    const xhr = new XMLHttpRequest

    //response
    xhr.onload = function () {
        const status = xhr.status


        if (status >= 500)
            callback(new Error(`server error(${status})`))
        else if (status >= 400)
            callback(new Error(`client error Auth(${status})`))
        else if (status === 200) {
            //recibo un JSON en la propiedad responseText del XHR
            const json = xhr.responseText

            //Parseo el JSON a JS
            const data = JSON.parse(json)

            //Accedoa a la propiedad token del objeto
            const token = data.token

            //llamo a callback con null, en el parametro  de manejo de errores
            callback(null, token)
        }
    }

    //request

    //el metodo open es para crear una conexion con el servidor remoto(iniciarlizar la conexion) 
    xhr.open('POST', 'https://b00tc4mp.herokuapp.com/api/v2/users/auth')

    //el metodo setRequestHeader establece el valor de un encabezado de solicitud HTTP. Debe llamar después de open(), pero antes de send().setRequestHeader()
    xhr.setRequestHeader('Content-type', 'application/json')

    //el metodo send es para el envio de la solicitud al servidor
    xhr.send(`{"username": "${email}","password": "${password}"}`)
}

// export default authenticateUser
module.exports = authenticateUser