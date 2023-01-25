const API_URL = process.env.REACT_APP_API_URL

function updateUserPassword(token, oldPassword, newPassword, newPasswordRepeat, callback) {
  if (typeof token !== 'string') throw new TypeError('token is not a string')
  if (token.trim().length === 0) throw new Error('token is empty or blank')

  if (typeof oldPassword !== 'string') throw new TypeError('old password is not a string')
  if (oldPassword.trim().length === 0) throw new Error('old password is empty or blank')
  if (oldPassword.length < 8) throw new Error('old password length is less than 8 characters')

  if (typeof newPassword !== 'string') throw new TypeError('new password is not a string')
  if (newPassword.trim().length === 0) throw new Error('new password is empty or blank')
  if (newPassword.length < 8) throw new Error('new password length is less than 8 characters')

  if (typeof newPasswordRepeat !== 'string') throw new TypeError('new password repeat is not a string')
  if (newPasswordRepeat.trim().length === 0) throw new Error('new password repeat is empty or blank')
  if (newPasswordRepeat.length < 8) throw new Error('new password repeat length is less than 8 characters')

  if (typeof callback !== 'function') throw new TypeError('callback is not a function')

  const xhr = new XMLHttpRequest();

  // response

  xhr.onload = function () {
      const status = xhr.status
      if (status >= 500)
          callback(new Error(`server error (${status})`))
      else if (status >= 400)
          callback(new Error(`client error (${status})`))
      else if (status === 204)
          callback(null)
  }

  // request
  xhr.open('PATCH', `${API_URL}/users/password`)
  xhr.setRequestHeader('Authorization', `Bearer ${token}`)
  xhr.setRequestHeader('Content-type', 'application/json')

  const json = JSON.stringify({oldPassword,newPassword,newPasswordRepeat}) //   <- Aqui se pasa el objeto pero se transforma a JSON entonces no hace falta linea 44 y por eso la 41 no funciona
//   const json = JSON.stringify(`{"oldPassword": "${oldPassword}", "newPassword": "${newPassword}", "newPasswordRepeat": "${newPasswordRepeat}"}`);

    xhr.send(json)
//   xhr.send(`{"oldPassword": "${oldPassword}", "newPassword": "${newPassword}", "newPasswordRepeat": "${newPasswordRepeat}"}`) <- Se envia como JSON entonces no necesita linea 41 "JSON.stringify"
}

export default updateUserPassword