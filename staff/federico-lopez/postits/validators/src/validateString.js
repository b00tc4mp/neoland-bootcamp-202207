module.exports = (string) => {
    if(typeof string !== 'string') throw new Error(`${string} is not a string`)
}