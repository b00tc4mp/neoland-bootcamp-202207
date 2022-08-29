const {useState,useEffect} = React
function HomePage(){
    // const logger = new Loggito('HomePage')

    const [view,setView]= useState('list')

    return <div className="container home_page ">
            <Header name={name} onLogoutClick={onLogoutClick} onSettingsClick={handleSettingsClick} view={view} />

            {/* <main className="main_home">
                {view === 'list' && <NoteList notes={notes} onUpdateNote={handleUpdateNote} onDeleteNote={handleDeleteNote} />}
                
            </main> */}

            <footer className="footer_home">
                {view === 'list' && <div className="btn_plus" onClick={handleAddClick}>
                    <span className="material-symbols-outlined add">add</span>
                </div>}
            </footer>
        </div>
}