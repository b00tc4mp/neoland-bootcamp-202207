class App extends React.Component{
    constructor(){
        super()

        this.state = {result: null}
    }

    handleSubmit = event => {
        event.preventDefault()

        const result = eval(event.target.operations.value)
        
        this.setState({result})
    }

    render(){
        return(
            <main>
                <form onSubmit={this.handleSubmit}>
                    <textarea name="operations"></textarea>
                    <button>=</button>
                </form>
                <p>Resultado: {this.state.result}</p>
            </main>
        )
    }
}