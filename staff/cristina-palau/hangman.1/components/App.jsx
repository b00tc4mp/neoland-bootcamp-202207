class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = startGame()
    }

    handleOnChooseWordFormSubmit = event => {
        const wordSelected = event.target.input.value

        event.target.reset()

        const state = chooseWord(wordSelected, this.state)

        this.setState(state)
    }

    handleOnTryCharFormSubmit = event => {
        const character = event.target.input.value

        event.target.reset()

        const state = tryAChar(character, this.state)

        this.setState(state)
    }

    playAgainOnClick = event => {
        event.preventDefault()

        this.setState(startGame())
    }
    
    render() {
        return (
            <main>

                {this.state.view === "select word" &&
                    <>
                        <h1 className="game title">Hangman Game</h1>
                        <Form inputType="password" placeholder="enter a word" onSubmit={this.handleOnChooseWordFormSubmit} buttonText="START" />
                    </>
                }

                {this.state.view === "playing" &&
                    <>
                        <h1 className="game title">Hangman Game</h1>
                        <h2 className="wordShown">{this.state.wordShown}</h2>
                        <Form inputType="text" placeholder="enter a character" onSubmit={this.handleOnTryCharFormSubmit} buttonText="TRY" />
                        <p className="triesLeft">tries left: {this.state.triesLeft}</p>
                    </>
                }

                {this.state.view === "winner" &&
                    <>
                        <h1 className="endGame"> congratulations!! you win! </h1>
                        <EndGame onPlayAgainClick={this.playAgainOnClick} result={this.state.result} triesLeft={this.state.triesLeft} />
                    </>
                }

                {this.state.view === "loser" &&
                    <>
                        <h1 className="endGame">you lose! unlucky!</h1>
                        <EndGame onPlayAgainClick={this.playAgainOnClick} result={this.state.result} triesLeft={this.state.triesLeft} />
                    </>
                }

            </main>
        )
    }
}