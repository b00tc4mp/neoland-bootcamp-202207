import Image from 'next/image'
import Link from 'next/link'
import { useSession, signOut, signIn } from 'next-auth/react'
import AnimateHeight from 'react-animate-height'
import FiltersMenu from './FiltersMenu'
import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { getCookie } from 'cookies-next'

export default function () {
  const country_code = getCookie('country')
  const { data: session, status } = useSession()
  const [filtersHeight, setFiltersHeight] = useState(0)
  const router = useRouter()
  const { query: { province = null, search = null, categories = null } } = router

  const handleFiltersMenuClick = () => {
    filtersHeight === 0 ? setFiltersHeight('auto') : setFiltersHeight(0)
  }

  return (
    <div className="header-filters">
      <header className='header'>
        <div className='logo'>
          <Image src='/logo2.png' layout='intrinsic' width={110} height={60}></Image>
          <div className='logo-footer'><Image src='/com.png' layout='intrinsic' width={50} height={20}></Image></div>
        </div>

        <div className='session-buttons'>
          <div className={session ? 'session' : 'no-session'}>
            {session && <>
              <Link href='../mipanel'><a className='mipanel-link'>Mi panel</a></Link>
              <button className='logout-button' onClick={() => signOut()}>Desconexión</button>
            </>
            }
            {!session && <Link href='../login'><a className='login-link' onClick={() => setFiltersHeight(0)}>Iniciar sesión</a></Link>}
          </div>
          <div className='buttons'>
            <Link href='./publicar'><a className='publicar-link'>Publicar</a></Link>
            <button
              className='buscar-button'
              onClick={handleFiltersMenuClick}
              aria-expanded={filtersHeight !== 0}
              aria-controls='filters-panel'
            >
              {filtersHeight !== 0 ? 'Cerrar buscador' : 'Buscador'}
            </button>
          </div>
        </div>

      </header>

      <AnimateHeight id='filters-panel' duration={500} height={filtersHeight}>
        <FiltersMenu province={province} search={search} categories={categories} country={country_code} />
      </AnimateHeight>


    </div>

  )
}