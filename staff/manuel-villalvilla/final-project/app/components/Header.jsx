import Image from 'next/image'
import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'
import AnimateHeight from 'react-animate-height'
import FiltersMenu from './FiltersMenu'
import { useRouter } from 'next/router'
import styles from './Header.module.css'
import withContext from '../utils/withContext'
const URL = process.env.NEXT_PUBLIC_APP_URL

export default withContext(function ({ context: { setSearchHeight, searchHeight }, country_code }) {
  const { data: session, status } = useSession() // el token lo usare para las siguientes llamadas a api
  const router = useRouter()
  const { query: { province = null, search = null, categories = null } } = router

  const handleFiltersMenuClick = () => {
    searchHeight === 0 ? setSearchHeight('auto') : setSearchHeight(0)
  }

  return (
    <div className={styles.headerFilters}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Link href={`${URL}/${country_code}`} passHref><a><Image src='/logo2.png' layout='intrinsic' width={110} height={60}></Image></a></Link>
          <div className={styles.logoFooter}><Link href={`${URL}/${country_code}`} passHref><a><Image src='/com.png' layout='intrinsic' width={50} height={20}></Image></a></Link></div>
        </div>

        <div className={styles.sessionButtons}>
          <div className={session ? styles.session : styles.noSession}>
            {session && <>
              <Link href={`${URL}/mipanel`}><a className={styles.mipanelLink}>Mi panel</a></Link>
              <button className={styles.logoutButton} onClick={() => signOut({ callbackUrl: `${window.location.origin}` })}>Desconexión</button>
            </>
            }
            {!session && <Link href={`${URL}/login`}><a className={styles.loginLink} >Iniciar sesión</a></Link>}
          </div>
          <div className={styles.buttons}>
            <Link href={session ? `${URL}/mipanel/publicar` : `${URL}/${country_code}/publicar`}><a className={styles.publicarLink} >Publicar</a></Link>
            <button
              className={styles.buscarButton}
              onClick={handleFiltersMenuClick}
              aria-expanded={searchHeight !== 0}
              aria-controls='filters-panel'
            >
              {searchHeight !== 0 ? 'Cerrar buscador' : 'Buscar'}
            </button>
          </div>
        </div>

      </header>

      <AnimateHeight id='filters-panel' duration={500} height={searchHeight}>
        <FiltersMenu province={province} search={search} categories={categories} country={country_code} />
      </AnimateHeight>


    </div>

  )
})

