function Result(props) {
    const result = props.result
    const onPlayAgainClick = props.onPlayAgainClick

    return result && <div className="resultBoard">
        <p>{result.length === 1 ? 'winner' : 'draw'}: {result}</p>
        <button onClick={onPlayAgainClick} className="playAgain">Play again</button>
    </div>
}

