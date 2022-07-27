/**
 * @param {string} userId The user identifier
 * @param {string} noteId The note identifier
 * 
 * @throws {TypeError} Error on failed verification inputs
 */

function deleteNote( token, noteId, callback){
    // TODO validate inputs

    const xhr = new XMLHttpRequest

    xhr.onload = function () {
        const status = xhr.status
        if(status >= 500)
            callback(new Error(`server error (${status})`))
        else if (status >= 400)
            callback(new Error(`client error (${status})`))
        else if (status === 200){
            const data = JSON.parse(xhr.response)
            const notes = data.notes

            const noteIndex = notes.findIndex(note => {
                return note.id === noteId
            })
            if(noteIndex < 0) {
                callback(new Error('Note with id '+ noteId + ' not found'))
        
                return
            }
            notes.splice(noteIndex,1)

            const xhr2 = new XMLHttpRequest

            xhr2.onload = function(){
                const status = xhr2.status

                if (status >= 500)
                    callback(new Error(`server error (${status})`))
                else if (status >= 400)
                    callback(new Error(`client error (${status})`))
                else if (status === 204)
                    callback(null)
            }

            xhr2.open('PATCH','https://b00tc4mp.herokuapp.com/api/v2/users')

            xhr2.setRequestHeader('Authorization', `Bearer ${token}`)
            xhr2.setRequestHeader('Content-type', 'application/json')

            const newData = JSON.stringify({notes: notes})

            xhr2.send(newData)
    }
}

    xhr.open('GET','https://b00tc4mp.herokuapp.com/api/v2/users')

    xhr.setRequestHeader('Authorization', `Bearer ${token}`)

    xhr.send()

}