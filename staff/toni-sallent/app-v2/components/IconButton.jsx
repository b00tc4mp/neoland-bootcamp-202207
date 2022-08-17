function IconButton({ text, onClick }){
    return <button className="transparent-button" onClick={onClick}><span className="material-symbols-outlined">{text}</span></button>
}