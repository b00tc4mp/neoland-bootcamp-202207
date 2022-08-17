function updatePassword(token, oldPass, newPass, newPass2, callback) {
    if (typeof token !== 'string') throw new TypeError('token is not a string update password')
    if (token.trim().length === 0) throw new Error('token is empty or blank')
   
    if (typeof newPass !== 'string') throw new TypeError('password is not a string')
    if (newPass.trim().length === 0) throw new Error('password is empty or blank')
    if (newPass.length < 8) throw new Error('password length is less than 8 characters')
    if (!PASS_REGEX.test(newPass)) {
        const passError = document.querySelector('.passerror')
        passError.classList.remove('off')
        return
    }


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
            
            const json = xhr.responseText

            const data = JSON.parse(json)

            const oldPassword = data.password


            if(newPass !== newPass2) {
                callback(new Error ('passwords do not match'))
            }

           
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
            xhr2.send(`{ "oldPassword": "${oldPass}", "password": "${newPass}"}`)
        
        }
    }

    // request

    xhr.open('GET', 'https://b00tc4mp.herokuapp.com/api/v2/users')

    xhr.setRequestHeader('Authorization', `Bearer ${token}`)

    xhr.send()
}