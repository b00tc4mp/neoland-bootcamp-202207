const API_URL = process.env.REACT_APP_API_URL

function retrieveNotes (token, callback) {
    const xhr = new XMLHttpRequest

    // response

    xhr.onload = function () {
        const status = xhr.status

        if (status >= 500) {
            callback(new Error(`Server error (${status})`))
        } else if (status >= 400) {
            callback(new Error(`Client error (${status})`))
        } else if (status === 200) {
            const json = xhr.responseText

            const data = JSON.parse(json)

            const notes = data.notes ? data.notes.reverse() : [] // para el caso en q el usuario no tenga notas

            callback(null, notes)

        }
    }

    // request

    xhr.open('GET', `${API_URL}/notes`)

    xhr.setRequestHeader('Authorization', `Bearer ${token}`)

    xhr.send()
}

export default retrieveNotes