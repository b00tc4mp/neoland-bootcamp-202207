const validators = (function() { // IIFE
    //const EMAIL_REGEX = new RegExp('^(([^<>()[\\]\\.,;:\\s@\\"]+(\\.[^<>()[\\]\\.,;:\\s@\\"]+)*)|(\\".+\\"))@(([^<>()[\\]\\.,;:\\s@\\"]+\\.)+[^<>()[\\]\\.,;:\\s@\\"]{2,})$', 'i')
    const EMAIL_REGEX = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

    const ALPHANUM_REGEX = /^\w+$/

    function validateEmail(email) { // closure
        if (!EMAIL_REGEX.test(email))
            throw new Error('invalid email')
    }

    function validateAlphanumeric(text) { // closure
        if (!ALPHANUM_REGEX.test(text))
            throw new Error('text is not alphanumeric')
    }

    return {
        validateEmail,
        validateAlphanumeric
    }
})()