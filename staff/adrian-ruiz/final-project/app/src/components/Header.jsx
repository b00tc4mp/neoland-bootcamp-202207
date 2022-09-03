import 'material-symbols';
import './Header.css'
function Header() {
    return (
        <div className='header__container'>
            <h2 className='header__logo'>LOGO</h2>
            <span className="header__addButton material-symbols-outlined">
                add_circle
            </span>
            <h2 className='header__search'>Search</h2>
            <h2 className='header__settings'>Settings</h2>
        </div>
    )
}

export default Header