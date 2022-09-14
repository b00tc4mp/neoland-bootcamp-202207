import Loggito from '../utils/Loggito'
import withContext from '../utils/withContext'
import { ServerError } from 'errors'
import createProduct from '../logic/createProduct'

function CreateProduct({ onCreate, context:{handleFeedback} }) {
  const  logger = new Loggito(CreateProduct.name)

  logger.info('constructor')

  logger.info('return')



  const handleFormSubmit = event => {
    event.preventDefault()

    const form = event.target

    const productNameInput = form.productName 
    const categoryInput = form.category
    const quantityInput = form.quantity 
    const descriptionInput = form.description

    const productName = productNameInput.value
    const category = categoryInput.value
    const quantity = quantityInput.value
    const description = descriptionInput.value

      try {
        createProduct(productName, category, quantity, description, (error) => {
          if(error) {
            if (error instanceof ServerError) { 
            handleFeedback({ message: error.message, level: 'error' })

            logger.warn(error.message)
          }
          return
        }

        logger.debug('create product')

        onCreate()
      })
    }catch (error) {
      handleFeedback({ message: error.message, level: 'error' })

      logger.warn(error.message)
    }
  }

  return ( 
  
  <>
  <div className="grid-create">
    <div className="item-create">
      <div className="container-form-2">  

      <form className="form-create" onSubmit={handleFormSubmit}>
      <div className="form__field">
        <label htmlFor="productName">Product name :</label>
        <input className="input" type="text" name="productName" placeholder="productName" id="productName"/>
      </div>

      <div className="form__field">
        <label htmlFor="category">Category :</label>
        <input className="input" type="text" name="category" placeholder="category" id="category"/>
      </div>

      <div className="form__field">
        <label htmlFor="quantity">Quantity :</label>
        <input className="input" type="number" name="quantity" placeholder="quantity" id="quantity"/>
      </div>

      <div className="form__field">
        <label htmlFor="description">Description :</label>
        <input className="input" type="text" name="description" placeholder="description" id="description"/>
      </div>

     </form>
      </div>   
    </div>
  </div>

  <button className="button-create" type="submit">Create</button>
  </>
  )  
}

export default withContext(CreateProduct)