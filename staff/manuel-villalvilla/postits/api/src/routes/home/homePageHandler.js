const axios = require('axios') // cliente http para node y para el browser
const { logger } = require('../../utils')

module.exports = (req, res) => {
    // const ip = req.ip // to implement
    const ipSpain = '81.43.200.106'
    const ipMexico = '131.72.228.24'

    let randomIP = '' // tengo q asignarle un string vacio para despues llenarlo con strings
    for (let i = 0; i < 4; i++) {
        randomIP += Math.floor(Math.random() * 255) + 1
        if (i < 3) randomIP += '.'
    }

    const cookie = req.cookies // devuelve un objeto q puede estar vacio

    if (!Object.hasOwn(cookie, 'country')) {
        axios.get(`https://ipwho.is/${randomIP}`)
            .then(response => {
                const { data: { country_code: resCountryCode } } = response
                if (!resCountryCode) return res.status(200).send('country not found')
                let countryCode = resCountryCode.toLowerCase() // me tira error aqui cuando la api no procesa bien la ip
                res.cookie('country', countryCode, { maxAge: 5000 }) // 5 segundos
                res.status(200).send(`cookie set with country: ${countryCode}`)
            })
            .catch(error => {
                logger.error(error)
                res.status(500).json({ error: 'system error' })
            })
    } else {
        countryCode = cookie.country
        res.status(200).send(`cookie found with country: ${countryCode}`)
    }
}