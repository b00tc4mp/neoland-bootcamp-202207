function Board (props){
    const board = props.board
    const handleCellClick = props.handleCellClick

   return 
        <div className="board">
            <div className="board__cell" data-index="0" onClick={handleCellClick}>{board[0]}</div>
            <div className="board__cell" data-index="1" onClick={handleCellClick}>{board[1]}</div>
            <div className="board__cell" data-index="2" onClick={handleCellClick}>{board[2]}</div>
            <div className="board__cell" data-index="3" onClick={handleCellClick}>{board[3]}</div>
            <div className="board__cell" data-index="4" onClick={handleCellClick}>{board[4]}</div>
            <div className="board__cell" data-index="5" onClick={handleCellClick}>{board[5]}</div>
            <div className="board__cell" data-index="6" onClick={handleCellClick}>{board[6]}</div>
            <div className="board__cell" data-index="7" onClick={handleCellClick}>{board[7]}</div>
            <div className="board__cell" data-index="8" onClick={handleCellClick}>{board[8]}</div>
        </div>
       
}