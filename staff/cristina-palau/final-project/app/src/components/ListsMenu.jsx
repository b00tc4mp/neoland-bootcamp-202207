import { Routes, Route, useNavigate } from 'react-router-dom'
import withContext from '../utils/withContext'
import Loggito from '../utils/loggito'
import NewList from './NewList'


function ListsMenu({ onBackClick, context: { reloadThePage } }) {
    const logger = new Loggito('Recipes')
    const navigate = useNavigate()

    const handleNavigationLists= () => {

        navigate('/lists')

        logger.debug('navigate to recipes')
    }

    const handleNavigationNewList = event => {
        event.preventDefault()

        navigate('newlist')

        logger.debug('navigate to new recipe')
    }

    return <Routes>
        <Route path="/" element={<>

            <div className="buttonContainer"><button className='transparentButton homeButton' onClick={onBackClick}>
                <span className="material-symbols-outlined">keyboard_backspace</span></button></div>

            <div className="addrecipe addRecipe">
                <button className="addRecipe__button transparentButton" onClick={handleNavigationNewList}><span className="material-symbols-outlined">add_circle</span> </button>
            </div>

        </>} />
        <Route path="newlist" element={<>
            <NewList onBackClick={handleNavigationLists} />
        </>} />

    </Routes>
}

export default withContext(ListsMenu)