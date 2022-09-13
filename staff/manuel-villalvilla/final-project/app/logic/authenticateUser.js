import axios from 'axios'
const API_URL = process.env.NEXT_PUBLIC_API_URL

export default async function (credentials, req) {
    // TODO validate credentials

    // return axios.post(`${API_URL}/users/auth`, credentials)
    //     .then(token => token)
    //     .catch(error => {throw new Error(error.message)})
    const payload = {
        email: credentials.email,
        password: credentials.password,
      };

    const res = await fetch('http://localhost:8080/api/users/auth', {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
            'Content-Type': 'application/json',
            'Accept-Language': 'en-US',
        },
    });

    const user = await res.json();

    if (!res.ok) throw new Error(user.exception)

    return user
}