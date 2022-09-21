import Loggito from '../utils/Loggito'
import withContext from '../utils/withContext'
import authenticateUser from '../logics/authenticateUser'
import { useReducer } from 'react'


function Saved({ onLinkClick, context: { handleFeedback }}) {
    const logger = new Loggito('Settings')




    return <div className="containerSavedAuction">
           <h3> Saved </h3>
    
</div>
}

export default withContext(Saved)