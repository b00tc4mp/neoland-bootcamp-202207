function validateDate(birth) {
    if (birth instanceof Date === false || birth.toString() === 'Invalid Date') throw new TypeError (`${birth} is not a Date ${console.log(birth instanceof Date)}`)
}

module.exports = validateDate