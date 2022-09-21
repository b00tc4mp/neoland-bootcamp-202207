import Slider from 'infinite-react-carousel'
import { useParams } from "react-router-dom"
import { useState, useEffect, useRef } from "react"
import retrieveProductExtend from "../logic/retrieveProductExtend";
import withContext from '../utils/withContext'
import './ProductView.css'
import './Carousel.css'
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

    return <>{productToDisplay && <div className="container-section--product cat2" >
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
            <div className="item-product">
                <div className="content--item" key={index}  >
                    <img className='featurette-img--products' src={image} alt="" />
                </div>

            </div>
            <section>
                <div className="container-pay">
                    <p>Paga en 3 plazos sin intereses de 20,00€.
                        <span className="logo">Klarna</span>
                        .
                        <button className="link">Más información</button>
                    </p>
                </div>

                <div className="btn-cart">
                    <a href="https://www.javascript.com/" >
                        <span>AÑADIR AL CARRITO</span>
                        <img className='featurette-icon--img' src="https://i.postimg.cc/KYqFk224/right-arrow.png" alt="" />
                    </a>
                </div>

            </section>

        </div>
    </div>}
    </>
}

export default withContext(ProductView)