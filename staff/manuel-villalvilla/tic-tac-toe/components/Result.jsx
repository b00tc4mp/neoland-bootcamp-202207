function Result(props) {
    const handlePlayAgainClick = props.onPlayAgainClick

    return (
        // Ejemplo a continuacion de como meter un estilo
        <>
            <p style={{fontSize: '30px', color: 'red'}}>Winner: <span style={{color: 'coral'}}>{props.winner}</span></p>
            <button className="play-again-button" onClick={handlePlayAgainClick}>PLAY AGAIN</button>
        </>
    )
}