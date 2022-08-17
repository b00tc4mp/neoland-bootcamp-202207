const { useState } = React
function Header({onProfileClick, onHomeClick, onLogout, name}) {
   
    const [menu, setMenu] = useState('closed')

    const handleMenuClick = () => {
        if (menu !== 'opened')
            setMenu('opened')
        else if (menu !== 'closed')
            setMenu('closed')
    }

    const handleProfileClick = () => {
        handleMenuClick()
        onProfileClick()
    }

    const handleHomeClick = () => {
        onHomeClick()
    }

    return (<header>
        <span className="homeIcon material-symbols-outlined" onClick={handleHomeClick}>
            home
        </span>
        <h1 id="headerTitle">Hello, {name}</h1>
        <div className={menu === 'closed' && "menuContainer" || menu === 'opened' && 'menuContainer change'} onClick={handleMenuClick}>
            <div className="menuIcon"></div>
            <div className="menuIcon1"></div>
            <div className="menuIcon2"></div>

            {menu === 'opened' &&
                <div className="dropdownMenu displayBlock">
                    <ul>
                        <li><a href="#" className="profileLink" onClick={handleProfileClick}>Profile</a></li>
                        <li><a href="#" className="settingsLink">Settings</a></li>
                        <li><a href="#" className="logoutLink" onClick={onLogout}>Logout</a></li>
                    </ul>
                </div>
            }

        </div>
    </header>)

}