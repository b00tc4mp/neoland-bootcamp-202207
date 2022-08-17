function chooseWord(wordSelected, state) {
    let tries = 5

    if (wordSelected.length === 0) alert('enter your word')
    else if (wordSelected.length < 3) alert('your word is too short')

    else
        state = { result: wordSelected, view: 'playing', triesLeft: tries, wordShown: "_".repeat(wordSelected.length) }

    return state
}