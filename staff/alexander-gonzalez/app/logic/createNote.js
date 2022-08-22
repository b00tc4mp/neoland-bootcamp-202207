/**
 * 
 * @param {string} userId --> the user identifier.
 * @param {function} callback  --> that function expression provided a results.
 * @returns 
 */

function createNote(userId, callback) {
    // TODO validate inputs

    const user = users.find(user => {
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

    callback(null)
}