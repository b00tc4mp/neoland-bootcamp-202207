import './Header.css'
import IconButton from './Buttons/IconButton'
import withContext from '../utils/withContext'

function Header({onLoginClick}) {

    const handleLoginClick= () =>{
        onLoginClick()
    }

    return <header className="container Header">
        <div className="container-header">
            <div className="menu-button">
                {<IconButton addClass="btn-menu" text="menu" />}
                {/* {view === null && <IconButton addClass="btn-menu" text="menu" onClick={handleMenuClick} />}
                {view === "menu" && <IconButton addClass="btn-menu" text="close" onClick={handleCloseClick} />} */}
            </div>
            <a className="logo" href='#' ><img className='img-logo' src="https://i.postimg.cc/ZY1nHGSz/logo-Luanna.png" alt="" /></a>
            <div className='header-buttons--right'>
            {<IconButton addClass="btn-header" text="person" onClick={handleLoginClick}/>}
            {<IconButton addClass="btn-header" text="search" />}
            {<IconButton addClass="btn-header shopping_bag" text="shopping_bag" />}
            </div>

        </div>
        {/* {<Menu />} */}
    </header>
}
export default withContext(Header)
