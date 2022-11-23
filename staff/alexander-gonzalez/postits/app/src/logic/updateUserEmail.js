function updateUserEmail(token, oldEmail, newEmail, password, newPassword, callback){


        if (typeof token !== 'string') throw new TypeError('token is not a string')
        if (token.trim().length === 0) throw new Error('token is empty or blank')
    
        if (typeof oldEmail !== 'string') throw new TypeError('old email is not a string')
        if (oldEmail.trim().length === 0) throw new Error('old email is empty or blank')
        if (oldEmail.length < 8) throw new Error('old email length is less than 8 characters')
    
        if (typeof newEmail!== 'string') throw new TypeError('new email is not a string')
        if (newEmail.trim().length === 0) throw new Error('new email is empty or blank')
        if (newEmail.length < 8) throw new Error('new email length is less than 8 characters')
    
        if (typeof password !== 'string') throw new TypeError('password repeat is not a string')
        if (PasswordRepeat.trim().length === 0) throw new Error('password repeat is empty or blank')
        if (PasswordRepeat.length < 8) throw new Error('password repeat length is less than 8 characters')
    
        if (typeof newpassword !== 'string') throw new TypeError('new password repeat is not a string')
        if (newPasswordRepeat.trim().length === 0) throw new Error('new password repeat is empty or blank')
        if (newPasswordRepeat.length < 8) throw new Error('new password repeat length is less than 8 characters')
    

        if (typeof callback !== 'function') throw new TypeError('callback is not a function')
    
        const xhr = new XMLHttpRequest
    
        // response
    
        xhr.onload = function () {
            const status = xhr.status
    
            if (status >= 500)
                callback(new Error(`server error (${status})`))
            else if (status >= 400)
                callback(new Error(`client error (${status})`))
            else if (status === 204)
                callback(null)
        }
    
        // request
    
        xhr.open('PATCH', 'https://b00tc4mp.herokuapp.com/api/v2/users')
    
        xhr.setRequestHeader('Authorization', `Bearer ${token}`)
        xhr.setRequestHeader('Content-type', 'application/json')
    
        const json = JSON.stringify({ oldEmail, newEmail: Password, newPassword})
    
        xhr.send(json)
    }

    export default updateUserEmail