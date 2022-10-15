const {verify} = require ('jsonwebtoken')
const validateText = require('../validators/validateText')

module.exports = req => {
const { headers: { authorization } } = req

validateText (authorization, 'authorization')

const token = authorization.substring(7)
// espacios de palabra bearer+espacio-->esto siempre es fijo por eso el substring(7) seimpre será el mismo


const payload = verify(token, 'Dan: copié el código de Mónica!')
//el mismo secreto que se utilizó para crear el token

const { sub: userId } = payload
//esto me interesa porque con el sub recupero el usuario

return userId
}