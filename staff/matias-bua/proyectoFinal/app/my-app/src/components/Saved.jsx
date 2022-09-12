import Loggito from '../utils/Loggito'
import withContext from '../utils/withContext'
import authenticateUser from '../logics/authenticateUser'
import { useReducer } from 'react'


function Saved({ onLinkClick, context: { handleFeedback }}) {
    const logger = new Loggito('Settings')




    return   <div className="form__field">
            <h3 className="tittleProfile"> Your saveds </h3>
    <label htmlFor="category">Choose your category</label>
    <input className="input" type="text" name="category" placeholder="category" id="category" />
</div>
}

export default withContext(Saved)