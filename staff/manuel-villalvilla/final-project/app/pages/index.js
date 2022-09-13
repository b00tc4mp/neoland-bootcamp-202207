import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { getCookie, setCookie } from 'cookies-next'
import axios from 'axios'

function App({ country_code }) {
    const router = useRouter()

    useEffect(() => {
        if (country_code === 'AR')
            router.push('./AR/home')

        if (country_code === 'MX')
            router.push('./MX/home')

        if (country_code === 'ES')
            router.push('./ES/home')
    }, [])

    return <div className='loading-spinner'><img rel='spinner' src="https://samherbert.net/svg-loaders/svg-loaders/oval.svg"></img></div>
}

export async function getServerSideProps({ req, res }) {
    /* TO IMPLEMENT TO GET COUNTRY_CODE. INVESTIGATE LOCALE
    const ipSpain = '81.43.200.106'
    const ipMexico = '131.72.228.24'
    const res = await axios.get('https://geolocation-db.com/json/')
    let country_code
    const res = await axios.get('https://ipwho.is/131.72.228.24')
    if (res.data.country_code)
        if (res.data.country_code !== 'ES' && res.data.country_code !== 'AR' && res.data.country_code !== 'MX')
            country_code = 'ES'

        else
            country_code = res.data.country_code
    */
    const country = getCookie('country', { req, res })
    if (!country) {
        // LOGICA DE ARRIBA PARA AVERIGUAR PAIS
        const countries = ['ES', 'MX', 'AR']
        const country_code = countries[Math.floor(Math.random() * 3)]
        setCookie('country', country_code, { req, res, maxAge: 30 * 24 * 60 * 60 })
        return { props: { country_code } }
    }
    return { props: { country_code: country }}
}

export default App