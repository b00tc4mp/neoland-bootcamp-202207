import IconButton from './Buttons/IconButton'
import Loggito from '../utils/Loggito'

function NewNoteForm({onCloseClick,onArrowLeft,onFeedback}) {
    const logger = new Loggito('NewNoteForm')

    logger.info('return')


    return <form className="formcreateNote" name="formcreateNote" onSubmit={event => {
            event.preventDefault()

            const newText = event.target.value

            if (newText === ""){ 
                onFeedback({ message: "Nota Vacia Descartada", level: 'info' })
                    // logger.warn(error.message)
                onCloseClick()}
            else {
                onArrowLeft(newText)

                event.target.reset()
            }
        }}>

        <button className="btn_arrLeft" type="submit"  >
            <IconButton addClass="arrow_back" text="arrow_back"/>
        </button>

        <li className="list__itemNew">
            <textarea className="list__item-textNew" id="newNote" name="newItemNote"
                placeholder="New Note!!"
            ></textarea>
        </li>

    </form>
}

export default NewNoteForm