const { User } = require('../models')
const { AuthError } = require('errors')
const { validatePassword } = require('validators')

// SI NO PONGO EL ASYNC AQUI ABAJO, LOS ERRORES LANZADOS POR VALIDATEPASSWORD NO LO RECONOCE COMO REJECTED POR EL TESTING DE CHAI.... ¿ES PORQUE UTILIZO CHAI AS PROMISES?
async function updateUserPassword(userId, oldPassword, newPassword, confirmNewPassword){
    //TODO validations
    debugger
    validatePassword(oldPassword, 'old password')
    validatePassword(newPassword, 'new password')
    validatePassword(confirmNewPassword, 'confirm new password')
    if(newPassword !== confirmNewPassword) throw new AuthError('New password and confirm new password are not the same')

    return (async() => {
        debugger
        const user = await User.findById(userId)

        if(!user) throw new AuthError(`User ${userId} does not exists or credentials are wrong`)

        if(user.password !== oldPassword) throw new AuthError(`Old password is wrong`)

        user.password = newPassword

        await user.save()

        return
    })()

}

module.exports = updateUserPassword