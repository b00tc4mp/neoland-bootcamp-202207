class Search extends React.Component {
    constructor(props) {
        super(props)

        this.state = { results: [] }
    }

    handleSubmit = event => {
        event.preventDefault()

        const query = event.target.query.value

        const results = this.props.items.filter(item => item.includes(query))

        //this.state.results = results // ERROR do not mutate state directly
        this.setState({ results })
    }

    render() {
        return <section>
            <h2>{this.props.title}</h2>
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="query"></input>
                <button>Search</button>
            </form>
            
            <List title="results" items={this.state.results} />
        </section>
    }
}