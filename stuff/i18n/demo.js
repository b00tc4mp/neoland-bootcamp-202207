const i18n = [ // internationalizationç
    {
        status: 401,
        key: 'username and/or password wrong',
        translations: [
            { lang: 'en', text: 'Wrong credentials' },
            { lang: 'es', text: 'Credenciales incorrectas' },
            { lang: 'ch', text: 'Ata eto notabien' },
            { lang: 'ca', text: 'Credencials incorrectes' }
        ]
    },
    {
        status: 409,
        key: 'already exists',
        translations: [
            { lang: 'en', text: 'User already exists' },
            { lang: 'es', text: 'Usuario ya existe' },
            { lang: 'ch', text: 'Eta yata ki' },
            { lang: 'ca', text: 'Usuari ja existeix' }
        ]
    }
]

function getTranslation(lang, status, text) {
    const result = i18n.find(item => item.status === status && text.includes(item.key))

    if (!result) throw new Error('no translation found')

    const trans = result.translations.find(item => item.lang === lang)

    if (!trans) throw new Error(`translation not found for language: ${lang}`)

    return trans.text
}


let trans = getTranslation('ch', 409, 'user with username \"pepito@grillo.com\" already exists')
console.log(trans)
// 'Eta yata ki' 

trans = getTranslation('ca', 409, 'user with username \"pepito@grillo.com\" already exists')
console.log(trans)
// 'Usuari ja existeix' 

// VM4355:38 Eta yata ki
// VM4355:42 Usuari ja existeix
// undefined