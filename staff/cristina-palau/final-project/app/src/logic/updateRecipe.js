import { validateCallback, validateText, validateString, validateArray, validateNumber } from 'validators'
import { ClientError, ServerError } from 'errors'

const API_URL = process.env.REACT_APP_API_URL

function updateRecipe(token, recipeId, title, persons, ingredients, callback) {
    debugger
    validateText(token, recipeId)
    validateString(title)
    validateNumber(persons)
    validateArray(ingredients)
    validateCallback(callback)
    debugger
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

    xhr.open('PATCH', `${API_URL}/recipes/${recipeId}`)

    xhr.setRequestHeader('Content-type', 'application/json')

    xhr.setRequestHeader('Authorization', `Bearer ${token}`)

    const json = JSON.stringify({ title, persons, ingredients })

    xhr.send(json)
}

export default updateRecipe
