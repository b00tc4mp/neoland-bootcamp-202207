
import { useParams } from "react-router-dom"
import { useState, useEffect, useRef } from "react"
import retrieveProductExtend from "../logic/retrieveProductExtend";
import withContext from '../utils/withContext'
import './ProductView.css'
import './Carousel.css'
// import './ProductsList.css'
import IconButton from './Buttons/IconButton'
import ModalCart from "./ModalCart";

//TODO mejorar
function ProductView({ onCart, context: { handleFeedback } }) {
    const params = useParams()
    const [imgCurrent, setImgCurrent] = useState(0)
    const [productToDisplay, setProduct] = useState()
    const [modalState, setModalState] = useState(false)
    const productId = params.productId
    const qtyImg = productToDisplay


    // console.log(qtyImg)

    // let size = useRef(null)

    // size.children.forEach(button=>{
    //     //TODO BOTONES 
    // })

    useEffect(() => {
        try {
            console.log(productId,"productID")
            retrieveProductExtend(productId, (error, product) => {
                // console.log(product, 'Product desde el callback')
                if (error) handleFeedback({ message: error.message, level: 'error' })
                if (product !== undefined || product !== null) {
                    setProduct(product)
                }
                console.log(product)


            })

        } catch (error) {
            handleFeedback({ message: error.message, level: 'error' })
        }
    }, [])

    console.log(productToDisplay)

    // const handleCart = () => {
    //     onCart()
    // }


    const handleFormSubmitCart = (event, productToDisplayId) => {
        setModalState(productToDisplayId)
    }
    // =========================
    const handleCloseModal = () => setModalState(null)



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

            {/* =====================Slider====================== */}
            <div className="slider-product">
                <div className="slider-content">
                    <IconButton text="arrow_back" />
                    {productToDisplay.gallery.map((image, index) => {
                        imgCurrent === index && <div className="slider-content--item" key={index}  >
                            <img className='featurette-img--products' src={image} alt="" />
                        </div>
                    })}
                    <IconButton text="arrow_forward" />
                </div>
            </div>

            {/* ================================================== */}

            <form onSubmit={(event) => {
                handleFormSubmitCart(event, productToDisplay.id)
            }}>
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
                    <a type="submit"  >
                        <span >AÑADIR AL CARRITO</span>
                        <img className='featurette-icon--img' src="https://i.postimg.cc/KYqFk224/right-arrow.png" alt="" />
                    </a>
                </div>

            </form >

        </div>
        {/* TODO feedback modal añadido al carrito correctamente */}
        {modalState && <ModalCart onCart={onCart} onClose={handleCloseModal} />}
    </div>}
    </>
    debugger
}

export default withContext(ProductView)