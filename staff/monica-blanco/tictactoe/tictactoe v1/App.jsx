class App extends React.Component {
  constructor() {
      super()

      this.state = { symbol: 'x', board: new Array(9).fill(null), winner: null }
  }

  handleCellClick = event => {
      let winner = this.state.winner

      if (winner)
          return

      const cell = event.target

      const index = cell.dataset.index

      let symbol = this.state.symbol

      const board = this.state.board.slice(0)

      if (board[index])
          return
      else
          board[index] = symbol

      if (board[0] !== null && board[0] === board[1] && board[1] === board[2])
          winner = symbol
      else if (board[3] !== null && board[3] === board[4] && board[4] === board[5])
          winner = symbol
      else if (board[6] !== null && board[6] === board[7] && board[7] === board[8])
          winner = symbol
      else if (board[0] !== null && board[0] === board[3] && board[3] === board[6])
          winner = symbol
      else if (board[1] !== null && board[1] === board[4] && board[4] === board[7])
          winner = symbol
      else if (board[2] !== null && board[2] === board[5] && board[5] === board[8])
          winner = symbol
      else if (board[0] !== null && board[0] === board[4] && board[4] === board[8])
          winner = symbol
      else if (board[2] !== null && board[2] === board[4] && board[4] === board[6])
          winner = symbol

      if (symbol === 'x')
          symbol = 'o'
      else
          symbol = 'x'

      this.setState({ symbol, board, winner })
  }

  handlePlayAgainClick = () => this.setState({ symbol: 'x', board: new Array(9).fill(null), winner: null })

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
          {/* <p>{this.state.winner ? `winner: ${this.state.winner}` : null}</p> */}
          {this.state.winner && <>
              <p>winner: {this.state.winner}</p>
              <button onClick={this.handlePlayAgainClick}>Play again</button>
          </>}
      </div>
  }
}

  