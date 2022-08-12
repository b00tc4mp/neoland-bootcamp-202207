//const EMAIL_REGEX = new RegExp('^(([^<>()[\\]\\.,;:\\s@\\"]+(\\.[^<>()[\\]\\.,;:\\s@\\"]+)*)|(\\".+\\"))@(([^<>()[\\]\\.,;:\\s@\\"]+\\.)+[^<>()[\\]\\.,;:\\s@\\"]{2,})$', 'i')
const EMAIL_REGEX = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

const ALPHANUM_REGEX = /^\w+$/

export function validateEmail(email) {
    if (!EMAIL_REGEX.test(email))
        throw new Error('invalid email')
}

export function validateAlphanumeric(text) {
    if (!ALPHANUM_REGEX.test(text))
        throw new Error('text is not alphanumeric')
}