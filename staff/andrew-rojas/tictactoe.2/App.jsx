class App extends React.Component {
  constructor() {
    super()

    this.state = { player: 'x', board: new Array(9).fill(null), result: null}
  }

  handleCellClick = event => {
    const cell = event.target 
    
    const index = cell.dataset.index

    let state = makeAMove(index, this.state)

    this.setState(state)   
  }

  handlePlayAgainClick = () => this.setState ({ player: 'x', board: new Array(9).fill(null), result: null })

  render() {
    return <div className="container">
      <div className="board">
        <div className="board__cell" data-index="0" onClick={this.handleCellClick}>{this.state.board[0]}</div>
        <div className="board__cell" data-index="1" onClick={this.handleCellClick}>{this.state.board[1]}</div>
        <div className="board__cell" data-index="2" onClick={this.handleCellClick}>{this.state.board[2]}</div>
        <div className="board__cell" data-index="3" onClick={this.handleCellClick}>{this.state.board[3]}</div>
        <div className="board__cell" data-index="4" onClick={this.handleCellClick}>{this.state.board[4]}</div>
        <div className="board__cell" data-index="5" onClick={this.handleCellClick}>{this.state.board[5]}</div>
        <div className="board__cell" data-index="6" onClick={this.handleCellClick}>{this.state.board[6]}</div>
        <div className="board__cell" data-index="7" onClick={this.handleCellClick}>{this.state.board[7]}</div>
        <div className="board__cell" data-index="8" onClick={this.handleCellClick}>{this.state.board[8]}</div>
      </div>
    
      {this.state.result && <>
        <p>{this.state.result.length === 1? 'winner' : 'draw'}:{this.state.result}</p>
        <button onClick={this.handlePlayAgainClick}>Play Again</button>
      </>}
    </div>
  }
}