import './SettingsDropdown.css'
import { useState } from 'react'
import withContext from '../utils/withContext'
function SettingsDropdown({ context: useHandleLogOut }) {

    const [dropdownView, setDropdownView] = useState(null)
    const handleCategoryClick = view => {
        if(view === dropdownView) setDropdownView(null)

        else setDropdownView(view)
        
    }
    return (
        <div className="settings__dropdownContainer">
            {dropdownView &&
            <div className="dropdown__links">
                {dropdownView === 'account' &&
                <>
                <p className="dropdown__linksTitle">Account</p>
                <a className='reactLink' >Account Settings</a>
                <a className='reactLink' >Company Details</a>
                <a className='reactLink' >Billing</a>
                </>
                }
                {dropdownView === 'invoices' &&
                <>
                <p className="dropdown__linksTitle">Invoices</p>
                <a className='reactLink' >Invoices 1</a>
                <a className='reactLink' >Invoices 2</a>
                <a className='reactLink' >Invoices 3</a>
                </>
                }
                {dropdownView === 'stock' &&
                <>
                <p className="dropdown__linksTitle">Stock</p>
                <a className='reactLink' >Stock 1</a>
                <a className='reactLink' >Stock 2</a>
                <a className='reactLink' >Stock 3</a>
                </>
                }
            </div>
            } 
            {dropdownView === null && <div className='dropdown__links transparent'></div>}
            <div className="dropdown__categories">
                <a className='reactLink' onClick={() => handleCategoryClick('account')}>Account</a>
                <a className='reactLink' onClick={() => handleCategoryClick('invoices')}>Invoices</a>
                <a className='reactLink' onClick={() => handleCategoryClick('stock')}>Stock</a>
                <a href='#' className='reactLink' onClick={useHandleLogOut}>Logout</a>
            </div>

        </div>
    )
}

export default withContext(SettingsDropdown)