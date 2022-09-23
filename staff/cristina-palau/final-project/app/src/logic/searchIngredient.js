import { validateCallback, validateText, validateString} from 'validators'
import { AuthError, ClientError, ServerError, UnknownError } from 'errors'

const API_URL = process.env.REACT_APP_API_URL

function searchIngredient(token, query, callback) {
    validateText(token)
    validateString(query, 'query')
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
                callback(null, ingredients.reverse())
                break
            default:
                callback(new UnknownError(`unexpected status ${status}`))

        }
    }

    // request

    xhr.open('GET', `${API_URL}/ingredients/search?q=${query}`)

    xhr.setRequestHeader('Authorization', `Bearer ${token}`)

    xhr.send()
}

export default searchIngredient


