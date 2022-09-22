function FilterNotesButtons({handleFilterNotes}){
    return <div className="filterNotesButtonsContainer">
    <button className="filterNotesButtons filterAll" onClick={() => handleFilterNotes('all')}>All</button>
    <button className="filterNotesButtons filterBlue" onClick={() => handleFilterNotes('blue')}>Blue</button>
    <button className="filterNotesButtons filterRed" onClick={() => handleFilterNotes('red')}>Red</button>
    <button className="filterNotesButtons filterGreen" onClick={() => handleFilterNotes('green')}>Green</button>
    <button className="filterNotesButtons filterOrange" onClick={() => handleFilterNotes('orange')}>Orange</button>
    <button className="filterNotesButtons filterPurple" onClick={() => handleFilterNotes('#7d19c4')}>Purple</button>
    <button className="filterNotesButtons filterGrey" onClick={() => handleFilterNotes('grey')}>Grey</button>
</div>
}

export default FilterNotesButtons