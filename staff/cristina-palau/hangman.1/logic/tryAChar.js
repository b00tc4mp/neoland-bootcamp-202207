function tryAChar(character, state) {

    let tries = state.triesLeft
    let wordShown = state.wordShown
    const wordSelected = state.result

    if (character.length !== 1) alert('enter a character')

    if (wordSelected.includes(character)) {

        let newWordShown = state.wordShown.split('')

        for (let i = 0; i < wordSelected.length; i++) {
            if (wordSelected[i] === character)
                newWordShown[i] = character

        }

        wordShown = newWordShown.join('')

        wordShown.includes('_') ? state = { triesLeft: tries, wordShown} : state = { triesLeft: tries, wordShown, view: 'winner' }    
    }

    else {
        tries -= 1

        tries !== 0 ? state = { triesLeft: tries } : state = { triesLeft: tries, view: 'loser' }
    }

    return state
}

