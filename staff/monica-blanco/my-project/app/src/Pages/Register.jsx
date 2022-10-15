const Register = ({onLinkClick})=>{

    const handleLinkClick = event => {
        event.preventDefault()
    
        onLinkClick()
    } 
    return (
        <>
        <div>
           Register
        </div>
         <a className="anchor" href="#" onClick={handleLinkClick}>register va Settingns</a>
         </>
    )
}

export default Register