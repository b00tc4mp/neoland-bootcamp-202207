import {requiredPass, lowerCaseLettersRegex, upperCaseLettersRegex, numbersRegex, symbolsRegex} from "./constants"

function checkPassInput (pass, {matchAll, matchLowerCase, matchUpperCase, matchNumbers, matchSymbols, matchLength}) {
    let result = {matchAll, matchLowerCase, matchUpperCase, matchNumbers, matchSymbols, matchLength}
    if (pass.match(requiredPass) && !matchAll) {
        result.matchAll = true
    }else if(!pass.match(requiredPass)) {
        result.matchAll = false
    }
    // Comprobar minusculas
    if (pass.match(lowerCaseLettersRegex) && !matchLowerCase) {
        result.matchLowerCase = true
    } else if(!pass.match(lowerCaseLettersRegex)) {
        result.matchLowerCase = false
    }
    // Comprobar mayusculas
    if (pass.match(upperCaseLettersRegex) && !matchUpperCase) {
        result.matchUpperCase = true
    } else if(!pass.match(upperCaseLettersRegex)) {
        result.matchUpperCase = false
    }
    // Comprobar numeros
    if (pass.match(numbersRegex) && !matchNumbers) {
        result.matchNumbers = true
    } else if(!pass.match(numbersRegex)) {
        result.matchNumbers = false
    }
    // Compruebo la longitud
    if (pass.length >= 8 && pass.length <= 15 && !matchLength) {
        result.matchLength = true
    } else if(!(pass.length >= 8 && pass.length <= 15 && !matchLength)) {
        result.matchLength = false
    }
    // Comprobar simbolos
    if (pass.match(symbolsRegex) && !matchSymbols) {
        result.matchSymbols = true
    } else if(!pass.match(symbolsRegex)) {
        result.matchSymbols = false
    }

    return result
}

export default checkPassInput