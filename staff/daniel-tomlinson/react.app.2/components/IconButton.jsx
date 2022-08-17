function IconButton(props) {
    return <button class="transparent-button" onClick={props.onClick}><span class="material-symbols-outlined">${props.text}</span></button>
}

