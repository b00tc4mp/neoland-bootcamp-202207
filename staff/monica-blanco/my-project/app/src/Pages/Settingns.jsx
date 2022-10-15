const Settingns = ({onLinkClick, onClick})=>{
    const handleLinkClick = event => {
        event.preventDefault()
    
        onLinkClick()
    } 
    return (
        <>
        <div>
           Settings
        </div>
                <a className="anchor" href="#" onClick={handleLinkClick}>settings va a Login</a>
                <a className="anchor" href="#" onClick={handleLinkClick}>settings va a Home</a>
                </>
    )
}

export default Settingns