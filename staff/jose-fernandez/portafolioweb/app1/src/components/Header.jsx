import './Header.css'
import IconButton from './Buttons/IconButton'
function Header() {
    return <header className="container Header">
        <div className="container-header">
            <a className="logo" >José Fernández</a>
            <div className="menu-button">
                {<IconButton addClass="btn-menu" text="menu" />}
                {/* {view === null && <IconButton addClass="btn-menu" text="menu" onClick={handleMenuClick} />}
                {view === "menu" && <IconButton addClass="btn-menu" text="close" onClick={handleCloseClick} />} */}
            </div>
        </div>
        {/* {<Menu />} */}
    </header>
}
export default Header
