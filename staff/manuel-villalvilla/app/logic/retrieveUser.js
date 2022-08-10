function retrieveUser(token, callback) {
    if (typeof token !== 'string') throw new TypeError('token is not a string')
    // if (email.trim().length === 0) throw new Error('email is empty or blank')
    // if (email.length < 6) throw new Error('email length is not valid') // email tipo a@b.cd tiene 6 caracteres
    // if (!EMAIL_REGEX.test(email)) throw new Error('email is not valid')
    // const user = users.find(function(user) {
    //     return user.email === email;
    // })

    // if (!user) {
    //     callback(new Error('user with email ' + email + ' not found'))
    //     return;
    // }
    // callback(null, user)

    const xhr = new XMLHttpRequest

    // response

    xhr.onload = function () {
        const status = xhr.status

        if (status >= 500) {
            callback(new Error(`Server error (${status})`))
        } else if (status >= 400) {
            callback(new Error(`Client error (${status})`))
        } else if (status === 200) {
            const json = xhr.responseText

            const data = JSON.parse(json)

            const user = {
                name: data.name,
                username: data.email
            }

            callback(null, user)

        }
    }

    // request

    xhr.open('GET', 'https://b00tc4mp.herokuapp.com/api/v2/users')

    xhr.setRequestHeader('Authorization', `Bearer ${token}`)

    xhr.send()
}