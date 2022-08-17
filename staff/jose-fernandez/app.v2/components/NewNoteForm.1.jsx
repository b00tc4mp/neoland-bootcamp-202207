function NewNoteForm(props) {
    const logger = new Loggito('NewNoteForm')

    logger.info('render')


    return <form className="formcreateNote" name="formcreateNote" onSubmit={event => {
            event.preventDefault()

            const newText = event.target.innerText

            if (newText === ""){ alert('nothing')
                props.onCloseClick()}
            else {
                props.onArrowLeft(newText)

                event.target.reset()
            }
        }}>

        <button className="btn_arrLeft" type="submit"  >
            <i className="fa-solid fa-arrow-left"></i>
        </button>

        <li className="list__itemNew">
            <p suppressContentEditableWarning="true" contenteditable="true" className="list__item-textNew" id="newNote" name="newItemNote"
                placeholder="New Note!!"
            ></p>
        </li>

    </form>
}