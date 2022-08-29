function NewNoteForm(props){
    const logger = new Loggito(NewNoteForm.name)

    logger.info('constructor')

    logger.info('render')

    const handleNewNoteCloseClick =()=> props.onNewNoteCloseClick()

    //handleFormSubmit=(callback)=>{

    const handleFormNewNote=(callback)=>{
        this.formCreateNote.onsubmit = event => {
            event.preventDefault()
            const formText = event.target.innerText
            

            if (formText === "") alert('nothing')

            else {
                callback(formText)

                event.target.reset()

                // this.reset()
            }

            // this.main.removeChild(this.formCreateNote)
            // this.main.prepend(this.listPanel.container)
            // this.footer.append(this.btnPlus)
        }
    }

    return <form className="formcreateNote" name="formcreateNote" onSubmit={handleFormSubmit}>

    <button className="btn_arrLeft" type="submit" onClick={handleNewNoteCloseClick}>
        <i className="fa-solid fa-arrow-left"></i>
    </button>

    <li className="list__itemNew">
        <p  contenteditable="true" className="list__item-textNew"  id="newNote" name="newItemNote"
            placeholder="New Note!!"></p>
    </li>

</form>
}