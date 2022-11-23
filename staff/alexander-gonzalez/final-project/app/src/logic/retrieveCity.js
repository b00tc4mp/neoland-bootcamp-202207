import { validateText, validateCallback} from 'validators'
import { AuthError, ClientError, ServerError, UnknownError } from 'errors'

const API_URL = process.env.REACT_APP_API_URL

function retrieveCity(token, cityId, callback) {
    
  validateText(token, 'token')
  validateCallback(callback)

  const xhr = new XMLHttpRequest();
  // response
  xhr.onload = function () {
    const status = xhr.status;
    const json = xhr.responseText;
    const city = JSON.parse(json)
    const { error } = city

    switch(true) {
      case (status >= 500):
          callback(new ServerError(error))// ---> error de servidor.. 
          break
      case (status === 401):
          callback(new AuthError(error))// -----> errores de autenticacion 
          break
      case (status >= 400): 
          callback(new ClientError(error)) // ----> error de cliente
          break
      case (status === 200):
             callback(null, city)

          break
      default:
          callback(new UnknownError(`unexpected status ${status}`))
  }

  };
  // request

  xhr.open("GET", `${API_URL}/cities/${cityId}`);

  xhr.setRequestHeader("Authorization", `Bearer ${token}`);

  xhr.send();
}

export default retrieveCity