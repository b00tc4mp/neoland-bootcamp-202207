import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
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

    // console.log(productToDisplay)

    // const nextSlide = () => {
    //     setCurrent(current === length - 1 ? 0 : current + 1);
    // };

    // const prevSlide = () => {
    //     setCurrent(current === 0 ? length - 1 : current - 1);
    // };

    // if (!Array.isArray(productToDisplay) || productToDisplay.length <= 0) {
    //     return null;
    // }


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
            {productToDisplay.gallery && productToDisplay.gallery.map(product => <div className="item--products" key={product.id}  >
                <div className="featurette-icon">
                    <img className='featurette-icon--img products' src={product.gallery} alt="" />
                </div>

            </div>)}
            <div className="gallerySection">

            </div>
            {/* <div className="gallery-section">
                <IconButton text="arrow_circle_left" addClass='left-arrow' onClick={prevSlide} />
                <IconButton text="arrow_circle_right" addClass='right-arrow' onClick={nextSlide} />
                {productToDisplay.map((slide, index) => {
                    return (
                        <div
                            className={index === current ? 'slide active' : 'slide'}
                            key={index}
                        >
                            {index === current && (
                                <img src={slide.image} alt='travel image' className='image' />
                            )}
                        </div>
                    );
                })}
            </div> */}

        </div>
    </section>}
    </>
}

export default withContext(ProductView)