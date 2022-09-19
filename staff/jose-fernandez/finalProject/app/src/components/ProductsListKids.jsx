// import './'
// import Loggito from '../utils/Loggito'
import './ContMain.css'
import './ProductsList.css'
import IconButton from './Buttons/IconButton'

function ProductsListKids({ products,onProductClick,onCloseClick }) {
    const handleCloseClick = () => {
        onCloseClick()
    }
    const handleProductClick=()=>{
        onProductClick()
    }
    
    const _products = products
    return <section className="container-section products cat ">

        <div className="container-products">
            <div className="item--products one">
                <IconButton addClass="close" text="close" onClick={handleCloseClick} />
                <h1>KIDS</h1>
            </div>
            {/* <ProductsListMen product={products}/> */}
            {_products && _products.filter(_product => _product.categ === "kids"
            ).map(product => <div className="item--products" key={product.id} onClick={handleProductClick}>
                <div className="featurette-icon">
                    <img className='featurette-icon--img products' src={product.img} alt="" />
                </div>
                <p>${product.price}</p>
                <h3>{product.name}</h3>
            </div>)}
        </div>

    </section>
}

export default ProductsListKids