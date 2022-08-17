function IconButton({onClick, text}) {
    return <button className="transparent-button" onClick={onClick}><span className="material-symbols-outlined">{text}</span></button>
}