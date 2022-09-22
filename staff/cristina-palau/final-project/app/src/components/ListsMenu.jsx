import { Routes, Route, useNavigate } from 'react-router-dom'
import Loggito from '../utils/loggito'
import NewList from './NewList'
import List from './List'
import { retrieveUserLists, retrieveUser, retrieveList, deleteList } from '../logic'
import { useState, useEffect } from 'react'
import UserLists from './UserLists'
import Header from './Header'
import withContext from '../utils/withContext'
import ViewUserList from './ViewUserList'
import { toast } from 'react-toastify'

function ListsMenu({ onBackClick, context: { reloadThePage } }) {

    const logger = new Loggito('Recipes')

    const [userLists, setUserLists] = useState(null)
    const [list, setList] = useState(null)

    const navigate = useNavigate()

    useEffect(() => { // override
        logger.info('componentDidMount')

        try {
            retrieveUser(sessionStorage.token, (error, user) => {
                if (error) {

                    toast.error(error.message, { position: toast.POSITION.TOP_CENTER, theme: "colored" })

                    logger.warn(error.message)

                    return
                }

                loadUserLists(user)
            })
        } catch (error) {

            toast.error(error.message, { position: toast.POSITION.TOP_CENTER, theme: "colored" })

            logger.warn(error.message)
        }
    }, [])

    const handleClickList = listId => {
        try {
            retrieveList(sessionStorage.token, listId, (error, list) => {

                if (error) {

                    toast.error(error.message, { position: toast.POSITION.TOP_CENTER, theme: "colored" })

                    logger.warn(error.message)

                    return
                }

                setList(list)

                navigate(`mylists/${listId}`)
            })

        } catch (error) {

            toast.error(error.message, { position: toast.POSITION.TOP_CENTER, theme: "colored" })

            logger.warn(error.message)
        }
    }

    const handleDeleteList = listId => {

        try {
            deleteList(sessionStorage.token, listId, error => {
                if (error) {

                    toast.error(error.message, { position: toast.POSITION.TOP_CENTER, theme: "colored" })

                    logger.warn(error.message)
                    return
                }

            })

            toast.success('your list has been deleted', { position: toast.POSITION.TOP_CENTER, theme: "colored", autoClose: 2000 })

            setTimeout(retardedReload, 2000)

            function retardedReload() {
                reloadThePage()
            }

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


    const handleViewList = listId => {
        try {
            retrieveList(sessionStorage.token, listId, (error, list) => {

                if (error) {

                    logger.warn(error.message)

                    return
                }

                setList(list)

                navigate(`viewList/${listId}`)
            })

        } catch (error) {

            logger.warn(error.message)
        }
    }

    const loadUserLists = () => {
        try {
            retrieveUserLists(sessionStorage.token, (error, userLists) => {

                if (error) {


                    logger.warn(error.message)

                    return
                }

                setUserLists(userLists)

                logger.debug('setUserLists', userLists)
            })
        } catch (error) {

            logger.warn(error.message)
        }
    }
    return <Routes>
        <Route path="/" element={<>
            <Header text="Mis listas" />
            <div className="buttonContainer"><button className='transparentButton homeButton' onClick={onBackClick}>
                <span className="material-symbols-outlined">keyboard_backspace</span></button></div>
            <UserLists userLists={userLists} onBackClick={handleNavigationLists} onListClick={handleClickList} onDeleteList={handleDeleteList} onViewClick={handleViewList} />
            <footer className="addForm addList">
                <button className="addButton transparentButton" onClick={handleNavigationNewList}><span className="material-symbols-outlined grey">add_circle</span> </button>
            </footer>

        </>} />
        <Route path="newlist" element={<>
            <NewList onBackClick={handleNavigationLists} />
        </>} />

        <Route path="mylists/:id" element={<>
            <List list={list} onBackClick={handleNavigationLists} />
        </>} />

        <Route path="viewlist/:id" element={<>
            <ViewUserList list={list} onBackClick={handleNavigationLists} />
        </>} />

    </Routes>
}

export default withContext(ListsMenu)