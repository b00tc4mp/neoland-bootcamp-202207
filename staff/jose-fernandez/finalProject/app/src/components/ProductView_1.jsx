import { useParams } from "react-router-dom"
import { useState, useEffect ,useRef} from "react"
import retrieveProductExtend from "../logic/retrieveProductExtend";
import withContext from '../utils/withContext'
import './ProductView.css'
// import './ProductsList.css'
import IconButton from './Buttons/IconButton'

//TODO mejorar

function ProductView({ context: { handleFeedback } }) {
    const params = useParams()
    const [productToDisplay, setProduct] = useState()
    const productId = params.productId

    // const [current, setCurrent] = useState(0);
    // const length = productToDisplay.gallery.length;

    useEffect(() => {
        try {
            retrieveProductExtend(productId, (error, product) => {
                console.log(product, 'Product desde el callback')
                if (error) handleFeedback({ message: error.message, level: 'error' })

                setProduct(product)
            })

        } catch (error) {
            handleFeedback({ message: error.message, level: 'error' })
        }
    }, [])

    const handleReturnClick = () => {
        window.history.go(-1)
    }

  


    return <>{productToDisplay && <section className="container-section--product" >
        <div className="container-product ">
            <div className="item--products one">
                <IconButton addClass="close" text="close" onClick={handleReturnClick} />
            </div>

            <div className="container-title">
                <div className="nameGener">
                    <h1>{productToDisplay.name} ({productToDisplay.categ})</h1>

                </div>
                <div className="container-price">
                    <div className="product-price">
                        $ {productToDisplay.price}
                    </div>
                </div>
            </div>
            {productToDisplay.gallery && productToDisplay.gallery.map((image, index) => <div className="item--products" key={index}  >
                <div className="featurette-icon">
                    <img className='featurette-icon--img products' src={image} alt="" />
                </div>

            </div>)}
            <div className="gallerySection">

            </div>
           

        </div>
    </section>}
    </>
}

export default withContext(ProductView)