function EndGame({result, tries, word}){
    return(
        <>
        <h2>{result === 'Loose' ? 'You Loose': 'Congrats! You Win!'}</h2>
        <p>{tries ? `Attempts left: ${tries}` : 'No more tries left'}</p>
        <small>The word was: {word}</small>
        </>
    )
}