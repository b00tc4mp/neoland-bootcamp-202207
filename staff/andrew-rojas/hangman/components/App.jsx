class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = { view: 'select word', result: null, wordShown: null, counter: 10 }
  }

  handleOnChooseWordFormSubmit = event => {
    const wordSelected = event.target.input.value

    event.target.reset()

    this.setState({ result: wordSelected, view: 'playing', wordShown: "_".repeat(wordSelected.length) })
  }

  handleOnCharacterForm = event => {
    const charTried = event.target.input.value 

    event.target.reset()

      //Verifico si el caracter esta en el resultado
      if (this.state.result.includes(charTried)) {
        // Transformo la palara mostrada en array
        let newWordShown = this.state.wordShown.split('')

        //localizo los indices en los que esta el caracter y modifico la palabra mostrada en esos indices
        for (let i = 0; i < this.state.result.length; i++)
           if(this.state.result[i] === charTried) 
            newWordShown[i] = charTried

        // Modifico el estado
        this.setState({ wordShown: newWordShown.join('')})
           
      } else {
        const newCounter = this.state.counter - 1

        this.setState({ counter:newCounter })

      }
  }
  
  render() {
    return (
      <main>

        {this.state.view === "select word" &&
           <Form placeholder = "enter a word" onSubmit = {this.handleOnChooseWordFormSubmit} buttonText="START" />
        }

        { this.state.view === "playing" &&
         <>
           <h1 className = "wordShown">{this.state.wordShown}</h1>
           <Form placeholder = "enter a character" buttonText = "TRY" onSubmit={this.handleOnCharacterForm} />
         </>
      }

      </main>
    )
  }
}