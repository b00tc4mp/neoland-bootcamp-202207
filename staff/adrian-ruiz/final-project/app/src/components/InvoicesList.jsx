import './InvoicesList.css'
import { useEffect, useState } from 'react'
import EnhancedTable from '../components/InvoicesTable'
import { retrieveInvoices } from '../logic'
import { toaster } from 'evergreen-ui'

function InvoicesList() {

    const [invoices, setInvoices] = useState(null)
    useEffect(() => {
        ; (async () => {
            try {
                const invoices = await retrieveInvoices(sessionStorage.UserToken)
                setInvoices(invoices)

            } catch (error) {
                toaster.warning('Something went wrong', { duration: 2.5, description: error.message })
            }
        })()
    }, [])

    return (
        <div className="main-section__invoices">
            <button className='newButton'>New Invoice</button>
            <div className='invoices__tableContainer'>
                {invoices && <EnhancedTable data={invoices} />}
            </div>
        </div>
    )
}

export default InvoicesList