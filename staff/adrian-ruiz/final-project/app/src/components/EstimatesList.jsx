import './EstimatesList.css'
import { useEffect, useState } from 'react'
import EnhancedTable from './EstimatesTable'
import { retrieveEstimates } from '../logic'
import { toaster } from 'evergreen-ui'
import EstimateCreatorPanel from './EstimateCreatorPanel'

function EstimatesList() {

    const [estimates, setEstimates] = useState(null)
    const [view, setView] = useState('estimatesList')

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

    const newEstimateClickHandler = () => {
        setView('newEstimate')
    }

    const handleSetViewList = () => {
        setView('estimatesList')
    }

    const handleCreateEstimate = () => {
        ; (async () => {
            try {
                const estimates = await retrieveEstimates(sessionStorage.UserToken)
                setEstimates(estimates)
                setView('estimatesList')

            } catch (error) {
                toaster.warning('Something went wrong', { duration: 2.5, description: error.message })
            }
        })()
    }

    const handleDeleteEstimate = () => {
        ; (async () => {
            try {
                const updatedEstimates = await retrieveEstimates(sessionStorage.UserToken)
                setEstimates(updatedEstimates)

            } catch (error) {
                toaster.warning('Something went wrong', { duration: 2.5, description: error.message })
            }
        })()
    }

    return (
        
        <div className="main-section__estimates">
            {view === 'newEstimate' ? <EstimateCreatorPanel handleSetViewList={handleSetViewList} onCreateEstimate={handleCreateEstimate} /> :
                <>
                    <button className='newButton' onClick={newEstimateClickHandler} >New Estimate</button>
                    <div className='estimates__tableContainer'>
                        {estimates && <EnhancedTable data={estimates} onDeleteEstimate={handleDeleteEstimate} />}
                    </div>
                </>
            }

        </div>
    )
}

export default EstimatesList