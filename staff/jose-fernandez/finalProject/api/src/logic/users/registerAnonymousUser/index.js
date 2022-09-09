// import { User } from "../../../models";

// export async function registerAnonymousUser(cart) {
//     const user = await User.create({ cart })

//     if(user) {
//         return user._id.toString()
//     }
// }
// module.exports = registerAnonymousUser
const {User} = require('../../../models')
const{DuplicityError, SystemError} = require('errors')
const {validateEmail}= require('validators')

function registerAnonymousUser(cart){
    // validateEmail(email)

    return User.create({cart})
    .then(user=>{
        return user._id.toString()
    })
    .catch(error =>{
        if(error.code===11000)
        throw new DuplicityError('user already exists')

    throw new SystemError(error.message)
    })
}

module.exports = registerAnonymousUser