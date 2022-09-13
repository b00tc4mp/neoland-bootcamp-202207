import './Header.css'
import { useState } from 'react'
import IconButton from './Buttons/IconButton'
import withContext from '../utils/withContext'
import Menu from './Menu'

function Header({products,onLoginClick, onListProductsMen,onListProductsWomen,onListProductsKids,onSearchClick,onCloseClick, view:onSearch}) {
    const [view, setView] = useState(null)
    const handleLoginClick= () =>{
        onLoginClick()
    }
    const handleSearchClick=()=>{
        onSearchClick()
    }
    const handleCloseClick=()=>{
        setView(null)
        // onCloseClick()
    }


    const handleMenuClick=()=>{
        setView('menu')
        // onMenuClick()
    }

    return <header className="container Header">
        <div className="container-header">
            <div className="menu-button" >
                { view === null &&<IconButton addClass="btn-menu" text="menu" onClick={handleMenuClick}  />}
                { view === 'menu' &&<IconButton addClass="btn-menu" text="close" onClick={handleCloseClick}  />}
            </div>

            <a className="logo" href='#' ><img className='img-logo' src="https://i.postimg.cc/ZY1nHGSz/logo-Luanna.png" alt="" /></a>
            <div className='header-buttons--right'>
            {<IconButton addClass="btn-header" text="person" onClick={handleLoginClick}/>}
            {<IconButton addClass="btn-header" text="search" onQuery={onSearch} onClick={handleSearchClick} onCloseClick={handleCloseClick} />}
            {<IconButton addClass="btn-header shopping_bag" text="shopping_bag" />}
            </div>

        </div>
        {view === "menu" &&<Menu onListProductsMen={onListProductsMen} onListProductsWomen={onListProductsWomen} onListProductsKids={onListProductsKids} products={products} />}
    </header>
}
export default withContext(Header)
