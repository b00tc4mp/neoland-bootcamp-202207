class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = { view: 'select word', result: null ,wordShown: null, counter: 10}
    }

    handleOnChooseWordFormSubmit = event => {
        event.preventDefault()

        const wordSelected = event.target.input.value
        this.setState({ result: wordSelected, view: 'playing',wordShown:"_".repeat(wordSelected.length) })
       
    }

    handleOnCharacterForm = event =>{
        const charTried = event.target.input.value

        event.target.reset()

        //VERIFICO SI EL CARACTER ESTÁ EN EL RESULTADO
        if(this.state.result.includes(charTried)){
            //TRANSFORMO LA PALABRA MOSTRADA EN ARRAY
            let newWordShown= this.state.wordShown.split('')

            //LOCALIZO LOS INDICES EN LOS QUE ESTA EL CARACTER Y MODIFICO LA PALABRA MOSTRADA EN ESOS INDICES
            for(let i=0;i<this.state.result.length;i++)
                if(this.state.result[i]=== charTried)
                    newWordShown[i] = charTried

            //MODIFICO EL ESTADO
            this.setState({wordShown: newWordShown.join('')})
        }else{
            const newCounter = this.state.counter-1

            this.setState({counter: newCounter})
        }
    }

    render() {
        return (
            <main>
                {this.state.view === "select word" && <Form placeholder="enter a word" onSubmit={this.handleOnChooseWordFormSubmit} buttonText="START" />}

                {this.state.view === "playing" && <>
                    <h1 className="wordShown">{this.state.wordShown}</h1>
                    <Form placeholder="enter a character" buttonText="TRY" onSubmit={this.handleOnCharacterForm}/>
                   
                </>
                }

            </main>
        )
    }
}