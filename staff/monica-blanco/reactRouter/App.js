// biblioteca de enrutamiento
// componente ROUTES antes SWICH
// LISTAR TODAS LAS RUTAS Y LE INDICAS EL TO A DONDE RENDERIZAR EL ELEMENTO Y LISTO 
// en returns {useParamen}
// import {useState} from 'react'    'useState' is defined but never used
import './App.css'
import {Router} from 'react-router-dom' 

const Home = (): Element => <h1> Home</h1>

const SearchPage = (): Element => <h1> Search Page</h1>

function App(): Element {

    // <li><link to='/'>home</link></li>

    // <Router>
    //     <Router path='/search-page'element={<SearchPage/>}/>
    // </Router>
    return (
        <div className='App'>
            <Router to='/' element ={<Home/>} />
            <Router to='/seach-page' element={<SearchPage />} />
    
        </div>
    )
    
}
export default App