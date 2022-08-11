function createNote(token, callback) {
    // TODO input validation

    // const user = users.find(user => {
    //     return user.id === userId
    // })

    // if(!user) {
    //     callback(new Error('user with id ' + userId + ' does not exist'))
    //     return;
    // }

    // notes.push({
    //     id: 'note-' + Date.now(),
    //     text: '',
    //     user: userId
    // })

    // callback(null)


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

            const notes = data.notes ? data.notes : [] // para el caso en q el usuario no tenga notas

            const note = {
                id: `note-${Date.now()}`,
                text: ''
            }

            notes.push(note)

            const xhr2 = new XMLHttpRequest

            xhr2.onload = function () {
                const status = xhr2.status
        
                if (status >= 500) {
                    callback(new Error(`Server error (${status})`))
                } else if (status >= 400) {
                    callback(new Error(`Client error (${status})`))
                } else if (status === 204) {
                    callback(null)
                }

            }

            xhr2.open('PATCH', 'https://b00tc4mp.herokuapp.com/api/v2/users')

            xhr2.setRequestHeader('Authorization', `Bearer ${token}`)
            xhr2.setRequestHeader('Content-type', 'application/json')

            xhr2.send(JSON.stringify({notes}))
        }
    }

    // request

    xhr.open('GET', 'https://b00tc4mp.herokuapp.com/api/v2/users')

    xhr.setRequestHeader('Authorization', `Bearer ${token}`)

    xhr.send()
}