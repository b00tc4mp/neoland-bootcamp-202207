/**
 * @param {string} userId The user identifier
 * @param {string} noteId The note identifier
 * 
 * @throws {TypeError} Error on failed verification inputs
 */

const API_URL = process.env.REACT_APP_API_URL

function deleteNote(token, noteId, callback) {
    // TODO validate inputs

    const xhr = new XMLHttpRequest

    xhr.onload = function () {
        const status = xhr.status

        if (status >= 500)
            callback(new Error(`server error (${status})`))
        else if (status >= 400)
            callback(new Error(`Client error (${JSON.parse(xhr.response).error})`))
        else if (status === 200)
            callback(null)
    }

    xhr.open('DELETE', `${API_URL}/notes/${noteId}`)

    xhr.setRequestHeader('Authorization', `Bearer ${token}`)

    xhr.send()
}


export default deleteNote