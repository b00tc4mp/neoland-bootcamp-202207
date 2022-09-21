import { useState, useEffect } from 'react'
import withContext from '../utils/withContext'
import Footer from '../components/Footer'
import Header from '../components/Header'
import retrieveUser from '../logics/retrieveUser'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import Loggito from '../utils/Loggito'
import Profile from '../components/Profile'
import Saved from '../components/Saved'
import NewAuction from '../components/NewAuction'
import Mail from '../components/Mail'
import Setting from '../components/Setting'
import retrieveAuctions from '../logics/retrieveAuctions'
import AuctionList from '../components/AuctionList'
// import SearchAuctions from '../components/SearchAuctions'

function HomePage({ onLogoutClick, onSettingClick, context: { handleFeedback } }) {

  const logger = new Loggito('HomePage')

  const [ auctions, setAuctions ] = useState(null)
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

        logger.debug('setName', user.name)
      })
    } catch (error) {
      handleFeedback({ message: error.message, level: 'error' })

      logger.warn(error.message)
    }

    loadAuctions()
  }, [])

  const loadAuctions = () => {
    try {
      // if (!query)
          retrieveAuctions(sessionStorage.token, (error, auctions) => {
          if (error) {
            handleFeedback({ message: error.message, level: 'error' })

            logger.warn(error.message)

            return
          }
          setAuctions(auctions)

          logger.debug('setauctions', auctions)
        })
      // else
        // SearchAuctions(sessionStorage.token, /*query,*/ (error, auctions) => {
        //   if (error) {
        //     handleFeedback({ message: error.message, level: 'error' })

        //     logger.warn(error.message)

        //     return
        //   }

        //   setAuctions(auctions)

        //   logger.debug('setauctions', auctions)
        // })
    } catch (error) {
      handleFeedback({ message: error.message, level: 'error' })

      logger.warn(error.message)
    }
  }

  const handleProfileClick = () => {
    navigate('profile')

    logger.debug('navigate to list')

    logger.info('return')
  }
  const handleHomeClick = () => {
    navigate('/')

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


  return <div className="Home">
    <Header onLogoutClick={onLogoutClick} onSettingClick={handleSettingClick} />

    <Routes>
      {auctions && <Route path="/" element={<AuctionList auctions={ auctions } />} />}
      <Route path="profile" element={<Profile />} />
      {/* <Route path="home" element={<Home />} /> */}
      <Route path="saved" element={<Saved />} />
      <Route path="newauction" element={<NewAuction />} />
      <Route path="mail" element={<Mail />} />
      <Route path="setting" element={<Setting />} />
    </Routes>

    <div className="footer">
      <Footer onProfileClick={handleProfileClick} onHomeClick={handleHomeClick} onSavedClick={handleSavedClick} onNewAuctionClick={handleNewAuctionClick} onMailClick={handleMailClick} />
    </div>

  </div>
}

export default withContext(HomePage)