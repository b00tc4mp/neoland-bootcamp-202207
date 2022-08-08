function updateUserPassword (token, oldPassword, newPassword, ConfirmNewPassword, callback){
    if(typeof oldPassword !== 'string') throw new Error('Old Password is not a string')
    if(typeof newPassword !== 'string') throw new Error('New Password is not a string')
    if(typeof ConfirmNewPassword !== 'string') throw new Error('Confirm New Password is not a string')
    if (!(oldPassword.match(requiredPass))) throw new Error('\nOld Password does not meet the requirements: \n- Between 8 and 15 characters\n- At least 1 capital letter\n- At least 1 lowercase letter\n- At least 1 symbol')
    if (!(newPassword.match(requiredPass))) throw new Error('\nNew Password does not meet the requirements: \n- Between 8 and 15 characters\n- At least 1 capital letter\n- At least 1 lowercase letter\n- At least 1 symbol')
    if (!(ConfirmNewPassword.match(requiredPass))) throw new Error('\nConfirm New Password does not meet the requirements: \n- Between 8 and 15 characters\n- At least 1 capital letter\n- At least 1 lowercase letter\n- At least 1 symbol')
    if (typeof callback !== 'function') throw new TypeError('callback is not a function')

    if(newPassword !== ConfirmNewPassword) throw new Error('New password and password confirmation does not matches')
    const xhr = new XMLHttpRequest

    xhr.onload = function(){
        const status = xhr.status
        if(status >= 500)
            callback(new Error(`Server error (${status})`))
        if(status >=400)
        callback(new Error(`Client error (${JSON.parse(xhr.response).error})`))
        if(status === 204)
            callback(null)
    }

    xhr.open('PATCH','https://b00tc4mp.herokuapp.com/api/v2/users' )

    xhr.setRequestHeader('Content-type', 'application/json')
    xhr.setRequestHeader('Authorization', `Bearer ${token}`)

    const newData = {
        oldPassword: oldPassword,
        password: newPassword
    }
    xhr.send(JSON.stringify(newData))
}