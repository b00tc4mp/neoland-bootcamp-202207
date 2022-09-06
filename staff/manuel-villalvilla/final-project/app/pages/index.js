import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import axios from 'axios'
import PaginatedItems from '../components/PaginatedItems'
import React, { useState, useEffect, useRef } from 'react'
import useSWR, { SWRConfig } from 'swr'
const fetcher = url => axios.get(url).then(res => res.data)
const API_URL = process.env.NEXT_PUBLIC_API_URL

function Home({ country_code, data }) {
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(10)
  const [stateData, setStateData] = useState(data)


  let storageRef = useRef(true) // esto es para evitar q el useEffect se ejecute en el primer renderizado
  useEffect(() => {
    if (!storageRef.current) {
      axios.get(
        `${API_URL}/ads?country=${country_code}&page=${page}&limit=${limit}`)
        .then(res => setStateData(res.data))
        .catch(error => console.log('ASYNC', error))
    }
    return () => { storageRef.current = false }
  }, [page])

  const handlePageClick = (event) => {
    setPage(event.selected + 1)
  }

  return (<div className='container'>
    <Head>
      <title>BuscoBarbie.com</title>
      <link rel="icon" href="/favicon.png" />
    </Head>

    <header className='header'>
      <div className='logo'>
        <Image src='/logo.png' layout='intrinsic' width={156} height={119}></Image>
      </div>
      <div className='header-buttons'>
        <button className='buscar-button'>Buscar</button>
        <button className='publicar-button'>Publicar</button>
      </div>
    </header>

    <main className='main'>

      <PaginatedItems data={stateData} handlePageClick={handlePageClick} />

    </main>

    <footer className='footer'>
      <Link href='/ads?country=MX'>
        <a>Anuncios México</a>
      </Link>
      <Link href='/ads?country=ES'>
        <a>Anuncios España</a>
      </Link>
      <Link href='/ads?country=AR'>
        <a onClick={() => setStateData(data)}>Anuncios Argentina</a>
      </Link>
    </footer>
  </div>
  )
}

export async function getStaticProps(context) {
  /* TO IMPLEMENT TO GET COUNTRY_CODE. INVESTIGATE LOCALE
  const ipSpain = '81.43.200.106'
  const ipMexico = '131.72.228.24'
  const res = await axios.get('https://geolocation-db.com/json/')
  let country_code
  const res = await axios.get('https://ipwho.is/81.43.200.106')
  if (res.data.country_code)
    if (res.data.country_code !== 'ES' && res.data.country_code !== 'AR' && res.data.country_code !== 'MX')
      country_code = 'ES'

    else
      country_code = res.data.country_code
  */
  const countries = ['ES', 'MX', 'AR']
  const country_code = countries[Math.floor(Math.random() * 3)]
  const response = await axios.get(`${API_URL}/ads?country=${country_code}`) // by default, page = 1, limit = 10
  const { data } = response

  return { props: { country_code, data } }
}

export default Home