const safe = (() => { // iife
    let _password_ = null
    let _secret_ = null

    return {
        changePassword(oldPassword, newPassword) { // closure
            if (oldPassword !== _password_) throw new Error('wrong password')
            
            _password_ = newPassword
        },

        retrieveSecret(password) { // closure
            if (password !== _password_) throw new Error('wrong password')

            return _secret_
        },

        saveSecret(password, secret) { // closure
            if (password !== _password_) throw new Error('wrong password')

            _secret_ = secret
        }
    }
})()

safe.changePassword(null, '123123123')

safe.saveSecret('123123123', 'el padre de mi abuela tenia una doble vida')

safe.retrieveSecret('123123123')
//'el padre de mi abuela tenia una doble vida'

safe.changePassword('123123123', '234234234')

safe.retrieveSecret('123123123')
// VM1193:13 Uncaught Error: wrong password
//     at Object.retrieveSecret (<anonymous>:13:48)
//     at <anonymous>:1:6

safe.__secret__
// undefined

safe.__password__
// undefined