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
        }else{
            const positions = this.getIndexes(word, char)
            const positionsx2 = positions.map((index) => {
                return index * 2
            })
            const newWord = this.replaceIndexes(this.state.underscoredWord, char, positionsx2)
                
            this.setState({underscoredWord: newWord})
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

    render(){
        return(
            <main>
                <h1>HANGMAN GAME</h1>

                {this.state.view === 'select word' && 
                <Form placeholder="enter a word" onSubmit={this.handleOnNewWordSubmit} buttonText="START" />
                }

                {this.state.view === "playing" &&
                    <>
                        <h1>{this.state.underscoredWord}</h1>
                        <h2>Tries left: {this.state.tries}</h2>
                        <Form placeholder="enter a character" buttonText="TRY" onSubmit={this.handleOnTrySubmit} />
                    </>
                }
            </main>
        )
    }
}