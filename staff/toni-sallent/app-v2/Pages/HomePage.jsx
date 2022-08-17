const { useSate, useEffect } = React

function HomePage({ onLogoutClick }) {
    
        //this.state = {name: null, notes: null, view: 'list' }
    
    const [name, setName] = useState(null)
    const [notes, setNotes] = useState(null)
    const [view, setView] = useState('list')


    useEffect(() => {
        retrieveUser(sessionStorage.token, (error, user) => {
            if(error){
                alert(error.message)
                return;
            }
            setName(user.name)
        })
        
        loadNotes()
   
    }, [])
   
        

    const loadNotes = () => {
        retrieveNotes(sessionStorage.token, (error, notes) =>{
            if(error){
                alert(error.message)
                return;
            }
            setNotes(notes)
        }

        )
    }

    const handleAddClick = () => {
        createNote(sessionStorage.token, (error) => {
            if(error){
                alert(error.message)
                return;
            }
            loadNotes();
        })
    }

    const handleUpdateNote = (noteId, text) => {
        try {
            updateNote(sessionStorage.token, noteId, text, error => {
                if (error) {
                    alert(error.message)

                    

                    return;
                }
            })
        } catch (error) {
            alert(error.message)
            }
    }

    const handleDeleteNote = (noteId) => {
        try{
            deleteNote(sessionStorage.token, noteId, error => {
                if (error) {
                    alert(error.message)

                    

                    return;
                }
                loadNotes()
            })
        } catch (error) {
            alert(error.message)
        }
    }

    const handleSettingsClick = () => {
        setView("settings")

        loadNotes()
    }

    const handleSettingsCloseClick = () => {
        setView('list')
    }
    
    useEffect(() =>{
        return name ?
        <div className="home-page container container--full container--distributed">
            <Header name={name} onLogoutClick={onLogoutClick} onSettingsClick={handleSettingsClick} view={view} />

            <main className="main">
                {view === 'list' && <NoteList notes={notes} onUpdateNote={handleUpdateNote} onDeleteNote={handleDeleteNote} />}
                {view === 'settings' && <Settings onSettingsClick={handleSettingsClick} onCloseClick={handleSettingsCloseClick}  />}
            </main>

            <footer className="footer">
                {view === 'list' && <button className="add-button transparent-button" onClick={handleAddClick}>+</button>}
            </footer>
        </div>
        :
        null
    }, [])
        
}
    
