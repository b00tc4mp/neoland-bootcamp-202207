class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = { view: 'select word', result: null, wordShown: null, counter: 10 }
    }

    handleOnChooseWordFormSubmit = event => {
        // event.preventDefault()

        const wordSelected = event.target.input.value.toUpperCase().trim()
        let wShow = ''
        //for (let i = 0; i < wordSelected.length; i++) {
         
            // if (wordSelected[i] === ' ')
            //     wShow = ' '
            // else if(wordSelected[i]) {
            //     wShow = '_'.repeat(wordSelected.length).replace(' ')
            // }
        //}

         this.setState({ result: wordSelected, view: 'playing', wordShown: "_".repeat(wordSelected.length) })

        // this.setState({ result: wordSelected, view: 'playing', wordShown: wShow })

    }

    handleOnCharacterForm = event => {
        const charTried = event.target.input.value.toUpperCase()
        event.target.reset()

        let newWordShown = this.state.wordShown.split('')


        //VERIFICO SI EL CARACTER ESTÁ EN EL RESULTADO
        if (this.state.result.includes(charTried)) {
            //TRANSFORMO LA PALABRA MOSTRADA EN ARRAY

            //LOCALIZO LOS INDICES EN LOS QUE ESTA EL CARACTER Y MODIFICO LA PALABRA MOSTRADA EN ESOS INDICES
            for (let i = 0; i < this.state.result.length; i++)
                if (this.state.result[i] === charTried)
                    newWordShown[i] = charTried

            //MODIFICO EL ESTADO

            this.setState({ wordShown: newWordShown.join('') })
        } else {
            const newCounter = this.state.counter - 1
            this.setState({ counter: newCounter })
            if (newCounter === 0) {
                this.setState({ view: 'gameOver' })
            }
        }

        if (this.state.result === newWordShown.join(''))
            this.setState({ view: 'gameWin' })

    }

    handlePlayAgainClick = event => this.setState({ view: 'select word', result: null, wordShown: null, counter: 10 })

    render() {
        return (
            <main className="container" >
                {this.state.view === "select word" && <Form placeholder="enter a word" onSubmit={this.handleOnChooseWordFormSubmit} buttonText="START" />}

                {this.state.view === "playing" && <>
                    <h1 className="wordShown">{this.state.wordShown}</h1>
                    <p className="tries">{this.state.counter} tries left</p>
                    <Form placeholder="enter a character" buttonText="TRY" onSubmit={this.handleOnCharacterForm} />
                </>}
                {this.state.view === "gameOver" && <>
                    <h1 className="wordShown">{this.state.wordShown}</h1>
                    <p className="tries">{this.state.counter} tries left</p>
                    <p className="tries">The word was: "{this.state.result}"</p>
                    <h1 className="messageLW">You Lose !</h1>
                    <button className="btn_playAgain" onClick={this.handlePlayAgainClick}>Play Again</button>
                </>}
                {this.state.view === "gameWin" && <>
                    <h1 className="wordShown">{this.state.wordShown}</h1>
                    <p className="tries">{this.state.counter} tries left</p>
                    <h1 className="messageLW">You Win !</h1>
                    <button className="btn_playAgain" onClick={this.handlePlayAgainClick}>Play Again</button>
                </>}
            </main>
        )
    }
}