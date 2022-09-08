import { useEffect, useState } from 'react'
import InventorySummaryBox from '../components/InventorySummaryBox'
import './Inventory.css'
import EnhancedTable from '../components/InventoryTable'
import { retrieveStock } from '../logic'
import { toaster } from 'evergreen-ui'

function Inventory() {
    const [stock, setStock] = useState(null)

    useEffect(() => {
        ;(async () => {
            try {
                const stock = await retrieveStock(sessionStorage.UserToken)
                setStock(stock)
                console.log('i fire once');
                
            } catch (error) {
                toaster.warning('Something went wrong', {duration : 2.5, description: error.message})
            }
        })()
    },[])
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
            <div className='inventory__products'>
                {stock && <EnhancedTable stock={stock}/>}
            </div>
        </div>
    )
}

export default Inventory