import { validateCallback, validateText } from 'validators'
import { ClientError, ServerError, AuthError, UnknownError } from 'errors'
const API_URL = process.env.REACT_APP_API_URL

function retrieveRecipeIngredients(token, recipeId, callback) {
    validateText(token)
    validateCallback(callback)
    debugger
    const xhr = new XMLHttpRequest

    // response
    xhr.onload = function () {

        const status = xhr.status

        const json = xhr.responseText

        const recipeIngredients = JSON.parse(json)
        const { error } = recipeIngredients
        debugger
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
                callback(null, recipeIngredients)
                break
            default:
                callback(new UnknownError(`unexpected status ${status}`))
        }
    }
    debugger
    // request

    xhr.open('GET', `${API_URL}/recipes/${recipeId}/ingredients/`)

    xhr.setRequestHeader('Authorization', `Bearer ${token}`)

    xhr.send()
}

export default retrieveRecipeIngredients


