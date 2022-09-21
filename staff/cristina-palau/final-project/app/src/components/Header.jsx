import './Header.sass'

function Header ({text}) {
    return <header className="header homeHeader"> <p className='headerTitle'>{text}</p>
    </header>
}

export default Header
