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

// VM5291:38 <main>
//     <h1>Hello, null Pan! you are null yo</h1>
//     <button onClick={this.handleClick}>click me</button>
// </main>
// undefined

app.handleClick()
// VM5291:34 {name: null, surname: 'Pan', age: null}
// undefined
// VM5291:38 <main>
//     <h1>Hello, Peter-9 Pan! you are 58 yo</h1>
//     <button onClick={this.handleClick}>click me</button>
// </main>

app.handleClick()
// VM5291:34 {name: 'Peter-9', surname: 'Pan', age: 58}
// undefined
// VM5291:38 <main>
//     <h1>Hello, Peter-7 Pan! you are 79 yo</h1>
//     <button onClick={this.handleClick}>click me</button>
// </main>

app.handleClick()
// VM5291:34 {name: 'Peter-7', surname: 'Pan', age: 79}
// undefined
// VM5291:38 <main>
//     <h1>Hello, Peter-10 Pan! you are 48 yo</h1>
//     <button onClick={this.handleClick}>click me</button>
// </main>

app.handleClick()
// VM5291:34 {name: 'Peter-10', surname: 'Pan', age: 48}
// undefined
// VM5291:38 <main>
//     <h1>Hello, Peter-9 Pan! you are 34 yo</h1>
//     <button onClick={this.handleClick}>click me</button>
// </main>