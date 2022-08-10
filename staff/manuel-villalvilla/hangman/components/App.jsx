class App extends React.Component {
    constructor() { // quito los props
        super() // quito los props

        this.state = startGame()
    }

    handleWordFormSubmit = (event) => {
        //event.preventDefault()

        const selectedWord = event.target.input.value.toLowerCase()

        if (!selectedWord)
            return

        const underScoreWord = '_ '.repeat(event.target.input.value.length)

        this.setState({ view: 'playing', result: selectedWord, underScoreWord })
    }

    handleCharSumbit = (event) => {
        // event.preventDefault(). Ya esta escrito en la funcion 

        const char = event.target.input.value.toLowerCase()
        // destructuring: creo 3 constantes (result, underScoreWord y leftAttempts), saco sus valores invocando al objeto state como propiedad
        // del objeto this
        let { state: { result, underScoreWord, leftAttempts } } = this

        let indexOfChar = result.indexOf(char)

        if (!char) {
            leftAttempts--

            if (leftAttempts === 0)
                this.setState({ view: 'gameover' })

            this.setState({ leftAttempts })
            return
        }

        while (indexOfChar >= 0) {
            underScoreWord = underScoreWord.replaceAt(indexOfChar * 2, char)
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
        this.setState(startGame())
    }

    render() {
        return <main>

            <h1>HANGMAN</h1>

            { this.state.view === 'select word' &&
                <Form placeholder="enter a word" type="password" onSubmit={this.handleWordFormSubmit} maxLength="10" buttonText="START" required={true} />
            }

            { this.state.view !== 'select word' &&
                <HiddenWordWithAttempts hiddenWord={this.state.underScoreWord} leftAttempts={this.state.leftAttempts} />
            }

            { this.state.view === 'playing' &&
                <Form placeholder="enter 1 character" type="text" onSubmit={this.handleCharSumbit} maxLength="1" buttonText="TRY" />
            }

            { this.state.view === 'gameover' &&
                // el siguiente tag es para pasar mas de un hijo
                <>
                    <p className="hiddenWord">YOU LOSE</p>
                    <PlayAgainButton onClick={this.handlePlayAgainButton} />
                </>
            }

            { this.state.view === 'win' &&
                <>
                    <p className="hiddenWord">YOU WIN</p>
                    <PlayAgainButton onClick={this.handlePlayAgainButton} />
                </>
            }

        </main>
    }
}