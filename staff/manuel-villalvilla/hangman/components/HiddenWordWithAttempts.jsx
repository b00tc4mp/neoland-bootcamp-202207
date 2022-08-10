function HiddenWordWithAttempts({hiddenWord, leftAttempts}) {
    return (
        <>
            <p className="hiddenWord">{hiddenWord}</p>
            <p className="leftAttempts">{leftAttempts} attempts left</p>
        </>
    )
}