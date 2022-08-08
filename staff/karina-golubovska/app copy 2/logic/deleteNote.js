function deleteNote(token, noteId, callback) {
    if (typeof token !== 'string') throw new TypeError('token is not a string')
    if (token.trim().length === 0) throw new Error('token is empty or blank')
    if (typeof noteId !== 'string') throw new TypeError('note id is not a string')
    if (noteId.trim().length === 0) throw new Error('note id is empty or blank')

    if (typeof callback !== 'function') throw new TypeError('callback is not a function')

    const xhr = new XMLHttpRequest
    xhr.onload = function () {
        const status = xhr.status
        if (status >= 500)
            callback(new Error(`server error (${status})`))
        else if (status >= 400)
            callback(new Error(`client error (${status})`))
        else if (status === 200) {
            const json = xhr.responseText

            const user = JSON.parse(json)
            if(!user.notes || user.notes.length ===0)callback(new Error(`note with id ${noteId} not found`))

            const notes = user.notes
            const noteIndex = notes.findIndex(note => note.id===noteId)
            if(noteIndex === -1)callback(new Error (`note with id ${noteId} not found`))
            notes.splice(noteIndex,1)
            const xhr2 = new XMLHttpRequest
    
            xhr2.onload = function () {
                const status2 = xhr2.status

                if (status2 >= 500) callback(new Error(`server error status ${status}`))
                else if (status2 >= 400)callback(new Error(`client error status ${status}`))
                else if (status2 === 204)
                    callback(null)
            }


            xhr2.open('PATCH', 'https://b00tc4mp.herokuapp.com/api/v2/users')

    xhr2.setRequestHeader('Authorization', `Bearer ${token}`)
    xhr2.setRequestHeader('Content-type', 'application/json')
    const json2 = JSON.stringify({ notes })

    xhr2.send(json2)
        }
    }
    xhr.open('GET', 'https://b00tc4mp.herokuapp.com/api/v2/users')

    xhr.setRequestHeader('Authorization', `Bearer ${token}`)
   
    xhr.send()
}

    


    /*const user = users.find(user => {
        return user.id === userId
    })

    if (!user) {
        callback(new Error(`user with id ${userId} not found`))

        return
    }

    const noteIndex = notes.findIndex(note => {
        return note.id === noteId
    })

    const note = notes[noteIndex]

    if (!note) {
        callback(new Error(`note with id ${noteId} not found`))

        return
    }

    if (note.user !== userId) {
        callback(new Error(`note with id ${noteId} does not belong to user with id ${userId}`))

        return
    }

    notes.splice(noteIndex, 1)

    callback(null)
    */
