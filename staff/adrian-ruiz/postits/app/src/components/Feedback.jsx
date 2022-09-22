import "./Feedback.css"
import Toaster from './Toaster'
function Feedback({level, message, onClick}) {
    return <>
    {(level ==='success' || level === 'warning') && 
    <Toaster level={level} message={message} onClick={onClick}/> }
    
    {level ==='error' && 
    <div className={`page Feedback Feedback--${level? level : 'info'}`}>
        <div className="Feedback__box">
            <p>{message}</p>
            <button className="FeedbackButton" onClick={onClick}>Accept</button>
            <div className="FeedbackTimer"></div>
        </div>
    </div>}
    </>
}

export default Feedback