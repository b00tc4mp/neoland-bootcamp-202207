/**
 * @param {string} title The note title
 * @param {string} text The note text
 * 
 * @throws {TypeError} Error on failed verification inputs
 * @throws {Error} Errors
 */

function createNote(userToken, userNotes, title, text, callback) {

    if (!(callback instanceof Function)) throw new TypeError(callback + ' is not a function')
    if (title.trim().length === 0) throw new Error('Title is empty or blank')
    if (typeof title !== 'string') throw new TypeError(`${title} is not a string`)
    if (typeof text !== 'string') throw new TypeError(`${text} is not a string`)

    // PARA UTILIZAR EL SERVIDOR ANIDAR LAS NOTAS DENTRO DE UN ARRAY CON ESTRUCTURA DE OBJETOS DENTRO DE USUARIO

    if (!title) {
        callback(new Error('Title is not defined, note not created'))
        return
    }
    // Creo nueva nota
    const note = 
        {
            id: 'note-' + Date.now(),
            title: title,
            text: text
        }
    
    const notes = []
    if (userNotes !== undefined) {
        userNotes.forEach(eachnote =>{
            notes.push(eachnote)
        })
       /*  notes.push(userNotes) */
    }
    console.log(notes)
    // Pusheo la nueva nota en las que ya tiene el usuario
    notes.push(note)
    debugger
    // ENVIARLAS AL SERVIDOR
    const xhr = new XMLHttpRequest

    xhr.onload = function () {

        const status = xhr.status

        if (status >= 500)
            callback(new Error(`Server error (${status})`))
        if (status >= 400) {
            callback(new Error(`client error (${status})`))
        } else if (status === 204)
            callback(null)
    }

    xhr.open('PATCH', 'https://b00tc4mp.herokuapp.com/api/v2/users')

    xhr.setRequestHeader('Content-type', 'application/json')
    xhr.setRequestHeader('Authorization', `Bearer ${userToken}`)

    const data = { notes: notes }

    const body = JSON.stringify(data)

    xhr.send(body)
}