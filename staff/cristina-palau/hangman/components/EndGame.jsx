function EndGame(props) {
    const onPlayAgainClick = props.onPlayAgainClick
    const result = props.result
    const triesLeft = props.triesLeft
    
    return (
    <div>
        
        <h2>the word was: {result}</h2>
        <p>tries left: {triesLeft} </p>
        <button onClick={onPlayAgainClick}>Play Again</button>
    </div>
    )
}