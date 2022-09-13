import { validateCallback, validateText, validateString, validateArray, validateNumber } from 'validators'
import { ClientError, ServerError } from 'errors'


const API_URL = process.env.REACT_APP_API_URL

function createRecipe(token, title, persons, ingredients, callback) {
    validateText(token)
    validateString(title)
    validateNumber(persons)
    validateArray(ingredients)
    validateCallback(callback)

    const xhr = new XMLHttpRequest

    // response

    xhr.onload = function () {
        const status = xhr.status

        if (status >= 500)
            callback(new ServerError(`server error (${status})`))
        else if (status >= 400)
            callback(new ClientError(`client error (${status})`))
        else if (status === 201) {
            callback(null)
        }
    }

    // request

    xhr.open('POST', `${API_URL}/recipes/`)

    xhr.setRequestHeader('Authorization', `Bearer ${token}`)

    xhr.send(`{"token": ${token}, "title": ${title}, "persons: ${persons}, "ingredients": ${[ingredients]}}`)
}

export default createRecipe
