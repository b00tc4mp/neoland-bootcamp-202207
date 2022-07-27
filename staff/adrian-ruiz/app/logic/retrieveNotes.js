/**
 * @param {string} userId The user identifier
 * 
 * 
 * @throws {TypeError} Error on failed verification inputs
 */

function retrieveNotes(token, callback) {

    // Recupero las notas del usuario
    const xhr = new XMLHttpRequest

    xhr.onload = function(){

        const status = xhr.status

        if(status >=500)
        callback(new Error(`Server error (${status})`))
        if(status >= 400){
            callback(new Error(`client error (${status})`))
        }else if( status === 200){
            const data = JSON.parse(xhr.response)
            
            const notes = data.notes
            callback(null,notes)
        }
            
    }
    
    xhr.open('GET', `https://b00tc4mp.herokuapp.com/api/v2/users/`)

    xhr.setRequestHeader('Authorization', `Bearer ${token}`)
    xhr.send()
}
