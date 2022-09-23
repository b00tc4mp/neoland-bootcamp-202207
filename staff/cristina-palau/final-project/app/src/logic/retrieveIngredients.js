import { validateCallback, validateText, validateString } from 'validators'
import { ClientError, ServerError, AuthError, UnknownError } from 'errors'
const API_URL = process.env.REACT_APP_API_URL

function retrieveIngredients(token, callback) {
    validateText(token)
    validateCallback(callback)

    const xhr = new XMLHttpRequest

    // response
    xhr.onload = function () {

        const status = xhr.status

        const json = xhr.responseText

        const ingredients = JSON.parse(json)
        const { error } = ingredients
        
        switch (true) {
            case (status >= 500):
                callback(new ServerError(error))
                break
            case (status === 401):
                callback(new AuthError(error))
                break
            case (status >= 400):
                callback(new ClientError(error))
                break
            case (status === 200):
                callback(null, ingredients) //[]
                break
            default:
                callback(new UnknownError(`unexpected status ${status}`))
        }
    }

    // request

    xhr.open('GET', `${API_URL}/ingredients/`)

    xhr.setRequestHeader('Authorization', `Bearer ${token}`)

    xhr.send()
}

export default retrieveIngredients


