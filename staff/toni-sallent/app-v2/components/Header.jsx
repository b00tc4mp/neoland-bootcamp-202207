const { useState } = React

function Header({ name, onLogoutClick, onSettingsClick, view: viewHome }) {
    
    const [view, setView] = useState(null)

    const handleMenuClick = () => {
        setView("menu")
    }

    const handleCloseClick = () => {
        setView(null)
    }

    const handleSettingsClick = () => {
        setView(null)
        
        onSettingsClick();

    }
    
    
    
    return <header className="header container">
    <div className="header-top container container--row container--distributed">
        <h1 className="title">Hello, {name}!</h1>
        
        {view === null && <IconButton text="menu" onClick={handleMenuClick} />}
        {view === "menu" && <IconButton text="close" onClick={handleCloseClick} />}
        
    </div>
    
    {view === 'menu' && <Menu onLogoutClick={onLogoutClick} onSettingsClick={handleSettingsClick} view={viewHome} />}

</header>
    }
