 function deleteNote(token, noteId, callback) {
    // TODO validate inputs
    if (typeof token !== 'string') throw new TypeError('token is not a string')
    if (token.trim().length === 0) throw new Error('token is empty or blank')

    if (typeof token !== 'string') throw new TypeError('token is not a string')
    if (token.trim().length === 0) throw new Error('token is empty or blank')
    if (typeof callback !== 'function') throw new TypeError('callback is not a function')

   const xhr = new XMLHttpRequest

    //respomse

    xhr.onload = function () {
        const status = xhr.status
        if (status >= 500)
            callback(new Error(`server error (${status})`))
        else if (status >= 400)
            callback(new Error(`client error (${status})`))
        else if (status === 200) {
            const json = xhr.responseText

            const data = JSON.parse(json)
            if(!user.notes || user.notes.length===0)callback(new Error(`notaId ${note.id} not found`))

            const notes = data.notes 
            const noteIndex = notes.findIndex(note => note.id === noteId)

            notes.splice(noteIndex,1)
            // const remove = note.splice(0)

            const xhr2 = new XMLHttpRequest

            // response

            xhr2.onload = function () {
                const status = xhr2.status

                if (status >= 500)
                    callback(new Error(`server error (${status})`))
                else if (status >= 400)
                    callback(new Error(`client error (${status})`))
                else if (status === 204)
                    callback(null)
            }
            
            //request
            xhr2.open('PATCH', 'https://b00tc4mp.herokuapp.com/api/v2/users')

            xhr2.setRequestHeader('Authorization',`Bearer ${token}`)
            xhr2.setRequestHeader('Content-type','application/json')

            const json2= JSON.stringify({notes})

            xhr2.send(json2)
        }
    }

    //request
    xhr.open('GET', 'https://b00tc4mp.herokuapp.com/api/v2/users')

    xhr.setRequestHeader('Authorization', `Bearer ${token}`)

    xhr.send()

}