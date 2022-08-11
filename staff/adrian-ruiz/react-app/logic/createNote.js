/**
 * @param {string} title The note title
 * @param {string} text The note text
 * 
 * @throws {TypeError} Error on failed verification inputs
 * @throws {Error} Errors
 */

function createNote(userToken, title, text, callback) {

    if (!(callback instanceof Function)) throw new TypeError(callback + ' is not a function')
    if (title.trim().length === 0) throw new Error('Title is empty or blank')
    if (typeof title !== 'string') throw new TypeError(`${title} is not a string`)
    if (typeof text !== 'string') throw new TypeError(`${text} is not a string`)

    // PARA UTILIZAR EL SERVIDOR ANIDAR LAS NOTAS DENTRO DE UN ARRAY CON ESTRUCTURA DE OBJETOS DENTRO DE USUARIO

    if (!title) {
        callback(new Error('Title is not defined, note not created'))
        return
    }

    // Recupero las notas del usuario
    const xhr = new XMLHttpRequest

    xhr.onload = function () {

        const status = xhr.status

        if (status >= 500)
            callback(new Error(`Server error (${status})`))
        if (status >= 400) {
            callback(new Error(`Client error (${JSON.parse(xhr.response).error})`))
        } else if (status === 200) {
            const data = JSON.parse(xhr.response)

            //Utilizo las notas, y si no existen creo un nuevo array para pushear
            const notes = data.notes ? data.notes : []
            
            // Creo nueva nota
            const note =
            {
                id: 'note-' + Date.now(),
                title: title,
                text: text
            }
            notes.push(note)

            // ENVIARLAS AL SERVIDOR
            const xhr2 = new XMLHttpRequest

            xhr2.onload = function () {

                const status = xhr2.status

                if (status >= 500)
                    callback(new Error(`Server error (${status})`))
                if (status >= 400) {
                    callback(new Error(`Client error (${JSON.parse(xhr2.response).error})`))
                } else if (status === 204)
                    callback(null)
            }

            xhr2.open('PATCH', 'https://b00tc4mp.herokuapp.com/api/v2/users')

            xhr2.setRequestHeader('Content-type', 'application/json')
            xhr2.setRequestHeader('Authorization', `Bearer ${userToken}`)

            const newData = { notes: notes }

            const body = JSON.stringify(newData)

            xhr2.send(body)
            }
            
        }

    xhr.open('GET', `https://b00tc4mp.herokuapp.com/api/v2/users/`)

    xhr.setRequestHeader('Authorization', `Bearer ${userToken}`)
    xhr.send()
}