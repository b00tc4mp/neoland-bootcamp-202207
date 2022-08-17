function Result(props) {
    const result = props.result
    const onPlayAgainClick = props.onPlayAgainClick

    return result && <>
        <p>{result.lenght === 1 ? 'Winner' : 'Draw'} : {result}</p>
        <button onClick={onPlayAgainClick}> Play Again </button>
    </>
}