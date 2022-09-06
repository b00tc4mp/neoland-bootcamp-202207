import axios from 'axios'
import Home from '../index'
import React, { useState, useEffect } from 'react'
const API_URL = process.env.NEXT_PUBLIC_API_URL

function ads({ data, country }) {
    return <Home data={data} country_code={country} />
}

export async function getServerSideProps(context) {
    const { query: { country } } = context

    const { data, error } = await axios.get(`${API_URL}/ads?country=${country}`)

    return { props: { data, country }}
}

export default ads