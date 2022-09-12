import { useState, useEffect } from 'react'
import withContext from '../utils/withContext'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Home from '../components/Home'
import retrieveUser from '../logics/retrieveUser'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import Loggito from '../utils/Loggito'
import Profile from '../components/Profile'
import Saved from '../components/Saved'
import NewAuction from '../components/NewAuction'
import Mail from '../components/Mail'
import Setting from '../components/Setting'

function HomePage({ onLogoutClick, onSettingsClick, context: { handleFeedback } }) {


  const logger = new Loggito('HomePage')

  // const [name, setName] = useState(null)
  // const [notes, setNotes] = useState(null)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
      logger.info('"componentDidMount"')

      try {
          retrieveUser(sessionStorage.token, (error, user) => {
              if (error) {
                  handleFeedback({ message: error.message, level: 'error' })

                  logger.warn(error.message)

                  onLogoutClick()

                  return
              }

              // setName(user.name)

              logger.debug('setName', user.name)
          })
      } catch (error) {
          handleFeedback({ message: error.message, level: 'error' })

          logger.warn(error.message)
      }

      // loadNotes()
  }, [])

  const handleProfileClick = () => {
      navigate('profile')

      logger.debug('navigate to list')

      logger.info('return')
  }
  const handleHomeClick = () => {
      navigate('home')

      logger.debug('navigate to Home')

      logger.info('return')
  }

  const handleSavedClick = () => {
      navigate('saved')

      logger.debug('navigate to Saved`s')

      logger.info('return')
  }

  const handleNewAuctionClick = () => {
    navigate('newauction')

    logger.debug('navigate to New Auction')

    logger.info('return')
}

const handleMailClick = () => {
  navigate('mail')

  logger.debug('navigate to mails')

  logger.info('return')
}
const handleSettingClick = () => {
  navigate('setting')
  
  logger.info('return')
}

  return <div className="HeaderHome">
    <Header onLogoutClick={onLogoutClick} onSettingsClick={onSettingsClick}/>

    

    <Routes>
      <Route path="profile" element={<Profile/>}/>
      <Route path="home" element={<Home/>}/>
      <Route path="saved" element={<Saved/>}/>
      <Route path="newauction" element={<NewAuction/>}/>
      <Route path="mail" element={<Mail/>}/>
      <Route path="settings" element={<Setting/>}/>

    </Routes> 

    <div className="footer">
   <Footer onProfileClick={handleProfileClick} onHomeClick={handleHomeClick} onSavedClick={handleSavedClick} onNewAuctionClick={handleNewAuctionClick} onMailClick={handleMailClick}/>
   </div>

   </div>
  }

export default withContext(HomePage)