import './ModalCart.css'
//TODO corregir
function ModalCart({message,level,onCart,onReturnBuy}){

import './ModalCart.css'
    return <div className={`Modal container Modal--${level? level: 'infoCart' } `}>
        <div className="Modal__box container container--spaced container--padded">
            <h2 className='textModal'> add to Cart</h2>
            <button className="button" onClick={onCart}>View Bag</button>
            <button className="button" onClick={onReturnBuy}>Continue Shopping</button>
        </div>

    </div>
}
export default ModalCart