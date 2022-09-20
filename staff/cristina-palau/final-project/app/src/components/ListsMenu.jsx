import { Routes, Route, useNavigate } from 'react-router-dom'
import Loggito from '../utils/loggito'
import NewList from './NewList'
import retrieveUserLists from '../logic/retrieveUserLists'
import retrieveUser from '../logic/retrieveUser'
import retrieveList from '../logic/retrieveList'
import { useState, useEffect } from 'react'
import UserLists from './UserLists'

function ListsMenu({ onBackClick }) {

    const logger = new Loggito('Recipes')

    const [userLists, setUserLists] = useState(null)
    const [list, setList] = useState(null)

    const navigate = useNavigate()

    useEffect(() => { // override
        logger.info('componentDidMount')

        try {
            retrieveUser(sessionStorage.token, (error, user) => {
                if (error) {

                    logger.warn(error.message)

                    return
                }

                loadUserLists(user)
            })
        } catch (error) {

            logger.warn(error.message)
        }
    }, [])

    const handleClickList= listId => {
        try {
            retrieveList(sessionStorage.token, listId, (error, list) => {


                if (error) {

                    logger.warn(error.message)

                    return
                }

                setList(list)


                navigate(`mylists/${listId}`)
            })

        } catch (error) {

            logger.warn(error.message)
        }
    }

    const handleNavigationLists = () => {

        navigate('/lists')

        logger.debug('navigate to lists')
    }

    const handleNavigationNewList = event => {
        event.preventDefault()

        navigate('newlist')

        logger.debug('navigate to new list')
    }


    const loadUserLists = () => {
        try {
            retrieveUserLists(sessionStorage.token, (error, userLists) => {
                debugger
                if (error) {


                    logger.warn(error.message)

                    return
                }
                debugger
                setUserLists(userLists)
                debugger
                logger.debug('setUserLists', userLists)
            })
        } catch (error) {

            logger.warn(error.message)
        }
    }
    return <Routes>
        <Route path="/" element={<>

            <div className="buttonContainer"><button className='transparentButton homeButton' onClick={onBackClick}>
                <span className="material-symbols-outlined">keyboard_backspace</span></button></div>

            <div className="addrecipe addRecipe">
                <button className="addRecipe__button transparentButton" onClick={handleNavigationNewList}><span className="material-symbols-outlined">add_circle</span> </button>
            </div>
            <UserLists userLists={userLists} onBackClick={handleNavigationLists} onListClick={handleClickList} />

        </>} />
        <Route path="newlist" element={<>
            <NewList onBackClick={handleNavigationLists} />
        </>} />

        <Route path="mylists/:id" element={<>
            <List list={list} onBackClick={handleNavigationLists} />
        </>} />



    </Routes>
}

export default ListsMenu