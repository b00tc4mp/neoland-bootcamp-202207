function Result(props) {
    const result = props.result
    const onPlayAgainClick = props.onPlayAgainClick

    return result && <>
        <p>{result.length === 1 ? 'winner' : 'draw'}: {result}</p>
        <button className="button" onClick={onPlayAgainClick}>Play again</button>
    </>
}