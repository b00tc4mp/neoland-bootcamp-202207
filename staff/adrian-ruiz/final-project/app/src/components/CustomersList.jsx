import './CustomersList.css'
import { useEffect, useState } from 'react'
import EnhancedTable from '../components/CustomersTable'
import { retrieveCustomers } from '../logic'
import { toaster } from 'evergreen-ui'
import NewCustomerPanel from './NewCustomerPanel'

function CustomersList() {

    const [customers, setCustomers] = useState(null)
    const [view, setView] = useState('customers')

    useEffect(() => {
        ; (async () => {
            try {
                const customers = await retrieveCustomers(sessionStorage.UserToken)
                setCustomers(customers)

            } catch (error) {
                toaster.warning('Something went wrong', { duration: 2.5, description: error.message })
            }
        })()
    }, [])

    const handleNewCustomerClick = () => {
        setView('newCustomer')
    }

    const handleCloseClick = () => {
        setView('customers')
    }

    return (
        <>
        {view === 'newCustomer' && <NewCustomerPanel onCloseClick={handleCloseClick}/>}
        <div className="main-section__customers">
            <button className='newButton' onClick={handleNewCustomerClick}>New Customer</button>
            <div className='customers__tableContainer'>

                {customers && <EnhancedTable data={customers} />}
            </div>
        </div>
        </>
    )
}

export default CustomersList