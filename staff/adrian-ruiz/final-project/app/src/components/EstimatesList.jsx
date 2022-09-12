import './EstimatesList.css'
import { useEffect, useState } from 'react'
import EnhancedTable from './EstimatesTable'
import { retrieveEstimates } from '../logic'
import { toaster } from 'evergreen-ui'

function EstimatesList() {

    const [estimates, setEstimates] = useState(null)
    useEffect(() => {
        ; (async () => {
            try {
                const estimates = await retrieveEstimates(sessionStorage.UserToken)
                setEstimates(estimates)

            } catch (error) {
                toaster.warning('Something went wrong', { duration: 2.5, description: error.message })
            }
        })()
    }, [])

    return (
        <div className="main-section__estimates">
            <button className='newButton'>New Estimate</button>
            <div className='estimates__tableContainer'>
                {estimates && <EnhancedTable data={estimates} />}
            </div>
        </div>
    )
}

export default EstimatesList