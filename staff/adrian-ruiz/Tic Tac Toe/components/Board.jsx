function Board(props){
    const board = props.board
    const onBoardBoxClick = props.onBoardBoxClick

    return(
        <>
        <div className="board">
        <div className="boardBox" data-index="0" onClick={onBoardBoxClick}>{board[0]}</div>
        <div className="boardBox" data-index="1" onClick={onBoardBoxClick}>{board[1]}</div>
        <div className="boardBox" data-index="2" onClick={onBoardBoxClick}>{board[2]}</div>
        <div className="boardBox" data-index="3" onClick={onBoardBoxClick}>{board[3]}</div>
        <div className="boardBox" data-index="4" onClick={onBoardBoxClick}>{board[4]}</div>
        <div className="boardBox" data-index="5" onClick={onBoardBoxClick}>{board[5]}</div>
        <div className="boardBox" data-index="6" onClick={onBoardBoxClick}>{board[6]}</div>
        <div className="boardBox" data-index="7" onClick={onBoardBoxClick}>{board[7]}</div>
        <div className="boardBox" data-index="8" onClick={onBoardBoxClick}>{board[8]}</div>
        </div>
        </>
    )
}