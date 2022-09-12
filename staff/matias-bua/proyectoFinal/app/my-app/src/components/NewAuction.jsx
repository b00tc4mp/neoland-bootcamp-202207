import Loggito from '../utils/Loggito'
import withContext from '../utils/withContext'
import authenticateUser from '../logics/authenticateUser'
import { useReducer } from 'react'


function NewAuction({ onLinkClick,onCreateAuctionClick, context: { handleFeedback }}) {
    const logger = new Loggito('Settings')

    // handleFormSubmit = (event) => {
    //     event.preventDefault()

    //     const form = event.target

    //     const category = form.category.value
    //     const subCategory = form.subCategory.value
    //     const infoSell = form.infoSell.value
    //     const aboutYou = form.aboutYou.value

    //     createAuction( sessionStorage.token, category, subCategory, infoSell, aboutYou)

    
    // }


    return <main className="profileContainer">
    <form className="form" action="https://www.google.com/search" method="get" /*</main>onSubmit={handleFormSubmit}*/>
            

    <div className="form__field">
        <h3 className="tittleProfile"> New Auction </h3>
        <label htmlFor="category">Choose your category</label>
        <input className="input" type="text" name="category" placeholder="category" id="category" />
    </div>

    <div className="form__field">
        <label htmlFor="subCategory">subCategory</label>
        <input className="input" type="text" name="subCategory" placeholder="subCategory" id="subCategory" />
    </div>

    <div className="form__field">
        <label htmlFor="infoSell">What do you sell</label>
        <input className="input" type="text" name="infoSell" placeholder="What do you sell" id="infoSell" />
    </div>

    <div className="form__field">
        <label htmlFor="aboutYou">aboutYou</label>
        <input className="input" type="text" name="aboutYou" placeholder="something about yourself" id="aboutYou" />
    </div>

    {/* <div className='buttons buttons-login'> */}
    
        <a className="anchor" href="register" /*onClick={handleLinkClick}*/>Create Auction</a>
    {/* </div> */}
</form>

</main>
}

export default withContext(NewAuction)