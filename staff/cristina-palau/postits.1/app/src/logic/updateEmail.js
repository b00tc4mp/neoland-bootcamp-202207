import { EMAIL_REGEX } from "./constants"

function updateEmail(token, newEmail, callback) {
    if (typeof token !== 'string') throw new TypeError('token is not a string')
    if (token.trim().length === 0) throw new Error('token is empty or blank')
   
    if (typeof newEmail !== 'string') throw new TypeError('email is not a string')
    if (newEmail.trim().length === 0) throw new Error('email is empty or blank')
    if (newEmail.length < 6) throw new Error('email length is not valid')
    if (!EMAIL_REGEX.test(newEmail)) throw new Error('email is not valid')
   
    if (typeof callback !== 'function') throw new TypeError('callback is not a function')

    const xhr = new XMLHttpRequest

    // response

    xhr.onload = function () {
        const status = xhr.status

        if (status >= 500)
            callback(new Error(`server error (${status})`))
        else if (status >= 400)
            callback(new Error(`client error (${status})`))
        else if (status === 200) {
            
            // const json = xhr.responseText

            // const data = JSON.parse(json)

            // const email = data.username
                    
            const xhr2 = new XMLHttpRequest

            // response

            xhr2.onload = function () {
                const status = xhr2.status

                if (status >= 500)
                    callback(new Error(`server error (${status})`))
                else if (status >= 400)
                    callback(new Error(`client error (${status})`))
                else if (status === 204)
                    callback(null)
            }

            // request

            xhr2.open('PATCH', 'https://b00tc4mp.herokuapp.com/api/v2/users')

            xhr2.setRequestHeader('Authorization', `Bearer ${token}`)
            xhr2.setRequestHeader('Content-type', 'application/json')

            //const json2 = JSON.stringify({ notes: notes })
            xhr2.send(`{ "username": "${newEmail}"}`)
        
        }
    }

    // request

    xhr.open('GET', 'https://b00tc4mp.herokuapp.com/api/v2/users')

    xhr.setRequestHeader('Authorization', `Bearer ${token}`)

    xhr.send()
}

export default updateEmail