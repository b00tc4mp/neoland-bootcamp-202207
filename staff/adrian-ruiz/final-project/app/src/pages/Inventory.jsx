import InventorySummaryBox from '../components/InventorySummaryBox'
import './Inventory.css'

function Inventory() {
    return (
        <div className="main-section__inventory">
            <button className='inventory__newProductButton'>New Product</button>
            <div className='inventory__summary'>
                <div className='inventory__summaryTitle'>Summary</div>
                <div className='inventory__summaryCategories'>
                    <InventorySummaryBox category='Out of stock' color='red' stock='33' />
                    <InventorySummaryBox category='Out of stock' color='orange' stock='33' />
                    <InventorySummaryBox category='Out of stock' color='purple' stock='33' />
                    <InventorySummaryBox category='Out of stock' color='green' stock='33' />
                    <InventorySummaryBox category='Out of stock' color='blue' stock='33' />
                    <InventorySummaryBox category='Out of stock' color='red' stock='33' />
                </div>
            </div>
            <div className='inventory__products'></div>
        </div>
    )
}

export default Inventory