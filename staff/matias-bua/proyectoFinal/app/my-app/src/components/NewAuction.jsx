import Loggito from '../utils/Loggito'
import withContext from '../utils/withContext'
import createAuction from '../logics/createAuction'



function NewAuction({ onCloseClick, context: { handleFeedback } }) {
    const logger = new Loggito('Settings')

    const handleFormSubmit = (event) => {
    event.preventDefault()

    const form = event.target

    const productName = form.productName.value
    const title = form.title.value
    const description = form.description.value
    const dateForBit = form.description.value
    const value = form.value.value
    const image = form.image.value

    createAuction( sessionStorage.token, productName, title, value, image,description)
        
    try {
        createAuction(
          sessionStorage.token,
          productName,
          title,
          description,
          dateForBit,
          value,
        //   bids,
          image,
        //   createdAt,
          error => {
            
            if (error) {

              handleFeedback({ message: error.message, level: 'warning'})

              logger.warn(error.message)
    
              return;
            }

            alert("Auction Created");
            
            handleFeedback({ message: 'Password Updated', level: 'success'})
            onCloseClick ()
            form.reset() //para limpiar el formulario luego del cambio de contraseña.//
          });

      } catch(error) {
        handleFeedback({message: error.message, level:'warning'})

        logger.warn(error.message)
      }
    }

    return <main className="profileContainer">
        <form className="form" action="https://www.google.com/search" method="get" onSubmit={handleFormSubmit} >


        <div className="form__field">
            <h2 className="tittleProfile"> Your Article </h2>
            <label htmlFor="productName">Product Name</label>
            <input className="input" type="text" name="productName" placeholder="" id="productName" />
        </div>

        <div className="form__field">
            <label htmlFor="title">Title</label>
            <input className="input" type="text" name="title" placeholder="" id="title" />
        </div>

        <div className="form__field">
            <label htmlFor="description">Description</label>
            <input className="input" type="text" name="description" placeholder="..." id="description" />
        </div>

        <div className="form__field">
            <label htmlFor="dateForBit">dateForBit</label>
            <input className="input" type="text" name="dateForBit" placeholder="" id="dateForBit" />
        </div>

        <div className="form__field">
            <label htmlFor="value">Price</label>
            <input className="input" type="number" name="value" placeholder="€" id="value" />
        </div>

        <div className="form__field">
            <label htmlFor="image">Select yours photos</label>
            <input className="input" type="text" name="image" placeholder="" id="image" />
        </div>

        {/* <div className="form__field">
            <label htmlFor="img">Select phots</label>
            <input className="input" type="text" name="img" placeholder="img" id="img" />
        </div> */}

        <button className="button" type="submit">Create Auction</button>

    </form>
   </main >
    
}

export default withContext(NewAuction)