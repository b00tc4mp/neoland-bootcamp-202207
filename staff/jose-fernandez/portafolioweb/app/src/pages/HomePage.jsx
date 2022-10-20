import Footer from '../components/Footer'
import Header from '../components/Header'
import Info from '../components/Info'

function HomePage() {
    return <div className="container container--full container--width homePage">
        <Header />

        <main className="main-home">
        <Info />

        </main>

        <Footer />
    </div>
}
export default HomePage