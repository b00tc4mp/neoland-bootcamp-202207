function Header() {


    return <header className="header_home">
        <div className="cont__header">
            <div className="btn-menClo">
                {view === null && <IconButtonHeader text="menu" onClick={handleMenuClick} />}
                {view === "menu" && <IconButtonHeader text="close" onClick={handleCloseClick} />}
            </div>
            <div className="link_home" >
                <img className="img img-home " src="https://i.postimg.cc/ZY1nHGSz/logo-Luanna.png" alt="" />
            </div>
            {/* <h1 className="messageTitle">Hello {name} !</h1> */}
            <IconButtonHeader text="search"/>
            <IconButtonHeader text="shopping_bag"/>
        

        </div>
        {view === "menu" && <Menu onLogoutClick={onLogoutClick} onSettingsClick={handleSettingsClick} view={viewHome} />}
    </header>
}