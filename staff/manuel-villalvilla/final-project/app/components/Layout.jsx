import Header from './Header'
import Footer from './Footer'

export default function ({ children }) {
    return <>
        <div className="container">
            <Header />
            <main className='main'>{children}</main>
            <Footer />
        </div>
    </>
}