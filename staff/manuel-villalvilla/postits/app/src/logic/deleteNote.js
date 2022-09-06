const API_URL = process.env.REACT_APP_API_URL

/**
 * Deletes a note from database
 * 
 * @param {string} userId The user identifier
 * @param {string} noteId The note identifier
 * @param {function} callback The function expression that provides a result
 * 
 * @throws {TypeError} On invalid inputs
 */
 function deleteNote(token, noteId, callback) {
    if (typeof token !== 'string') throw new TypeError('token is not a string')
    if (token.trim().length === 0) throw new Error('token is empty or blank')

    if (typeof noteId !== 'string') throw new TypeError('note id is not a string')
    if (noteId.trim().length === 0) throw new Error('note id is empty or blank')

    if (typeof callback !== 'function') throw new TypeError('callback is not a function')

    const xhr = new XMLHttpRequest

    // response

    xhr.onload = function () {
        const status = xhr.status

        if (status >= 500)
            callback(new Error(`server error (${status})`))
        else if (status >= 400)
            callback(new Error(`client error (${status})`))
        else if (status === 204) {
            callback(null)
        }
    }

    // request

    xhr.open('DELETE', `${API_URL}/notes/${noteId}`)

    xhr.setRequestHeader('Authorization', `Bearer ${token}`)

    xhr.send()
}

export default deleteNote