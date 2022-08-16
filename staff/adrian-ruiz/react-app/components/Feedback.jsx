function Feedback({level, message, onClick}) {
    return <div className={`page Feedback Feedback--${level? level : 'info'}`}>
        <div className="Feedback__box">
            {message}
            <button className="FeedbackButton" onClick={onClick}>Accept</button>
        </div>
    </div>
}