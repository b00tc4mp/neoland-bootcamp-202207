class App extends React.Component {
    constructor(props){
        super(props)
        
        this.state = { view:'select word', result: null, wordShown: null, counter:4}
    }

    handleOnChooseWordFormSubmit = event => {
        const wordSelected = event.target.input.value

        event.target.reset()

        
        this.setState({result: wordSelected, view: 'playing', wordShown: "_".repeat(wordSelected.length)})
    }

    handleOnCharacterForm = event => {
        let wordShown = this.state.wordShown
        const charTried = event.target.input.value
        event.target.reset()
        
        if(this.state.result.includes(charTried)) {

            let newWordShown = this.state.wordShown.split('')
            
            for(let i = 0 ; i <this.state.result.length; i++)
                if(this.state.result[i] === charTried)
                newWordShown[i] = charTried

            this.setState({wordShown: newWordShown.join('')}) 

            // event.target.reset()

        } if (this.state.counter > 0 && wordShown.includes("_")){ //else <----
            const newCounter = this.state.counter - 1

            this.setState({ counter: newCounter})

            return
        }
        if (this.state.counter === 0) {
            this.setState({view: 'GameOver'})
        } else {
            this.setState({view: 'youwin'})
        }
    }



    handlePlayClick = () => {
        this.setState({ view: 'select word',  result: null, wordShown: null, counter:4})
    }

    render(){
        return (
            <main>


                {this.state.view === "select word" &&
                  <>
                    <h3>Write a word to start to play</h3>
                    <Form placeholder="Your word" onSubmit={this.handleOnChooseWordFormSubmit} buttonText="START" />
                  </>
                }

                {this.state.view === "playing" &&
                    <>
                        <h1 className="wordShown">{this.state.wordShown}</h1>
                        <Form placeholder="enter a character" onSubmit={this.handleOnCharacterForm} buttonText="Check Character" />
                    
                    </>
                }
                {this.state.view === "GameOver" &&
                    <>
                        <h1 className="wordShown"> ¡You Lose! </h1>
                        <p className="textWithWord">The word was: "{this.state.result}" </p>
                        <button className="buttonTryAgian" onClick={this.handlePlayClick}> ¡Try again!</button>
                    
                    </>
                }
                {this.state.view === "youwin" &&
                    <>
                        <h1 className="wordShown">¡Correct this is the word:{this.state.wordShown}!</h1>
                        <button onClick={this.handlePlayClick}> ¡Play again!</button>
                    
                    </>
                }
                
                
            </main>
        )
    }
    
}

