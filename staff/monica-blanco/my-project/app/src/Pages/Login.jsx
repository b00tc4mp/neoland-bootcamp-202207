const Login = ({onLinkClick})=>{
    const handleLinkClick = event => {
        event.preventDefault()
    
        onLinkClick()
    } 
    return (
        <>
        <div>
           Login
        </div>
         <a className="anchor" href="#" onClick={handleLinkClick}>Login va a Register</a>
         </>
    )
}

export default Login