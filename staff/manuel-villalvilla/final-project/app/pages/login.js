import { signIn } from 'next-auth/react'
import { useRouter } from 'next/router'
import withContext from '../utils/withContext'
import { getToken } from 'next-auth/jwt'
import { useEffect, useState } from 'react'
const URL = process.env.NEXT_PUBLIC_APP_URL

export default withContext(function SignIn({ context: { setSearchHeight } }) {
  const [isSearching, setIsSearching] = useState(false)
  const [error, setError] = useState(null)
  const router = useRouter()

  useEffect(() => setSearchHeight(0), [])

  const handleFormSubmit = async (event) => {
    event.preventDefault()

    const res = await signIn('credentials', {
      redirect: false,
      email: event.target.loginEmail.value,
      password: event.target.loginPassword.value
    })

    if (res.ok) router.push(`${URL}/mipanel`)
    else if (res.status === 401 && res.error === 'Error: unverified user') setError('Usuario no verificado')
    else if (res.status === 401) setError('Email o contraseña incorrectos')
  }

  return (
    <form className='login-form' onSubmit={handleFormSubmit}>
      <div className='login-email-container'>
        <label htmlFor='loginEmail' className='login-email-label'>Introduce tu Email</label>
        <input
          type='email'
          id='loginEmail'
          name='loginEmail'
          placeholder={isSearching ? '' : 'miemail@ejemplo.com'}
          size={30}
          onFocus={() => setIsSearching(true)}
          onBlur={() => setIsSearching(false)}
          >
        </input>
      </div>
      <div className='login-password-container'>
        <label htmlFor='loginPassword' className='login-password-label'>Introduce tu contraseña</label>
        <input type='password' id='loginPassword' name='loginPassword' maxLength={12} size={30}></input>
      </div>
      {error ? <p style={{ textAlign: 'center', color: 'red' }}>{error}</p> : null}
      <button type="submit" className='login-button'>Entrar</button>
    </form>
  );
})

export async function getServerSideProps({ req, res }) {
  const secret = process.env.NEXTAUTH_SECRET
  const token = await getToken({ req, secret })

  if (token) {
    //TODO check that is not expired

    res.writeHead(307, { Location: '/mipanel' })
    res.end()
    return { props: {} }

  } else {
    return { props: {} }
  }
}