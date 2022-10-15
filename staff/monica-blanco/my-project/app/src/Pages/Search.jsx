import Header from "../components/Header"
function Search({onLinkClick, onClick}) {
    
    const handleLinkClick = event => {
            event.preventDefault()
        
            onLinkClick()
        } 
         return (
            <div>
                <Header/>
               search
        <img src="https://media0.giphy.com/media/osAcIGTSyeovPq6Xph/200w.gif?cid=82a1493bj0ogbe0skwz8to1pzm5zkzywsrfb14503z8s1swm&rid=200w.gif&ct=g"/>
        <a className="anchor" href="#" onClick={handleLinkClick}>search va Login</a>
        <a className="anchor" href="#" onClick={handleLinkClick}>search va Home</a>
      
            </div>
        )
    }
    export default Search