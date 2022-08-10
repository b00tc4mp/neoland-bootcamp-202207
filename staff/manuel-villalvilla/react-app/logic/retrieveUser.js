function retrieveUser(token, callback) {
    if (typeof token !== 'string') throw new TypeError('token is not a string')
    if (typeof callback !== 'function') throw new TypeError('callback is not a function')

    const xhr = new XMLHttpRequest

    // response

    xhr.onload = function () {
        const status = xhr.status

        if (status >= 500) {
            callback(new Error(`Server error (${JSON.parse(xhr.response).error})`))
        } else if (status >= 400) {
            callback(new Error(`Client error (${JSON.parse(xhr.response).error})`))
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
