const { validateText } = require ("../validators")
const { verify } = require ("jsonwebtoken")

function verifyToken(req) {
  const { headers: { authorization } } = req 

  validateText(authorization, 'authorization')

  const token = authorization.substring(7)

  const payload = verify(token, 'Dan: copie el codigo de monica')

  const { sub: userId } = payload

  return userId
}

module.export = verifyToken