function IconButtonMainItemsMenuPanel(props){
    return <div className="btnBack">
    <span className="material-symbols-outlined btn-menu" onClick={props.onClick}>{props.text}</span>
    </div>
}
