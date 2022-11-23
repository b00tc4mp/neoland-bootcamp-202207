import { validateEmail, validatePassword, validateCallback } from 'validators'
//import { validateEmail, validatePassword, validateCallback } from 'validators'
import { AuthError, ClientError, ServerError, UnknownError } from 'errors'
const API_URL = process.env.REACT_APP_API_URL

/*  aqui precisamente se mete la logica del main, 
que toda la logica de negocios se dirija en este
sector */

    /** 
 * Checks user credentials against database
 * 
 * @param {string} email The user email
 * @param {string} password The user password
 * @param {function} callback The function expression that provides a result
 * 
 * @throws {FormatError | TypeError} On invalid inputs
 */
function authenticateUser(email, password, callback) {
    validateEmail(email)
    validatePassword(password)
    validateCallback(callback)
        //todo validate inputs
      
        const xhr = new XMLHttpRequest
        // response
        xhr.onload = function(){
            const status = xhr.status

            const json = xhr.responseText

            const { error, token } = JSON.parse(json)
// -----------------------errores de cliente -------------
            switch(true) {
                case (status >= 500):
                    callback(new ServerError(error))// ---> error de servidor.. 
                    break
                case (status === 401):
                    callback(new AuthError(error))// -----> errores de autenticazion 
                    break
                case (status >= 400): 
                    callback(new ClientError(error)) // ----> error de cliente
                    break
                case (status === 200):
                    callback(null, token)
                    break
                default:
                    callback(new UnknownError(`unexpected status ${status}`))
            }
        }
    
        xhr.onerror = function() {
            callback(new ServerError('connection failed'))
        }
    
        xhr.open('POST',`${API_URL}/users/auth`)
        
        xhr.setRequestHeader('Content-type','application/json')
        
        xhr.send(`{"email":"${email}", "password": "${password}"}`)
    }
                
     export default authenticateUser
   
    