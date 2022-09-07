function Search(props) {
    const handleSubmit = event => {
        event.preventDefault()

        const query = event.target.query.value

        const results = props.items.filter(item => item.includes(query))

        console.table(results) // WARN cannot re-render a function component in React old-school (old version)
    }

    return <section>
        <h2>{props.title}</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" name="query"></input>
            <button>Search</button>
        </form>
        {/* <List title="results" items={results} /> */}
    </section>
}