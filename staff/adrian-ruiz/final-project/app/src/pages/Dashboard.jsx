import './Dashboard.css'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Inventory from './Inventory'
import SummaryReports from '../components/SummaryReports'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'

function Dashboard() {


    return (

        <div className="dashboardGrid">
            <div className="header">
                <Header />
            </div>
            <div className="sidebar">
                <Sidebar />
            </div>
            <Routes>
                <Route path='inventory' element={<Inventory />} />
                <Route path='/*' element={<SummaryReports />} />
            </Routes>

        </div>

    )
}

export default Dashboard