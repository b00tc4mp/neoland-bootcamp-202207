import Header from './Header'
import Footer from './Footer'
import Context from '../utils/Context'
import React, { useState } from 'react'

export default function ({ children, country_code }) {
    const [searchHeight, setSearchHeight] = useState(0)
    const [country, setCountry] = useState(country_code)

    return <Context.Provider value={{ setSearchHeight, searchHeight, setCountry, country_code }}>
        <div className="container">
            <Header country_code={country} />
            <main className='main'>{children}</main>
            <Footer />
        </div>
    </Context.Provider>
}