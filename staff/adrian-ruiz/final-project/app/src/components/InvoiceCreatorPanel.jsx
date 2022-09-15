import './InvoiceCreatorPanel.css'
import { useState, useRef, useEffect } from 'react'
import { toaster } from 'evergreen-ui'
import { createInvoice, retrieveCustomers, retrieveStock } from '../logic'
function InvoiceCreatorPanel({ handleSetViewList, onCreateInvoice }) {

    const [rows, setRows] = useState([{ id: 0, value: 0, qty: 0, tax: 0 }, { id: 1, value: 0, qty: 0, tax: 0 }, { id: 2, value: 0, qty: 0, tax: 0 }])
    const [totalAmount, setTotalAmount] = useState(0)
    const formRef = useRef(null)
    const [customers, setCustomers] = useState([])
    const [selectedCustomer, setSelectedCustomer] = useState({})
    const [stock, setStock] = useState([])

    useEffect(() => {
        ; (async () => {
            try {
                const customers = await retrieveCustomers(sessionStorage.UserToken)
                setCustomers(customers)
                const stock = await retrieveStock(sessionStorage.UserToken)
                setStock(stock)

            } catch (error) {
                toaster.warning('Something went wrong', { duration: 2.5, description: error.message })
            }
        })()
    }, [])

    function printRows() {

        return rows.map(row =>
            <div className="invoiceCreator__productRow" key={row.id}>
                <input type='text' className="form__invoiceProductName" name={`productName${row.id}`} placeholder='Select product' list='productsList' onChange={(event) => handleChangeName(event, row.id)}></input>
                <datalist id='productsList'>
                    {stock && stock.map(({ name }) => <option value={name}>{name}</option>)}
                </datalist >
                <input type='text' className="form__invoiceProductDescription" name={`productDescription${row.id}`} placeholder='Item/Service description...' defaultValue={row.description ? row.description : ''}></input>
                <input type='number' className="form__invoiceProductQty" name={`productQty${row.id}`} onChange={(event) => handleChangeQty(event, row.id)}></input>
                <input type='number' className="form__invoiceProductUnitPrice" name={`productUnitPrice${row.id}`} onChange={(event) => handleChangeUnitPrice(event, row.id)}></input>
                <input type='text' className="form__invoiceProductTax" name={`productTax${row.id}`} onChange={(event) => handleChangeTax(event, row.id)}></input>
                <input type='number' className="form__invoiceProductTotal" name={`productTotal${row.id}`} value={(row.value * row.qty) * (row.tax / 100 + 1)} readOnly></input>
                <span className="material-symbols-outlined deleteRow" onClick={() => handleDeleteRow(row.id)}>delete_forever</span>
            </div>
        )
    }

    const handleChangeUnitPrice = (event, rowId) => {
        let _rows = [...rows]
        const row = _rows.find(row => rowId === row.id)
        row.value = event.target.value
        setRows(_rows)
        handleTotalAmount()
    }

    const handleChangeQty = (event, rowId) => {
        let _rows = [...rows]
        const row = _rows.find(row => rowId === row.id)
        row.qty = event.target.value
        setRows(_rows)
        handleTotalAmount()
    }

    const handleChangeTax = (event, rowId) => {
        let _rows = [...rows]
        const row = _rows.find(row => rowId === row.id)
        row.tax = event.target.value
        setRows(_rows)
        handleTotalAmount()
    }

    const handleTotalAmount = () => {
        let amount = 0
        rows.forEach(row => amount += (row.value * row.qty) * (row.tax / 100 + 1))

        setTotalAmount(amount)
    }

    const handleChangeName = (event, rowId) => {
        
        let _rows = [...rows]
        const row = _rows.find(row => rowId === row.id)
        row.name = event.target.value
        const item = stock.find(item => item.name === event.target.value)
        row.description = item ? item.description : ''
        
        setRows(_rows)
    }


    const handleAddRow = event => {
        event.preventDefault()

        const lastRow = rows[rows.length - 1]

        const newRow = {
            id: lastRow.id + 1,
            value: 0,
            qty: 0,
            tax: 0
        }

        setRows([...rows, newRow])
    }

    const handleDeleteRow = rowId => {
        if (rows.length > 1) {
            setRows(rows.filter(_row => _row.id !== rowId))
        }
    }

    const handleCustomerInput = event => {
        const { target: { value: customer } } = event
        let customerFound = customers.find(_customer => _customer.name === customer)

        if(!customerFound){
            setSelectedCustomer({})
            return
        }

        setSelectedCustomer(customerFound)
        return
        
    }

    const handleNewInvoiceSubmit = event => {
        event.preventDefault()

        try {
            const { target: form,
                target: {
                    invoiceNumber: { value: invoiceNumber },
                    customer: { value: customerName },
                    customerEmail: { value: customerEmail },
                    billingAddress: { value: billingAddress },
                    shippingAddress: { value: shippingAddress },
                    terms: { value: terms },
                    invoiceDate: { value: invoiceDate },
                    dueDate: { value: dueDate }
                } } = event
            // TODO LINK CUSTOMER NAME TO REFID ON DB
            //TODO CREATE SHIPPING ADDRESS ON INVOICE DB
            // TODO CREATE PRODUCT TAX ON DB MODEL (DO I NEED PRODUCT TOTAL??)
            let customerFound = customers.find(_customer => _customer.name === customerName)
            if (!customerFound) throw new Error(`Customer ${customerName} is not an valid option`)
            let refId = customerFound.id

            const customer = { refId, name: customerName, email: customerEmail, billingAddress, shippingAddress }

            const products = []
            rows.forEach(row => {
                const { target: form,
                    target: {
                        [`productName${row.id}`]: { value: productName },
                        [`productDescription${row.id}`]: { value: productDescription },
                        [`productQty${row.id}`]: { value: productQty },
                        [`productUnitPrice${row.id}`]: { value: productUnitPrice },
                        [`productTax${row.id}`]: { value: productTax },
                        [`productTotal${row.id}`]: { value: productTotal }
                    } } = event



                if (productName || productDescription || productQty || productUnitPrice || productTax) {

                    if (productName && productQty && productUnitPrice) {
                        let id
                        let item = stock.find(_item => _item.name === productName)
                        if (!item) throw new Error(`Product ${productName} is not an valid option`)

                        id = item.id
                        let amount = parseInt(productQty)
                        let price = parseInt(productUnitPrice)
                        let total = parseInt(productTotal)

                        products.push({ id, productDescription, amount, price, productTax, total })
                    }
                    else throw new Error('All products need Name, QTY and Unit Price')
                }
            })
            if (!products.length) throw new Error("Products can't be empty")

                ; (async () => {
                    try {
                        await createInvoice(sessionStorage.UserToken, invoiceNumber, { customer, terms, invoiceDate, dueDate, products, totalAmount })

                        toaster.success(`Invoice ${invoiceNumber} created successfully`)
                        onCreateInvoice()
                    } catch (error) {
                        toaster.warning(error.message, { duration: 3 })
                    }

                })()

        } catch (error) {
            toaster.warning(error.message, { duration: 3 })
        }
    }

    return (
        <div className="invoiceCreator__container">
            <form className="invoiceCreator__form" onSubmit={handleNewInvoiceSubmit} ref={formRef}>
                <div className="invoiceCreator__customerAndEmail">
                    <div className='invoiceCreator__inputContainer w25'>
                        <label className="form__label" htmlFor="customer" >Customer</label>
                        <input type='text' className='invoiceCreator__inputCustomer' name="customer" onChange={handleCustomerInput} list='customersList'></input>
                        <datalist id='customersList'>
                            {customers && customers.map(({ name, id }) => <option value={name}>{name}</option>)}
                        </datalist >
                    </div>
                    <div className="invoiceCreator__inputContainer w25">
                        <label className="form__label" htmlFor="customerEmail">Customer email</label>
                        <input type='email' className='invoiceCreator__inputCustomerEmail' name="customerEmail" defaultValue={selectedCustomer.email === undefined ? '' : selectedCustomer.email}></input>
                    </div>
                    <div className='separator30'></div>
                    <div className='invoiceCreator__invoiceNumber'>
                        <label className="form__label" htmlFor="invoiceNumber">Invoice N#</label>
                        <input type='text' className='invoiceCreator__inputCustomer' name="invoiceNumber"></input>
                    </div>
                </div>
                <div className="invoiceCreator__section2">
                    <div className="invoiceCreator__address">
                        <label className="form__label" htmlFor="billingAddress">Customer billing address</label>
                        <textarea className='invoiceCreator__AddressInput' name='billingAddress' defaultValue={selectedCustomer.billingAddress === undefined ? '' : (`${selectedCustomer.billingAddress.street}\n${selectedCustomer.billingAddress.town}\n${selectedCustomer.billingAddress.state}\n${selectedCustomer.billingAddress.zipCode}\n${selectedCustomer.billingAddress.country}`)}></textarea>
                    </div>
                    <div className="invoiceCreator__address">
                        <label className="form__label" htmlFor="shippingAddress">Customer shipping address</label>
                        <textarea className='invoiceCreator__AddressInput' name='shippingAddress' defaultValue={selectedCustomer.shippingAddress === undefined ? '' : `${selectedCustomer.shippingAddress.shippingStreet}\n${selectedCustomer.shippingAddress.shippingTown}\n${selectedCustomer.shippingAddress.shippingState}\n${selectedCustomer.shippingAddress.shippingZipCode}\n${selectedCustomer.shippingAddress.shippingCountry}`}></textarea>
                    </div>
                    <div className="invoiceCreator__section2__row1">
                        <label className="form__label" htmlFor="terms">Terms</label>
                        <input type='text' className="form__input" name='terms' defaultValue={selectedCustomer.payTerms}></input>
                        <label className="form__label" htmlFor="invoiceDate">Invoice date</label>
                        <input type='date' className="form__input" name='invoiceDate'></input>
                        <label className="form__label" htmlFor="dueDate">Due date</label>
                        <input type='date' className="form__input" name='dueDate'></input>
                    </div>
                    <div className='invoiceCreator__totalAmount'>
                        <h2 className='totalAmount__title'>Total <br></br>Amount</h2>
                        <h2 className='totalAmount__amount' name='totalAmount'>{totalAmount} €</h2>
                    </div>
                </div>
                <div className="invoiceCreator__productsContainer">
                    <div className="invoiceCreator__productsHeader">
                        <div className='w30'>
                            <h2>Product name</h2>
                        </div>
                        <div className="w30">
                            <h2>Description</h2>
                        </div>
                        <div className="w10">
                            <h2>QTY</h2>
                        </div>
                        <div className="w10">
                            <h2>Unit price</h2>
                        </div>
                        <div className="w10">
                            <h2>TAX</h2>
                        </div>
                        <div className="w10">
                            <h2>Total</h2>
                        </div>

                    </div>
                    {printRows()}
                    <div className='invoiceCreator__addRow'>
                        <button className='noButton' onClick={handleAddRow}>
                            <span className="material-symbols-outlined blue">add_box</span>
                        </button>
                    </div>


                </div>
                <div className='invoiceCreator__footer'>
                <button type='button' className='invoiceCreator__cancelButton' onClick={handleSetViewList}>Cancel</button>
                <button type='submit' className='invoiceCreator__newInvoiceButton'>Create invoice</button>
                    

                </div>
            </form>


        </div>
    )
}

export default InvoiceCreatorPanel