const { User } = require ('../../../models')
const { AuthError } = require('errors')
const { validatePassword } = require('validators')

function updateUserPassword(userId, oldPassword, newPassword, newPasswordRepeat){
    debugger
    validatePassword(oldPassword, oldPassword)
    validatePassword(newPassword, newPassword)
    validatePassword(newPasswordRepeat, 'confirm new password')
    if(newPassword !== newPasswordRepeat) throw new AuthError('New password and confirm new password are not the same')

    return (async() => {
        
        const user = await User.findById(userId)

        if(!user) throw new AuthError(`User ${userId} does not exists or credentials are wrong`)

        if(user.password !== oldPassword) throw new AuthError(`Old password is wrong`)

        user.password = newPassword

        await user.save()

        return
    })()

}

module.exports = updateUserPassword