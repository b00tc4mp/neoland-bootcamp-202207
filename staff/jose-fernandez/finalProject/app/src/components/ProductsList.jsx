
import './ContMain.css'
import './ProductsList.css'
// import IconButton from './Buttons/IconButton'

function ProductsList({ products,onCloseClick}) {
    // const handleCloseClick = () => {
    //     onCloseClick()
    // }
    return <section className="container-section products ">
    <div className="container-products">
        <div className="item--products one">
            <h1>PRODUCTS</h1>
            {/* <IconButton addClass="close" text="close" onClick={handleCloseClick} /> */}
        </div>
        {/* {products && products.filter(_product => _product.categ === "women").map() */}
        {products && products.map(product => <div className="item--products" key={product.id}>
            <div className="featurette-icon">
                <img className='featurette-icon--img products' src={product.img} alt="" />
            </div>
            <p>${product.price}</p>
            <h3>{product.name}</h3>
        </div>)}
    </div>

</section>
}

export default ProductsList