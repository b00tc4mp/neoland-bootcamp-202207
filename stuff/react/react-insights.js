class Component {
    constructor(props) {
        this.props = props
    }

    setState(state) {
        //this.state = state

        setTimeout(() => {
            for (const key in state) {
                const value = state[key]

                this.state[key] = value
            }
        }, Math.random())

        setTimeout(() => this.render(), Math.random())
    }

    componentDidMount() {
    }

    componentDidUnmount() {
    }
}

class App extends Component {
    constructor(props) {
        super(props)

        this.state = { name: null, surname: 'Pan', age: null }
    }

    handleClick = () => {
        this.setState({
            name: 'Peter' + '-' + Math.round(Math.random() * 10),
            age: Math.round(100 * Math.random())
        })

        console.log(this.state)
    }

    componentDidMount() { // override
        console.log('call API and get user session data')
    }

    componentDidUnmount() { // override
        console.log('call API and remove session data')
    }

    render() {
        console.log(`<main>
    <h1>${this.props.name}</h1>
    <h2>Hello, ${this.state.name} ${this.state.surname}! you are ${this.state.age} yo</h2>
    <button onClick={this.handleClick}>click me</button>
</main>`)
    }
}

// <App name="My App" />

//const app = new App({ name: 'My App' })

const app = new App
app.props = { name: 'My App' }

app.render()
app.componentDidMount()
// VM201:52 <main>
//     <h1>My App</h1>
//     <h2>Hello, null Pan! you are null yo</h2>
//     <button onClick={this.handleClick}>click me</button>
// </main>
// VM201:44 call API and get user session data
// undefined

app.handleClick()
// VM201:40 {name: null, surname: 'Pan', age: null}
// undefined
// VM201:52 <main>
//     <h1>My App</h1>
//     <h2>Hello, Peter-7 Pan! you are 99 yo</h2>
//     <button onClick={this.handleClick}>click me</button>
// </main>

app.handleClick()
// VM201:40 {name: 'Peter-7', surname: 'Pan', age: 99}
// undefined
// VM201:52 <main>
//     <h1>My App</h1>
//     <h2>Hello, Peter-6 Pan! you are 40 yo</h2>
//     <button onClick={this.handleClick}>click me</button>
// </main>

app.handleClick()
// VM201:40 {name: 'Peter-6', surname: 'Pan', age: 40}
// undefined
// VM201:52 <main>
//     <h1>My App</h1>
//     <h2>Hello, Peter-6 Pan! you are 67 yo</h2>
//     <button onClick={this.handleClick}>click me</button>
// </main>

app.handleClick()
// VM201:40 {name: 'Peter-6', surname: 'Pan', age: 67}
// undefined
// VM201:52 <main>
//     <h1>My App</h1>
//     <h2>Hello, Peter-8 Pan! you are 57 yo</h2>
//     <button onClick={this.handleClick}>click me</button>
// </main>

app.handleClick()
// VM201:40 {name: 'Peter-8', surname: 'Pan', age: 57}
// undefined
// VM201:52 <main>
//     <h1>My App</h1>
//     <h2>Hello, Peter-1 Pan! you are 68 yo</h2>
//     <button onClick={this.handleClick}>click me</button>
// </main>