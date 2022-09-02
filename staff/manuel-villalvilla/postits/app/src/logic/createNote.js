function createNote(token, callback) {
    // TODO input validation

    const xhr = new XMLHttpRequest

    // response

    xhr.onload = function () {
        const status = xhr.status

        if (status >= 500) {
            callback(new Error(`Server error (${status})`))
        } else if (status >= 400) {
            callback(new Error(`Client error (${status})`))
        } else if (status === 200) {
            callback(null)
        }
    }

    // request

    xhr.open('POST', 'http://localhost:8080/api/notes')

    xhr.setRequestHeader('Authorization', `Bearer ${token}`)

    xhr.send()
}

export default createNote