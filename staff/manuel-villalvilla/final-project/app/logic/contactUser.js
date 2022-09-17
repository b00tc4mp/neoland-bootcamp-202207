import axios from 'axios'
import { validateEmail, validateMongoId, validateText } from 'validators'
const API_URL = process.env.NEXT_PUBLIC_API_URL

export default function (name, email, body, adUser) {
    validateText(name, 'name')
    validateEmail(email)
    validateText(body, 'body')
    validateMongoId(adUser)

    const payload = {
        name, 
        email,
        body,
        adUser
    }

    return axios.post(`${API_URL}/users/contact`, payload)
        .then(res => {
            return res
        })
        .catch(error => {throw new Error(error.response.data.error)})
}