class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = { view: 'select word', result: null }
    }

    handleOnChooseWordFormSubmit = event => {
        event.preventDefault()

        const wordSelected = event.target.input.value
        this.setState({ result: wordSelected, view: 'playing' })
       

    }

    render() {
        return (
            <main>
                {this.state.view === "select word" && <Form placeholder="enter a word" onSubmit={this.handleOnChooseWordFormSubmit} buttonText="START" />}

                {this.state.view === "playing" && <>
                    <h1>{"_ ".repeat(this.state.result.length)}</h1>
                    <Form placeholder="enter a character" buttonText="TRY" />
                   
                </>
                }

            </main>
        )
    }
}