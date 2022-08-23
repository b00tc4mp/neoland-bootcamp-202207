const {requiredPass, mailRegex, nameRegex, lowerCaseLettersRegex, upperCaseLettersRegex, numbersRegex, symbolsRegex, regexUserId, regexNoteId} = require('./constants')

function passRegexMatch(pass, callback){
    
    const result = requiredPass.test(pass)
    
    if(!result)
        callback(new Error('Pass does not match Regex'))
    else
        callback(null)

    return
}

module.exports = {
    passRegexMatch
}