class App extends React.Component {
    constructor() {
        super()

        this.state = { result: null }
    }

    handleFormSubmit = event => {
        event.preventDefault()

        const formula = event.target.operations.value

        const result = eval(formula)

        this.setState({ result })
    }

    render() {
        return <main>
            <form className="form" onSubmit={this.handleFormSubmit}>
                <textarea name="operations"></textarea>
                <button>=</button>
            </form>
            <p>{this.state.result}</p>
        </main>
    }
}