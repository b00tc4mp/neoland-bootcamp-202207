function retrieveNotes (token, callback) {
    // TODO validate inputs

    // const user = users.find(user => {
    //     return user.id === userId;
    // })

    // if (!user) {
    //     callback(new Error('user with id ' + userId + ' not found'))
    //     return;
    // }

    // const filteredNotes = notes.filter(note => {
    //     return note.user === userId;
    // })

    // callback(null, filteredNotes);


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

    xhr.open('GET', 'https://b00tc4mp.herokuapp.com/api/v2/users')

    xhr.setRequestHeader('Authorization', `Bearer ${token}`)

    xhr.send()
}