class App extends React.Component {
    constructor() {
        super()

        this.state = { result: null }
    }

    handleSubmit = event => {
        event.preventDefault()

        const form = event.target
        const operationsTextarea = form.operations
        const operations = operationsTextarea.value

        const result = eval(operations)

        //this.state.result = result // NO! do not mutate state directly. use setState.
        this.setState({ result })
    }

    render() {
        return <main>
            <form onSubmit={this.handleSubmit}>
                <textarea name="operations"></textarea>
                <button>=</button>
            </form>
            <p>{this.state.result}</p>
        </main>
    }
}