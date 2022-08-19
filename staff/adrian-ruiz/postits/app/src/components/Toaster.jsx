import './Toaster.css'
function Toaster({level, message, onClick}){
    return <div className={`Toaster Toaster--${level}`}>
        <button className="Toaster__closeButton" onClick={onClick}>✖</button>
        <p>{message}</p>
        <div className="ToasterTimer"></div>
    </div> 
}

export default Toaster