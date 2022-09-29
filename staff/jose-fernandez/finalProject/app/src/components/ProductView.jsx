
import { useParams } from "react-router-dom"
import { useState, useEffect, useRef } from "react"
import retrieveProductExtend from "../logic/retrieveProductExtend";
import withContext from '../utils/withContext'
import './ProductView.css'
import './Carousel.css'
// import './ProductsList.css'
import IconButton from './Buttons/IconButton'
import Slider from 'infinite-react-carousel'
import ModalCart from "./ModalCart";

//TODO mejorar
function ProductView({ onCart, context: { handleFeedback } }) {
    const params = useParams()
    console.log(params)
    const [productToDisplay, setProduct] = useState()
    const [modal, setModal] = useState(null)
    const productId = params.productId
    let size = useRef(null)

    // size.children.forEach(button=>{
    //     //TODO BOTONES 
    // })

    useEffect(() => {
        try {
            retrieveProductExtend(productId, (error, product) => {
                // console.log(product, 'Product desde el callback')
                if (error) handleFeedback({ message: error.message, level: 'error' })

                setProduct(product)
            })

        } catch (error) {
            handleFeedback({ message: error.message, level: 'error' })
        }
    }, [])

    const handleCart = () => {
        onCart()
    }


    // =========================
    const handleAcceptModal = () => {
        const feedback = { message: null, level: null }

        setModal(feedback)

    }

    const handleModal = modal => {
        setModal(modal)

    }

    // =========================
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
            <div className="slider-product">
                <Slider className="slider-content">
                    {productToDisplay.gallery.map((image, index) => <div className="slider-content--item" key={index}  >
                        <img className='featurette-img--products' src={image} alt="" />
                    </div>)}
                </Slider>
            </div>
            <section>
                <div className="container-pay">
                    <p>Paga en 3 plazos sin intereses de 20,00€.
                        <span className="logo">Klarna</span>
                        .
                        <button className="link">Más información</button>
                    </p>
                </div>
                {/* //TODO container size */}
                 <div className="container-size">
                    {/* <div className="name-size">
                        <h3>Tallas</h3>
                    </div>
                    <div className="container-size--grid" ref={node => size = node}>
                        <button className="grid-item">3XS</button>
                        <button className="grid-item">2XS</button>
                        <button className="grid-item">XS</button>
                        <button className="grid-item">S</button>
                        <button className="grid-item">M</button>
                        <button className="grid-item">L</button>
                        <button className="grid-item">XL</button>
                        <button className="grid-item">2XL</button>
                    </div> */}
                </div>
                {/* <div className="container-qty">
                    <h3>Cantidad</h3>
                    <input type="number" value="1" />
                    
                </div> */}
                <div className="btn-cart">
                    {/* <a onClick={handleCart} productToDisplay={productToDisplay} > */}
                    <a onClick={handleModal}  >
                        <span >AÑADIR AL CARRITO</span>
                        <img className='featurette-icon--img' src="https://i.postimg.cc/KYqFk224/right-arrow.png" alt="" />
                    </a>
                </div>

            </section>

        </div>
        {/* TODO feedback modal añadido al carrito correctamente */}
        <ModalCart onCart={onCart} onReturnBuy={handleReturnClick}/>
    </div>}
    </>
}

export default withContext(ProductView)