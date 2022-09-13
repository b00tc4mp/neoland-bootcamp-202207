import { useEffect,useState } from 'react'
import retrieveUser from '../logic/retrieveUser'
import retrieveProducts from '../logic/retrieveProducts'

import withContext from '../utils/withContext'
import Profile from '../components/Profile'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ContMain from '../components/ContMain'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import Search from '../components/Search'

function HomePage({ onLogoutClick,onLoginClick, context: { handleFeedback } }) {

    const [name, setName] = useState(null)
    const [email, setEmail] = useState(null)
    const [products, setProducts] = useState(null)
    const [query, setQuery] = useState(null)


    // const [view, setView] = useState('list')
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        if(sessionStorage.token){
            try {
                retrieveUser(sessionStorage.token, (error, user) => {
                    if (error) {
                        handleFeedback({ message: error.message, level: 'error' })
    
                        onLogoutClick()
                        return
                    }
                    setName(user.name)
                    setEmail(user.email)
                })
            } catch (error) {
                handleFeedback({ message: error.message, level: 'error' })
            }
            loadProducts()
        }
        else{
            loadProducts()
        }
    }, [])

    useEffect(() => {
        loadProducts()
    }, [query])

    const loadProducts = () => {
        try {
            retrieveProducts( (error, products) => {
                if (error) {
                    handleFeedback({ message: error.message, level: 'error' })

                    return
                }
                setProducts(products)
            })
        } catch (error) {
            handleFeedback({ message: error.message, level: 'error' })
        }
    }

    const handleLoginClick = () => {
        onLoginClick()
    }

    const handleProfileClick = () => {

        navigate('profile')

        // loadProducts()
    }

    // const handleSearchClick = () => {
    //     // loadProducts()
        
    // }

    const handleReturnProductList = () => {
        // loadProducts()
        navigate('/')
    }

    const handleUpdateName = (newName) => setName(newName)
    const handleUpdateEmail = (newEmail) => setEmail(newEmail)
    const handleSearch = query =>{
        navigate('search')
     setQuery(query)
    }
        

    // return email?
    return <div className="container container--full container--width homePage">
        <Header onLoginClick={handleLoginClick} onProfileClick={handleProfileClick} onSearch={handleSearch} />

        <main className="main-home">
            <Routes>
                <Route path="/" element={<ContMain products={products}/>} />
                <Route path='search' element={<Search onCloseClick={handleReturnProductList}/> }/>
                {/* <Route path="profile" element={<Profile onCloseClick={handleReturnProductList} email={email} onUpdateEmail={handleUpdateEmail} onUpdateName={handleUpdateName} />} /> */}
                {/* {email ?
                    <Route path="profile" element={<Profile onCloseClick={handleReturnProductList} email={email} onUpdateEmail={handleUpdateEmail} onUpdateName={handleUpdateName} />} />
                    :
                    <Route path="login" element={<ContMain />} />
                } */}
            </Routes>
        </main>

        <Footer />
    </div>
    // :
    // null
}
export default withContext(HomePage)