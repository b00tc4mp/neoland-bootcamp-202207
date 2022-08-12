class App extends React.Component {
    constructor() {
        super()

        this.state = { result: null }
    }

    handleSubmit = event => {
        event.preventDefault()

        /* const form = event.target
        
        const operationsTextarea = form.operations

        const operations = operationsTextarea.value

        const result = eval(operations) */

// all these lines can be shortened by adding . to create a chain

// const result = eval(event.target.operations.value)

        // this.setState({ result: result })
        //This can be shortened because they shar the same word for state and variable
        // this.setState({ result })

        // this is a summary of all the lines above

        this.setState({ result: eval(event.target.operations.value) })


    }


render() {
    return <main>
        <form onSubmit={this.handleSubmit}>
            <textarea name="operations">1 + 2</textarea>
            <button>=</button>
        </form>
        <p>{this.state.result}</p>
    </main>
    }

}