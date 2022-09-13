import Link from 'next/link'

export default function () {
  return (
    <footer className='footer'>

      <Link href='../terms-and-conditions'><a>Condiciones de uso</a></Link>

      <Link href='../contact'><a>Contacto</a></Link>

      <Link href='../'><a>BuscoBarbie.com</a></Link>
      <div className='links'>
        <Link href='../AR/home'><a className='home-link'>AR</a></Link>
        <Link href='../MX/home'><a className='home-link'>MX</a></Link>
        <Link href='../ES/home'><a className='home-link'>ES</a></Link>
      </div>

    </footer>
  )
}