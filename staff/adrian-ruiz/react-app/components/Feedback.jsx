function Feedback({level, message, onClick}) {
    return <div className={`page Feedback Feedback--${level? level : 'info'}`}>
        <div className="Feedback__box">
            <p>{message}</p>
            <button className="FeedbackButton" onClick={onClick}>Accept</button>
            <div className="FeedbackTimer"></div>
        </div>
    </div>
}