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
    constructor() {
        super()

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
    <h1>Hello, ${this.state.name} ${this.state.surname}! you are ${this.state.age} yo</h1>
    <button onClick={this.handleClick}>click me</button>
</main>`)
    }
}

// <App />

const app = new App

app.render()
app.componentDidMount()

// VM6497:52 <main>
//     <h1>Hello, null Pan! you are null yo</h1>
//     <button onClick={this.handleClick}>click me</button>
// </main>
// VM6497:44 call API and get user session data
// undefined

app.handleClick()
// VM6497:40 {name: null, surname: 'Pan', age: null}
// undefined
// VM6497:52 <main>
//     <h1>Hello, Peter-8 Pan! you are 23 yo</h1>
//     <button onClick={this.handleClick}>click me</button>
// </main>

app.handleClick()
// VM6497:40 {name: 'Peter-8', surname: 'Pan', age: 23}
// undefined
// VM6497:52 <main>
//     <h1>Hello, Peter-6 Pan! you are 99 yo</h1>
//     <button onClick={this.handleClick}>click me</button>
// </main>

app.handleClick()
// VM6497:40 {name: 'Peter-6', surname: 'Pan', age: 99}
// undefined
// VM6497:52 <main>
//     <h1>Hello, Peter-9 Pan! you are 93 yo</h1>
//     <button onClick={this.handleClick}>click me</button>
// </main>

// // when dismounting from DOM
app.componentDidUnmount()
// VM6497:48 call API and remove session data
// undefined