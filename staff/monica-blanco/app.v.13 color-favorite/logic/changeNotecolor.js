function changeNoteColor(token, userNotes, noteId, color, callback){
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
    const note = userNotes.find(note => note.id === noteId)
    note.color = color

    const reverseNotes = userNotes.reverse()
    const newData = JSON.stringify({notes: reverseNotes})

    xhr.open('PATCH','https://b00tc4mp.herokuapp.com/api/v2/users')

    xhr.setRequestHeader('Authorization', `Bearer ${token}`)
    xhr.setRequestHeader('Content-type', 'application/json')

    xhr.send(newData)
}