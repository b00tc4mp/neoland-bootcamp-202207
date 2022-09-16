
import './ContMain.css'
import './ProductsList.css'
// import IconButton from './Buttons/IconButton'

function ProductsList({ products,onCloseClick}) {
    const handleCloseClick = () => {
        onCloseClick()
    }
    return <section className="container-section products">
    <div className="container-products">
        <div className="item--products one">
            {/* <IconButton addClass="close" text="close" onClick={handleCloseClick} /> */}
            <h1>PRODUCTS</h1>
        </div>
        
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