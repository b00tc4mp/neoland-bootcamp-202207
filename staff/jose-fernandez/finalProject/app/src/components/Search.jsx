import IconButton from './Buttons/IconButton'
import './Search.css'

function Search({ onQuery, onCloseClick }) {
    const handleSubmit = event => {
        event.preventDefault()

        const query = event.target.query.value

        onQuery(query)
    }
    const handleCloseClick = () => {
        onCloseClick()
    }
    const handleDeleteTextSearch=event=>{
        event.preventDefault()
        // const cleanText= event.target.query.value===""

        // onQuery(cleanText)
    }


    return <div className='container search' >
        <IconButton addClass="chevron_left" text="chevron_left" onClick={handleCloseClick} />
        <form className="container container--row" onSubmit={handleSubmit}>
            <div className="container--search">
                <input className="input" type="text" name="query" />
                {/* <IconButton text="search" /> */}
                <IconButton addClass="closeFormSearch" text="close" onClick={handleDeleteTextSearch}/>
            </div>
        </form>
        
    </div>
}

export default Search