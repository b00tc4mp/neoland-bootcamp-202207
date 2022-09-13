import { useEffect, useState } from 'react'
import retrieveUser from '../logic/retrieveUser'
import retrieveProducts from '../logic/retrieveProducts'
import searchProducts from '../logic/searchProducts'

import withContext from '../utils/withContext'
import Profile from '../components/Profile'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ContMain from '../components/ContMain'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import Search from '../components/Search'
import ProductsListMen from '../components/ProductsListMen'
import ProductsListWomen from '../components/ProductsListWomen'
import ProductsListKids from '../components/ProductsListKids'
// import Menu from '../components/Menu'

function HomePage({ onLogoutClick, onLoginClick, context: { handleFeedback } }) {

    const [name, setName] = useState(null)
    const [email, setEmail] = useState(null)
    const [products, setProducts] = useState(null)
    const [query, setQuery] = useState(null)


    // const [view, setView] = useState('list')
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        if (sessionStorage.token) {
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
        else {
            loadProducts()
        }
    }, [])

    useEffect(() => {
        loadProducts()
    }, [query])

    const loadProducts = () => {
        try {
            if (!query)
                retrieveProducts((error, products) => {
                    if (error) {
                        handleFeedback({ message: error.message, level: 'error' })

                        return
                    }

                    setProducts(products)
                })
            else
                searchProducts(query, (error, products) => {
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

    const handleSearchClick = () => {
        navigate('search')

    }

    const handleReturnMain = () => {
        // loadProducts()
        navigate('/')
    }

    const handleListProductsMen = () => {
        navigate('listProductsMen')
    }
    const handleListProductsWomen = () => {
        navigate('listProductsWomen')
    }
    const handleListProductsKids = () => {
        navigate('listProductsKids')
    }

    // const handleUpdateName = (newName) => setName(newName)
    // const handleUpdateEmail = (newEmail) => setEmail(newEmail)
    const handleSearch = query => setQuery(query)



    // return email?
    return <div className="container container--full container--width homePage">
        {location.pathname === '/' && <Header products={products} onLoginClick={handleLoginClick} onListProductsMen={handleListProductsMen} onListProductsWomen={handleListProductsWomen} onListProductsKids={handleListProductsKids} onProfileClick={handleProfileClick} onSearchClick={handleSearchClick} onSearch={handleSearch} />}

        <main className="main-home">
            <Routes>
                <Route path="/" element={<ContMain products={products} />} />
                <Route path='search' element={<Search onCloseClick={handleReturnMain} />} />
                {/* <Route path="menu" element={<Menu products={products} onCloseClick={handleReturnMain}/>} /> */}
                <Route path='listProductsMen' element={<ProductsListMen products={products} onCloseClick={handleReturnMain} />} />
                <Route path='listProductsWomen' element={<ProductsListWomen products={products} onCloseClick={handleReturnMain} />} />
                <Route path='listProductsKids' element={<ProductsListKids products={products} onCloseClick={handleReturnMain} />} />
                {/* <Route path="profile" element={<Profile onCloseClick={handleReturnMain} email={email} onUpdateEmail={handleUpdateEmail} onUpdateName={handleUpdateName} />} /> */}
                {/* {email ?
                    <Route path="profile" element={<Profile onCloseClick={handleReturnMain} email={email} onUpdateEmail={handleUpdateEmail} onUpdateName={handleUpdateName} />} />
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