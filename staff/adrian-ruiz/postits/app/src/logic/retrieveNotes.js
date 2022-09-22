/**
 * @param {string} userId The user identifier
 * 
 * 
 * @throws {TypeError} Error on failed verification inputs
 */
 const API_URL = process.env.REACT_APP_API_URL
function retrieveNotes(token, callback) {

    // Recupero las notas del usuario
    const xhr = new XMLHttpRequest

    xhr.onload = function(){

        const status = xhr.status

        if(status >=500)
        callback(new Error(`Server error (${status})`))
        if(status >= 400){
            callback(new Error(`Client error (${JSON.parse(xhr.response).error})`))
        }else if( status === 200){
            const data = JSON.parse(xhr.response)
            
            const notes = data
            callback(null,notes)
        }
            
    }
    
    xhr.open('GET', `${API_URL}/notes`)

    xhr.setRequestHeader('Authorization', `Bearer ${token}`)
    
    xhr.send()
}

export default retrieveNotes