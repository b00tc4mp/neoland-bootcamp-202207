const API_URL = process.env.REACT_APP_API_URL

function changeNoteColor(token, noteId, color, callback){
    //TODO INPUT VALIDATIONS
    const xhr = new XMLHttpRequest

    xhr.onload = function() {
        const status = xhr.status

        if (status >= 500)
            callback(new Error(`server error (${status})`))
        else if (status >= 400)
            callback(new Error(`Client error (${JSON.parse(xhr.response).error})`))
        else if (status === 204)
            callback(null)
    }
    

    const newData = JSON.stringify({color})

    xhr.open('PATCH', `${API_URL}/notes/${noteId}`)

    xhr.setRequestHeader('Authorization', `Bearer ${token}`)
    xhr.setRequestHeader('Content-type', 'application/json')

    xhr.send(newData)
}

export default changeNoteColor