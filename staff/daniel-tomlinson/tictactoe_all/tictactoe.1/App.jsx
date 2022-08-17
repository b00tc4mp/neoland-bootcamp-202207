class App extends React.Component {
    constructor() {
        super()

        this.state = { count: 0, tileZero: "_", tileOne: "_", tileTwo: "_", tileThree: "_", tileFour: "_", tileFive: "_", tileSix: "_", tileSeven: "_", tileEight: "_", }
    } 

    // this.setState()

     onTileClick = event => {
        event.preventDefault()

         const board = document.querySelector('.board')

         const tileZero = document.querySelector(".tilezero")
         const tileOne = document.querySelector(".tileone")
         const tileTwo = document.querySelector(".tiletwo")
         const tileThree = document.querySelector(".tilethree")
         const tileFour = document.querySelector(".tilefour")
         const tileFive = document.querySelector(".tilefive")
         const tileSix = document.querySelector(".tilesix")
         const tileSeven = document.querySelector(".tileseven")
         const tileEight = document.querySelector(".tileeight")

        this.setState({ tileZero: "X"})
 }

/*  onTileClick0 = event => {
    event.preventDefault()

    const newCount = this.state.count + 1

    this.setState({ count: newCount})
    
    if (this.state.tileZero === "_") {
        // if (this.state.count % 2 === 0) {
            this.setState({ tileZero: "X"})
        // }
        // else this.setState({ tileZero: "0"})
    
    }
    // else this.setState({ tileZero })
 } */
 
 onTileClick1 = event => {
    event.preventDefault()
    
     this.setState({ tileOne: "X"})
 }
 onTileClick2 = event => {
    event.preventDefault()
    
     this.setState({ tileTwo: "X"})
 }
 onTileClick3 = event => {
    event.preventDefault()
    
     this.setState({ tileThree: "X"})
 }
 onTileClick4 = event => {
    event.preventDefault()
    
     this.setState({ tileFour: "X"})
 }
 onTileClick5 = event => {
    event.preventDefault()
    
     this.setState({ tileFive: "X"})
 }
 onTileClick6 = event => {
    event.preventDefault()
    
     this.setState({ tileSix: "X"})
 }
 onTileClick7 = event => {
    event.preventDefault()
    
     this.setState({ tileSeven: "X"})
 }
 onTileClick8 = event => {
    event.preventDefault()
    
     this.setState({ tileEight: "X"})
 }

render() {
    return <main>
<board className="board">
    <div className="boardTile tilezero" onClick={this.onTileClick0}><p className="textPaintArea">{this.state.tileZero}</p></div>
    <div className="boardTile tileone" onClick={this.onTileClick1}><p>{this.state.tileOne}</p></div>
    <div className="boardTile tiletwo" onClick={this.onTileClick2}><p>{this.state.tileTwo}</p></div>
    <div className="boardTile tilethree" onClick={this.onTileClick3}><p>{this.state.tileThree}</p></div>
    <div className="boardTile tilefour" onClick={this.onTileClick4}><p>{this.state.tileFour}</p></div>
    <div className="boardTile tilefive" onClick={this.onTileClick5}><p>{this.state.tileFive}</p></div>
    <div className="boardTile tilesix" onClick={this.onTileClick6}><p>{this.state.tileSix}</p></div>
    <div className="boardTile tileseven" onClick={this.onTileClick7}><p>{this.state.tileSeven}</p></div>
    <div className="boardTile tileeight" onClick={this.onTileClick8}><p>{this.state.tileEight}</p></div>
</board>
    </main>
    }

}
