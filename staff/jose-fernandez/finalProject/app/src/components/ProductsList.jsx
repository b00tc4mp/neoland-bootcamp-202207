// import './'
// import Loggito from '../utils/Loggito'
import './ContMain.css'

function ProductsList({ products}) {

    return <section className="container-section products ">
    <div className="container-products">
        <div className="item--products one">
            <h1>PRODUCTS</h1>
        </div>
        {/* <ProductsList product={products}/> */}
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