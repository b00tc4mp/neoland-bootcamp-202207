class App extends React.Component{
    constructor(props){
        super(props)

        this.state = {view:'select word', wordSelected: null, tries: null, underscoredWord: null}
    }

    handleOnNewWordSubmit = event => {

        const wordSelected = event.target.input.value
        const underscoredWord = "_ ".repeat(wordSelected.length)
        this.setState({wordSelected: wordSelected.toLowerCase(), view:'playing', underscoredWord, tries:10})
    }

    handleOnTrySubmit = event => {
        const char = event.target.input.value.toLowerCase()

        const state = checkAttempt(char, this.state)
        
        this.setState(state)
    }
    
    handlePlayAgainClick = () => {
        this.setState({view:'select word', wordSelected: null, tries: null, underscoredWord: null})
    }

    render(){
        return(
            <main className="mainContainer">
                <h1>HANGMAN GAME</h1>

                {this.state.view === 'select word' && 
                <Form placeholder="enter a word" type="password" onSubmit={this.handleOnNewWordSubmit} buttonText="START" />
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
                <EndGame result='Loose' /* tries={this.state.tries} */ word={this.state.wordSelected}/>
                <PlayAgainButton onClick={this.handlePlayAgainClick} />
                </>
                }

                {this.state.view === 'win' &&
                <>
                <EndGame tries={this.state.tries} word={this.state.wordSelected} />
                <PlayAgainButton onClick={this.handlePlayAgainClick} />
                </>
                }
            </main>
        )
    }
}