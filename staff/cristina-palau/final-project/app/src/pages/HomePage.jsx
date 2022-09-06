import '../index.css'
import logoAnimado from '../images/logoAnimado.gif'

function HomePage({onLogoutClick}) {
    const handleLinkClick = event => {
        event.preventDefault()

        onLogoutClick()
    }


    return <main className="page registerPage">
        <img className="logo" alt="logo" src={logoAnimado}/>
        <a className="anchor" href="login-page.html" onClick={handleLinkClick}>Login</a>
    </main >

}

export default HomePage
