import styles from './PublicPublish.module.css'
import Link from 'next/link'
import withContext from '../utils/withContext'
import { useEffect, useRef, useState } from 'react'
const APP_URL = process.env.NEXT_PUBLIC_APP_URL

export default withContext(function ({ context: { setSearchHeight, country_code } }) {
  const [error, setError] = useState(null)
  const [isSearching, setIsSearching] = useState(false)
  const [randomPassword, setRandomPassword] = useState(null)
  const passwordRef = useRef(null)
  const charsString = 'abcdefghijklmnñopqrstuvwxyzáéíóúÁÉÍÓÚABCDEFGHIJKLMNÑOPQRSTUVWXYZ1234567890!@#$%^&*'
  const chars = charsString.split('')

  useEffect(() => setSearchHeight(0), [])

  country_code === 'AR' ? country_code = 'ARGENTINA' :
    country_code === 'MX' ? country_code = 'MÉXICO' :
      country_code === 'ES' ? country_code = 'ESPAÑA' :
        country_code === 'US' ? country_code = 'EE.UU.' : null

  const handleRandomPassword = () => {
    let randomPassword = ''
    for (let i = 0; i < 12; i++) {
      randomPassword += chars[Math.floor(Math.random() * chars.length)]
    }
    setRandomPassword(randomPassword)

    passwordRef.current.value = randomPassword
  }

  return <div className={styles.container}>
    <h4>¿Ya tienes cuenta en <span>BuscoBarbie.com?</span></h4>
    <p>Si es así, <Link href={`${APP_URL}/login`} passHref><a className={styles.link}>pincha aquí</a></Link></p>
    <form className={styles.form} onSubmit={event => {
      event.preventDefault()
    }}>
      <h3>NUEVO ANUNCIO EN <span>{country_code}</span></h3>

      <div className={styles.nameContainer}>
        <label htmlFor='name' className={styles.nameLabel}>NOMBRE:</label>
        <input
          type='text'
          className={styles.nameInput}
          name='name'
          id='name'
          maxLength={20}
        />
      </div>

      <div className={styles.emailContainer}>
        <label htmlFor='email' className={styles.emailLabel}>EMAIL:</label>
        <input
          type='email'
          className={styles.emailInput}
          name='email'
          id='email'
          maxLength={30}
          placeholder={isSearching ? '' : 'mi-email@ejemplo.com'}
          onFocus={() => setIsSearching(true)}
          onBlur={() => setIsSearching(false)}
        />
        <div className={styles.formText}>No se hará público</div>
      </div>

      <div className={styles.passwordContainer}>
        <label htmlFor='password' className={styles.passwordLabel}>NUEVA CONTRASEÑA:</label>
        <input
          type={randomPassword ? 'text' : 'password'}
          ref={passwordRef}
          className={styles.passwordInput}
          name='password'
          id='password'
          minLength={8}
          maxLength={20}
        />
        <div className={styles.formText}>Entre 8 y 20 caracteres, incluidos: !@#$%^&*</div>
        <button className={styles.randomPasswordButton} onClick={handleRandomPassword}>GENERAR CONTRASEÑA ALEATORIA</button>
      </div>
    </form>
  </div>
})