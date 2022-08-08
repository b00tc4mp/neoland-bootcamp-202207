function updateNote(token, noteId, text, callback) {
    if (typeof token !== 'string') throw new TypeError('token is not a string')
    if (token.trim().length === 0) throw new Error('token is empty or blank')

    if (typeof noteId !== 'string') throw new TypeError('note id is not a string')
    if (noteId.trim().length === 0) throw new Error('note id is empty or blank')

    if (typeof text !== 'string') throw new TypeError('text is not a string')

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
            const data = JSON.parse(json)
            const notes = data.notes ? data.notes : []
            const note = notes.find(note => note.id === noteId)
            note.text = text
            const xhr2 = new XMLHttpRequest


            xhr2.onload = function () {
                const status = xhr2.status

                if (status >= 500)
                    callback(new Error(`server error (${status})`))
                else if (status >= 400)
                    callback(new Error(`client error (${status})`))
                else if (status === 204)
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


















/*
const user = users.find(user =>{
    return user.id ===userId
})

if(!user){
    callback(new Error ('user with id ' + userId + ' not found'))
    return
}
const note = notes.find (note => {
    return note.id === noteId
})
if(!note){
    callback(new Error('note with id ' + noteId + ' not found'))
    return
}
if (note.user !==userId) {
    callback (new Error ('note with id ' + noteId + ' does not belong to user with id ' + userId ))
    return
}
note.text = text 
callback(null)
*/

