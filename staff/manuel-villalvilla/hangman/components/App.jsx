class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = { view: 'select word', result: null, underScoreWord: null, leftAttempts: 10 }
    }
    
    handleWordFormSubmit = (event) => {
        event.preventDefault()
        
        const selectedWord = event.target.input.value

        if (!selectedWord)
            return

        const underScoreWord = '_ '.repeat(event.target.input.value.length)

        this.setState({ view: 'playing', result: selectedWord, underScoreWord })
    }

    handleCharSumbit = (event) => {
        event.preventDefault()

        const char = event.target.input.value.toLowerCase()

        let result = this.state.result.toLowerCase()
        let indexOfChar = result.indexOf(char)
        let underScoreWord = this.state.underScoreWord
        let leftAttempts = this.state.leftAttempts

        if (!char) {
            leftAttempts--
            if (leftAttempts === 0)
                this.setState({ view: 'gameover' })
            this.setState({ leftAttempts })
            return
        }

        while (indexOfChar >= 0) {
            underScoreWord = underScoreWord.replaceAt(indexOfChar*2, char)
            result = result.replaceAt(indexOfChar, '_')
            indexOfChar = result.indexOf(char)
        }

        leftAttempts--
        this.setState({ leftAttempts, underScoreWord })

        if (underScoreWord.indexOf('_') === -1) {
            this.setState({ view: 'win' })
            event.target.reset()
            return
        }
        if (leftAttempts === 0) {
                this.setState({ view: 'gameover' })
        }
        event.target.reset()
    }

    handlePlayAgainButton = () => {
        this.setState({ view: 'select word', leftAttempts: 10, result: null, underScoreWord: null })
    }

    render() {
        return <main>

            <h1>HANGMAN</h1>

            { this.state.view === 'select word' && 
                <Form placeholder="enter a word" type="password" onSubmit={this.handleWordFormSubmit} maxLength="10" buttonText="START" required={true} /> 
            }

            { this.state.view === 'playing' && 
                // el siguiente tag es para pasar mas de un hijo
                <> 
                    <HiddenWordWithAttempts hiddenWord={this.state.underScoreWord} leftAttempts={this.state.leftAttempts}/>
                    <Form placeholder="enter 1 character" type="text" onSubmit={this.handleCharSumbit} maxLength="1" buttonText="TRY" />
                </>
            }

            { this.state.view === 'gameover' &&
                <>
                    <HiddenWordWithAttempts hiddenWord={this.state.underScoreWord} leftAttempts={this.state.leftAttempts}/>
                    <span className="hiddenWord">YOU LOSE</span>
                    <PlayAgainButton onClick={this.handlePlayAgainButton} />
                </>
            }

            { this.state.view === 'win' &&
                <>
                    <HiddenWordWithAttempts hiddenWord={this.state.underScoreWord} leftAttempts={this.state.leftAttempts}/>
                    <span className="hiddenWord">YOU WIN</span>
                    <PlayAgainButton onClick={this.handlePlayAgainButton} />
                </>
            }

        </main>
    }
}