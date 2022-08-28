import IconButton from './Buttons/IconButton'
import Loggito from '../utils/Loggito'
import Menu from './Menu'

function Header({ name, onLogoutClick, onSettingsClick, view: viewHome,  context:{theme}   }) {
    const logger = new Loggito('Header')
    
    return <header className="header_home">
    <div className="cont__header">
        <div className="link_home" >
            <img className="img img-home " src="https://i.postimg.cc/ZY1nHGSz/logo-Luanna.png" alt="" />
        </div>
        <h1 className="messageTitle">Hello {name} !</h1>

        <div className="btn-menClo">
            {view === null && <IconButton addClass="btn-menu" text="menu" onClick={handleMenuClick} />}
            {view === "menu" && <IconButton addClass="btn-menu" text="close" onClick={handleCloseClick} />}
        </div>
    </div>
    {view === "menu" && <Menu onLogoutClick={onLogoutClick} onSettingsClick={handleSettingsClick} view={viewHome} />}
</header>
}

export default Header
