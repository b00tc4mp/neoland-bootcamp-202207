class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = { view: 'select word', result: null, underScoreWord: null, leftAttemps: 10 }
    }
    
    handleWordFormSubmit = (event) => {
        event.preventDefault()
        
        const selectedWord = event.target.input.value

        const underScoreWord = '_ '.repeat(event.target.input.value.length)

        this.setState({ view: 'playing', result: selectedWord, underScoreWord })
    }

    handleCharSumbit = (event) => {
        event.preventDefault()

        const char = event.target.input.value.toLowerCase()

        let result = this.state.result.toLowerCase()
        let indexOfChar = result.indexOf(char)
        let underScoreWord = this.state.underScoreWord

        while (indexOfChar >= 0) {
            underScoreWord = underScoreWord.replaceAt(indexOfChar*2, char)
            result = result.replaceAt(indexOfChar, '_')
            indexOfChar = result.indexOf(char)
        }

        this.setState({ leftAttemps: this.state.leftAttemps - 1, underScoreWord })

        event.target.reset()
    }

    render() {
        return <main>
            
            { this.state.view === 'select word' && 
                <Form placeholder="enter a word" onSubmit={this.handleWordFormSubmit} maxLength="10" buttonText="START"/> 
            }

            { this.state.view === 'playing' && 
                // el siguiente tag es para pasar mas de un hijo
                <> 
                    <h1>{this.state.underScoreWord}</h1>
                    <h5>{this.state.leftAttemps} tries left</h5>
                    <Form placeholder="enter a char" onSubmit={this.handleCharSumbit} maxLength="1" buttonText="TRY"/>
                </>
            }

        </main>
    }
}