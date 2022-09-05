import withContext from '../utils/withContext'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ContMain from '../components/ContMain'

function HomePage({onLoginClick,context: { handleFeedback }}) {

    const handleLoginClick= () =>{
        onLoginClick()
    }

    return <div className="container container--full container--width homePage">
        <Header onLoginClick={handleLoginClick}/>

        <main className="main-home">
        <ContMain />

        </main>

        <Footer />
    </div>
}
export default withContext(HomePage)