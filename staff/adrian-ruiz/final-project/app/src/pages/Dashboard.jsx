import './Dashboard.css'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Inventory from '../components/Inventory'
import SummaryReports from '../components/SummaryReports'
import { Routes, Route } from 'react-router-dom'
import CustomersList from '../components/CustomersList'
import InvoicesList from '../components/InvoicesList'
import EstimatesList from '../components/EstimatesList'

function Dashboard() {


    return (
        <>
        {/* <NewProductPanel /> */}
        <div className="dashboardGrid">
            <div className="header">
                <Header />
            </div>
            
            <div className="sidebar">
                <Sidebar />
            </div>
            <Routes>
                <Route path='/*' element={<SummaryReports />} />
                <Route path='inventory' element={<Inventory />} />
                <Route path='/customers' element={<CustomersList />} />
                <Route path='/estimates' element={<EstimatesList />} />
                <Route path='/invoices' element={<InvoicesList />} />
                
            </Routes>

        </div>
        </>
    )
}

export default Dashboard