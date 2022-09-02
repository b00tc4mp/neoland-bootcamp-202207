function IconButton({onClick,text,addClass}){
    return <span className={`material-symbols-outlined ${addClass}`} onClick={onClick}>{text}</span>
}