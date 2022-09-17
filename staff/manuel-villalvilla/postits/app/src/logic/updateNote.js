const API_URL = process.env.REACT_APP_API_URL

function updateNote(token, noteId, text, callback) {
    if (typeof token !== 'string') throw new TypeError('user id is not a string')
    if (token.trim().length === 0) throw new Error('user id is empty or blank')

    if (typeof noteId !== 'string') throw new TypeError('note id is not a string')
    if (noteId.trim().length === 0) throw new Error('note id is empty or blank')

    if (typeof text !== 'string') throw new TypeError('text is not a string')

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

    xhr.open('PATCH', `${API_URL}/notes?note=${noteId}&text=${text}`)

    xhr.setRequestHeader('Authorization', `Bearer ${token}`)

    xhr.send()
}

export default updateNote