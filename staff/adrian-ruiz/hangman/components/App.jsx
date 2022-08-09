class App extends React.Component{
    constructor(props){
        super(props)

        this.state = {view:'select word', wordSelected: null, tries: null, underscoredWord: null}
    }

    handleOnNewWordSubmit = event => {
        event.preventDefault()

        const wordSelected = event.target.input.value
        const underscoredWord = "_ ".repeat(wordSelected.length)
        this.setState({wordSelected: wordSelected, view:'playing', underscoredWord, tries:10})
    }

    handleOnTrySubmit = event => {
        event.preventDefault()
        const char = event.target.input.value.toLowerCase()
        const word = this.state.wordSelected.toLowerCase()

        if(!(word.includes(char))){
            this.setState({tries: this.state.tries-=1})
            if(this.state.tries === 0)
            this.setState({view:'Loose'})
        }else{
            const positions = this.getIndexes(word, char)
            const positionsx2 = positions.map((index) => {
                return index * 2
            })
            const newWord = this.replaceIndexes(this.state.underscoredWord, char, positionsx2)
                
            this.setState({underscoredWord: newWord})
            if(newWord.indexOf('_')=== -1)
                this.setState({view: 'win'})
        }   
    }

    getIndexes(string, char){
        let result = []
        for(let i = 0; i < string.length; i++){
            if(string[i] === char)
                result.push(i)
        }
        return result
    }

    replaceIndexes(string, char, indexes){
        let result = ''
        let startFrom = 0
        for(let i = 0; i < indexes.length; i++){
            for(let j = startFrom; j < string.length; j++){
                if( j === indexes[i]){
                    result += char
                    startFrom = j+1
                    break
                }
                else result += string[j]
            }
        }
        for(let i = startFrom; i < string.length; i++){
            result += string[i]
        }
        return result
    }

    handlePlayAgainClick = () => {
        this.setState({view:'select word', wordSelected: null, tries: null, underscoredWord: null})
    }

    render(){
        return(
            <main className="mainContainer">
                <h1>HANGMAN GAME</h1>

                {this.state.view === 'select word' && 
                <Form placeholder="enter a word" onSubmit={this.handleOnNewWordSubmit} buttonText="START" />
                }

                {this.state.view === "playing" &&
                    <>
                        <h2>{this.state.underscoredWord}</h2>
                        <h2>Tries left: {this.state.tries}</h2>
                        <Form placeholder="enter a character" buttonText="TRY" onSubmit={this.handleOnTrySubmit} />
                    </>
                }

                {this.state.view === 'Loose' &&
                <>
                <h2>You Loose</h2>
                <small>The word was: {this.state.wordSelected}</small><br />
                <button onClick={this.handlePlayAgainClick}>Play again</button>
                </>
                }

                {this.state.view === 'win' &&
                <>
                <h2>Congrats! You win!</h2>
                <h2>The word was: {this.state.wordSelected}</h2>
                <h2>You still had: {this.state.tries} tries left</h2>
                <button onClick={this.handlePlayAgainClick}>Play Again</button>
                </>
                }
            </main>
        )
    }
}