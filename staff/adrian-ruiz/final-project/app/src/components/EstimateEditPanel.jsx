import './EstimateCreatorPanel.css'
import { useState, useRef, useEffect } from 'react'
import { toaster } from 'evergreen-ui'
import { createEstimate, retrieveStock } from '../logic'
function EstimateEditPanel({ estimate, handleSetViewList, onCreateEstimate }) {

    let initialTotal = 0
    estimate.products.forEach((product, index) => {
        product.index = index
        initialTotal += ((product.price * product.amount) * (product.tax / 100 + 1))
    })

    const [rows, setRows] = useState(estimate)
    const [totalAmount, setTotalAmount] = useState(initialTotal)
    const formRef = useRef(null)
    const [stock, setStock] = useState([])

    useEffect(() => {
        ; (async () => {
            try {
                const stock = await retrieveStock(sessionStorage.UserToken)
                setStock(stock)

            } catch (error) {
                toaster.warning('Something went wrong', { duration: 2.5, description: error.message })
            }
        })()
    }, [])

    function printRows() {
        console.log(rows)
        return rows.products.map(row =>
            <div className="invoiceCreator__productRow" key={row.index}>
                <input type='text' className="form__invoiceProductName" name={`productName${row.index}`} placeholder='Select product' list='productsList' defaultValue={row.name}></input>
                <datalist id='productsList'>
                    {stock && stock.map(({ name }) => <option value={name}>{name}</option>)}
                </datalist >
                <input type='text' className="form__invoiceProductDescription" name={`productDescription${row.index}`} placeholder='Item/Service description...' defaultValue={row.description}></input>
                <input type='number' className="form__invoiceProductQty" name={`productQty${row.index}`} onChange={(event) => handleChangeQty(event, row.index)} defaultValue={row.amount}></input>
                <input type='number' className="form__invoiceProductUnitPrice" name={`productUnitPrice${row.index}`} onChange={(event) => handleChangeUnitPrice(event, row.index)} defaultValue={row.price}></input>
                <input type='text' className="form__invoiceProductTax" name={`productTax${row.index}`} onChange={(event) => handleChangeTax(event, row.index)} defaultValue={row.tax}></input>
                <input type='number' className="form__invoiceProductTotal" name={`productTotal${row.index}`} value={(row.price * row.amount) * (row.tax / 100 + 1)} readOnly></input>
                <span className="material-symbols-outlined deleteRow" onClick={() => handleDeleteRow(row.index)}>delete_forever</span>
            </div>
        )
    }

    const handleChangeUnitPrice = (event, index) => {
        const _rows = { ...rows }
        const product = _rows.products.find(row => index === row.index)
        product.price = event.target.value
        setRows(_rows)
        handleTotalAmount()
    }

    const handleChangeQty = (event, index) => {
        const _rows = { ...rows }
        const product = _rows.products.find(row => index === row.index)
        product.amount = event.target.value
        setRows(_rows)
        handleTotalAmount()
    }

    const handleChangeTax = (event, index) => {
        let _rows = { ...rows }
        const product = _rows.products.find(row => index === row.index)
        product.tax = event.target.value
        setRows(_rows)
        handleTotalAmount()
    }

    const handleTotalAmount = () => {
        let amount = 0
        rows.products.forEach(row => amount += (row.price * row.amount) * (row.tax / 100 + 1))

        setTotalAmount(amount)
    }


    const handleAddRow = event => {
        event.preventDefault()

        const updatedEstimate = { ...rows }

        const lastRow = updatedEstimate.products[updatedEstimate.products.length - 1]

        const newRow = {
            name: '',
            description: '',
            index: lastRow.index + 1,
            price: 0,
            amount: 0,
            tax: 0
        }

        updatedEstimate.products.push(newRow)
        console.log(updatedEstimate)
        setRows(updatedEstimate)
        console.log(rows)
    }

    const handleDeleteRow = index => {
        debugger
        if (rows.products.length > 1) {
            const updatedEstimate = { ...rows }
            const updatedProducts = []
            updatedEstimate.products.forEach(product => {
                if (product.index !== index) updatedProducts.push(product)
            })

            updatedEstimate.products = updatedProducts

            setRows(updatedEstimate)
        }
    }

    /* const handleNewEstimateSubmit = event => {
        event.preventDefault()

        try {
            const { target: form,
                target: {
                    invoiceNumber: { value: estimateNumber },
                    customer: { value: customerName },
                    customerEmail: { value: customerEmail },
                    billingAddress: { value: billingAddress },
                    shippingAddress: { value: shippingAddress },
                    terms: { value: terms },
                    invoiceDate: { value: estimateDate }
                } } = event
        
            // TODO CREATE PRODUCT TAX ON DB MODEL (DO I NEED PRODUCT TOTAL??)

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
                        await createEstimate(sessionStorage.UserToken, estimateNumber, { customer, terms, estimateDate, products, totalAmount })

                        toaster.success(`Estimate ${estimateNumber} created successfully`)
                        onCreateEstimate()
                    } catch (error) {
                        toaster.warning(error.message, { duration: 3 })
                    }

                })()

        } catch (error) {
            toaster.warning(error.message, { duration: 3 })
        }
    } */

    return (
        <div className="invoiceCreator__container">
            <form className="invoiceCreator__form" /* onSubmit={handleNewEstimateSubmit} */ ref={formRef}>
                <div className="invoiceCreator__customerAndEmail">
                    <div className='invoiceCreator__inputContainer w25'>
                        <label className="form__label" htmlFor="customer" >Customer</label>
                        <input type='text' className='invoiceCreator__inputCustomer' name="customer" defaultValue={estimate.customer.name} readOnly></input>

                    </div>
                    <div className="invoiceCreator__inputContainer w25">
                        <label className="form__label" htmlFor="customerEmail">Customer email</label>
                        <input type='email' className='invoiceCreator__inputCustomerEmail' name="customerEmail" defaultValue={estimate.customer.email}></input>
                    </div>
                    <div className='separator30'></div>
                    <div className='invoiceCreator__invoiceNumber'>
                        <label className="form__label" htmlFor="invoiceNumber">Estimate N#</label>
                        <input type='text' className='invoiceCreator__inputCustomer' name="invoiceNumber" defaultValue={estimate.estimateNumber}></input>
                    </div>
                </div>
                <div className="invoiceCreator__section2">
                    <div className="invoiceCreator__address">
                        <label className="form__label" htmlFor="billingAddress">Customer billing address</label>
                        <textarea className='invoiceCreator__AddressInput' name='billingAddress' defaultValue={estimate.billingAddress === undefined ? '' : (`${estimate.billingAddress.street}\n${estimate.billingAddress.town}\n${estimate.billingAddress.state}\n${estimate.billingAddress.zipCode}\n${estimate.billingAddress.country}`)}></textarea>
                    </div>
                    <div className="invoiceCreator__address">
                        <label className="form__label" htmlFor="shippingAddress">Customer shipping address</label>
                        <textarea className='invoiceCreator__AddressInput' name='shippingAddress' defaultValue={estimate.shippingAddress === undefined ? '' : `${estimate.shippingAddress.shippingStreet}\n${estimate.shippingAddress.shippingTown}\n${estimate.shippingAddress.shippingState}\n${estimate.shippingAddress.shippingZipCode}\n${estimate.shippingAddress.shippingCountry}`}></textarea>
                    </div>
                    <div className="invoiceCreator__section2__row1">
                        <label className="form__label" htmlFor="terms" >Terms</label>
                        <input type='text' className="form__input" name='terms' defaultValue={estimate.terms}></input>
                        <label className="form__label" htmlFor="invoiceDate">Estimate date</label>
                        <input type='date' className="form__input" name='invoiceDate' defaultValue={estimate.estimateDate} ></input>
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
                    <button type='submit' className='invoiceCreator__newInvoiceButton'>Create estimate</button>


                </div>
            </form>


        </div>
    )
}

export default EstimateEditPanel