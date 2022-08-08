function HiddenWordWithAttempts(props) {
    return (
        <>
            <span className="hiddenWord">{props.hiddenWord}</span>
            <span className="leftAttempts">{props.leftAttempts} attempts left</span>
        </>
    )
}