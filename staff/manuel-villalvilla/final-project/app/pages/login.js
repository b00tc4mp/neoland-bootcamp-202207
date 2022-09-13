import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';

export default function SignIn() {
  const router = useRouter()
  const handleFormSubmit = async (event) => {
    event.preventDefault()
    try {
      const res = await signIn('credentials', {
        redirect: false,
        email: event.target.loginEmail.value,
        password: event.target.loginPassword.value,
        callbackUrl: `${window.location.origin}`
      })
      router.push('../mipanel')
    } catch (error) {
      throw new Error(error)
    }
    
  }

  return (
    <>
      <form className='login-form' onSubmit={handleFormSubmit}>
        <div className='login-email-container'>
          <label htmlFor='loginEmail' className='login-email-label'>Introduce tu Email</label>
          <input type='email' id='loginEmail' name='loginEmail' placeholder='miemail@ejemplo.com' size={30}></input>
        </div>
        <div className='login-password-container'>
          <label htmlFor='loginPassword' className='login-password-label'>Introduce tu contraseña</label>
          <input type='password' id='loginPassword' name='loginPassword' maxLength={12} size={30}></input>
        </div>
        <button type="submit" className='login-button'>Entrar</button>
      </form>
    </>
  );
}

// export async function getServerSideProps(context) {
//   return {
//     props: {
//       csrfToken: await getCsrfToken(context),
//     },
//   };
// }