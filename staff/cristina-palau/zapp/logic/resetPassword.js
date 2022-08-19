function resetPassword(email, question, answer, callback) {
    if (typeof email !== 'string') throw new TypeError('email is not a string')
    if (email.trim().length === 0) throw new Error('email is empty or blank')
    if (email.length < 6) throw new Error('email length is not valid')
    if (!EMAIL_REGEX.test(email)) throw new Error('email is not valid')
    if (typeof answer !== 'string') throw new TypeError('answer is not a string')
    if (answer.trim().length === 0) throw new Error('answer is empty or blank')
    
    
    if (typeof callback !== 'function') throw new TypeError('callback is not a function')

   
    const user = users.find(function (user) {
        if (user.email === email && user.question === question && user.answer === answer)
        {return user}
    })

    if (!user) {
        callback(new Error('wrong credentials'))
        return
    }
   
    callback(null, user)
}