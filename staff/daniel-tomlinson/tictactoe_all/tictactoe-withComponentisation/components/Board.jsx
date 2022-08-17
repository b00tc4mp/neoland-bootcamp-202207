function Board(props) {
    const board = props.board

    const onCellClick = props.onCellClick

    return <div className="board">
    <div className="boardTile tilezero" data-index="0" onClick={onCellClick}>{board[0]}</div>
    <div className="boardTile tileone" data-index="1" onClick={onCellClick}>{board[1]}</div>
    <div className="boardTile tiletwo" data-index="2" onClick={onCellClick}>{board[2]}</div>
    <div className="boardTile tilethree" data-index="3" onClick={onCellClick}>{board[3]}</div>
    <div className="boardTile tilefour" data-index="4" onClick={onCellClick}>{board[4]}</div>
    <div className="boardTile tilefive" data-index="5" onClick={onCellClick}>{board[5]}</div>
    <div className="boardTile tilesix" data-index="6" onClick={onCellClick}>{board[6]}</div>
    <div className="boardTile tileseven" data-index="7" onClick={onCellClick}>{board[7]}</div>
    <div className="boardTile tileeight" data-index="8" onClick={onCellClick}>{board[8]}</div>
</div>
}