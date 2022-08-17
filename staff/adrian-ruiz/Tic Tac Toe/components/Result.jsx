function Result(props){
    const winner = props.winner
    const onPlayAgainClick = props.onPlayAgainClick

    return winner && <>
    <p>{winner.length === 1 ? 'winner' : 'draw'}: {winner}</p>
    <button onClick={onPlayAgainClick}>Play again</button>
    </>
}