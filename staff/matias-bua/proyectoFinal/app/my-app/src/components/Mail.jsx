import Loggito from '../utils/Loggito'
import withContext from '../utils/withContext'
import authenticateUser from '../logics/authenticateUser'
import { useReducer } from 'react'


function Mail({ onLinkClick, context: { handleFeedback }}) {
    const logger = new Loggito('Settings')




    return <main className="mailContainer">
            
        <div className="form__field">
        <h3 className="Imbox"> imbox </h3>
        <label htmlFor="category">messages</label>
        <input className="input" type="text" name="Imbox" placeholder="Imbox" id="Imbox" />
    </div>

    <div className="form__field">
        <label htmlFor="WriteMail">Write Mail</label>
        <label htmlFor="subCategory">Destinatary</label>    
        <input className="input" type="text" name="subCategory" placeholder="subCategory" id="subCategory" />
        <button>Send</button>
    </div>

    </main>
    
}

export default withContext(Mail)