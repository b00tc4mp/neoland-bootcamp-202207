/* function Search(props) {
    const handleSubmit = (event) => {
        event.preventDefault()

        const query = event.target.query.value

        const results = props.items.filter(item => item.includes(query))

        console.log(query)

        console.table(results)
    }

    return <section>
        <h2>{props.title}</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" name="query"></input> 
            <button>Search</button>
        </form>
    </section>
} */


class Search extends React.Component {
    constructor(props) {
        super(props)

        this.state = {results: []}
    }

    handleSubmit = (event) => {
        event.preventDefault()

        const query = event.target.query.value

        const results = this.props.items.filter(item => item.includes(query))

        // this.state.results = results // Error, do not update state directly. Use setState() instead:
        this.setState({ results })
    }

    render() {
    <section>
        <h2>{this.props.title}</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" name="query"></input> 
            <button>Search</button>
        </form>
        <List title="results" items={this.state.results} />
    </section>
    }
}