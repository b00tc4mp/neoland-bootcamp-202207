const API_URL = process.env.REACT_APP_API_URL

function updateUserEmail (token, newEmail, callback){
    
  if (typeof newEmail !== 'string') throw new TypeError('Email is not string')
  if (newEmail.trim().length === 0) throw new Error('Email is empty or blank')
  if (!mailRegex.test(newEmail)) throw new Error('Email is not valid')
  if (typeof callback !== 'function') throw new TypeError('callback is not a function')

  
  const xhr = new XMLHttpRequest

  // response

  xhr.onload = function(){

    const status = xhr.status

    if(status >= 500)
      callback(new Error(`Server error (${status})`))
    if(status >=400)
      callback(new Error(`Client error (${JSON.parse(xhr.response).error})`))
    if(status === 204)
      callback(null)
  }

  // request

  xhr.open('PATCH', )

  xhr.setRequestHeader('Authorization', `Bearer ${token}`)
  xhr.setRequestHeader('Content-type', 'application/json')

  const newData = {
      username: newEmail,
  }
  
  xhr.send(JSON.stringify(newData))
}