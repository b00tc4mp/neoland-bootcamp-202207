function authenticateUser(email, password, callback){

    const user = users.find(function(user){
        return user.email === email && user.password === password
    })

    if(!user){
        callback(new Error('El usuario no existe o las credenciales son erroneas'))
        return
    }

    callback(null)
}

function retrieveUser(email, callback){

    const user = users.find(function(user){
        return user.email === email
    })

    if(!user){
        callback(new Error('El usuario no existe'))
        return
    }

    callback(null, user)

}