module.exports = (number) => {
    if(typeof number !== 'number') throw new Error(`${number} is not a number`)
}