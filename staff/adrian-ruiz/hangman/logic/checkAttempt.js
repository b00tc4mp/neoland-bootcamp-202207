function checkAttempt(char, {wordSelected, underscoredWord, tries}) {

    /*Fede*/
    // const underscoredArray = underscoredWord.split('')
    /*Fede*/

    if (!(wordSelected.includes(char))) {
        tries--
        if (tries === 0)
            return { view: 'Loose', tries }
        else return { tries }
    } else {

        /*Fede*/
        // for (let i = 0; i < word.length; i++)
        //     if (word[i] === char)
        //         underscoredArray[i * 2] = char

        // const newWord = underscoredArray.join('')

        // if (newWord.indexOf('_') === -1)
        //     return { view: 'win', underscoredWord: newWord }

        // return { underscoredWord: newWord }
        /*Fede*/

        const positions = getIndexes(wordSelected, char)
        const positionsx2 = positions.map((index) => {
            return index * 2
        })
        const newWord = replaceIndexes(underscoredWord, char, positionsx2)
        if (newWord.indexOf('_') === -1)
            return { view: 'win', underscoredWord: newWord }

        return { underscoredWord: newWord }
    }
}