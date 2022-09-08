import 'material-symbols'
import './Header.css'
import withContext from '../utils/withContext'

function Header({context: useHandleLogOut}) {
    return (
        <div className='header__container'>
            <h2 className='header__logo'>LOGO</h2>
            <span className="header__addButton material-symbols-outlined">
                add_circle
            </span>
            <h2 className='header__search'>Search</h2>
            <h2 className='header__settings'>Settings</h2>
            <h2 className='header__settings'><a href='#' onClick={useHandleLogOut}>Logout</a></h2>
        </div>
    )
}

export default withContext(Header)