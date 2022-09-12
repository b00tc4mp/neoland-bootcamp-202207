import './InvoicesList.css'
import { useEffect, useState } from 'react'
import EnhancedTable from '../components/InvoicesTable'
import { retrieveInvoices } from '../logic'
import { toaster } from 'evergreen-ui'
import InvoiceCreatorPanel from './InvoiceCreatorPanel'

function InvoicesList() {

    const [invoices, setInvoices] = useState(null)
    const [view, setView] = useState('invoicesList')

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

    const newInvoiceClickHandler = () => {
        setView('newInvoice')
    }

    const handleSetViewList = () => {
        setView('invoicesList')
    }
    return (
        <div className="main-section__invoices">
            {view === 'newInvoice' ? <InvoiceCreatorPanel handleSetViewList={handleSetViewList}/>
                :
                <>
                    <button className='newButton' onClick={newInvoiceClickHandler}>New Invoice</button>
                    <div className='invoices__tableContainer'>
                        {invoices && <EnhancedTable data={invoices} />}
                    </div>
                </>
            }
        </div>
    )
}

export default InvoicesList