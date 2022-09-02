// const { useState } = React
import {useState} from 'react'
import HomePage from './pages/HomePage'

function App() {

    const [view, setView] = useState('home')

    return <>
        {view === 'home' && <HomePage />}
       
    </>
}

export default App
