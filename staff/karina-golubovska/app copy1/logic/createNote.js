function createNote(token, callback) {

    if (typeof token !== 'string') throw new TypeError('token is not a string')
    if (token.trim().length === 0) throw new Error('token is empty or blank')

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

            const note = {
                id: `note-${Date.now()}`,
                text: ''

            }
            notes.push(note)

            // const notejson = JSON.stringify({notes})
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

            xhr2.setRequestHeader('Content-type', 'application/json')
            xhr2.setRequestHeader('Authorization', `Bearer ${token}`)
            const json2 = JSON.stringify({ notes })

            xhr2.send(json2)
        }
    }
    
    xhr.open('GET', 'https://b00tc4mp.herokuapp.com/api/v2/users')

    xhr.setRequestHeader('Authorization', `Bearer ${token}`)

    xhr.send()
}

/* const user = users.find(user => {
    return user.id === userId
})

if (!user) {
    callback(new Error('user with id ' + userId + ' not found'))
 
    return
}

const note = {
    id: 'note-' + Date.now(),
    text: '',
    user: userId
}

notes.push(note)
 
callback(null) */

