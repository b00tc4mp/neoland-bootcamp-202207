class HomePage extends Component {
  constructor(props) { // preguntar por qué no hay q poner las props como argumento si las utilizo más abajo
    super()

    this.logger.info('constructor')

    this.state = { name: null, notes: null, view: 'notes' }
  }

  componentDidMount() {
    super.componentDidMount()
    try {

      retrieveUser(sessionStorage.token, (error, user) => { // cambio a funcion flecha para que funcione el this de dentro
        if (error) {
          alert(error.message)
          this.logger.warn(error.message)
          return
          // myReject(error.message)
        }

        this.setState({ name: user.name }) // creo que el setState es asincrono porque solo cambia cuando retrieveUser (asincrona) termina. Por eso renderiza el header sin el nombre primero, porque el nombre tarda en llegar

      })

      this.loadNotes()

    } catch (error) {
      alert(error.message)

      this.logger.error(error.message)
    }
  }

  loadNotes = () => {
    try {
      retrieveNotes(sessionStorage.token, (error, notes) => {
        if (error) {
          alert(error.message)

          this.logger.error(error.message)

          return
        }

        this.setState({ notes })
      })

    } catch (error) {
      alert(error.message)

      this.logger.error(error.message)
    }
  }

  handleAddNote = () => {
    try {
      createNote(sessionStorage.token, error => {
        if (error) {
          alert(error.message)

          this.logger.error(error.message)

          return
        }

        this.loadNotes()
      })

    } catch (error) {
      alert(error.message)

      this.logger.error(error.message)
    }
  }

  handleDeleteNoteClick = (noteId) => {
    try {
      deleteNote(sessionStorage.token, noteId, error => {
        if (error) {
          alert(error.message)

          return
        }

        this.loadNotes()
      })

    } catch (error) {
      alert(error.message)

      this.logger.error(error.message)
    }
  }

  handleUpdateNote = (noteId, text) => {
    try {
      updateNote(sessionStorage.token, noteId, text, error => {
        if (error) {
          alert(error.message)

          this.logger.error(error.message)

          return
        }

        // si no hay error, no pongo ninguna accion porque no hay q actualizar el DOM
      })

    } catch (error) {
      alert(error.message)

      this.logger.error(error.message)
    }
  }

  handleSettingsClick = () => {
    this.setState({ view: 'settings' })
    this.loadNotes() // para cuando me vaya de settings, q se baje las notas y actualice el state
  }

  handleNotesClick = () => {
    this.setState({ view: 'notes' })
  }

  render() {
    const {
      state: { view, notes, name },
      handleAddNote,
      handleSettingsClick,
      handleNotesClick,
      handleDeleteNoteClick,
      handleUpdateNote,
      props: { onLogoutButtonClick }
    } = this

    this.logger.info('render')

    if (name)
      return <div className="home-page">

        <Header name={name} onLogoutButtonClick={onLogoutButtonClick}
          onSettingsButtonClick={handleSettingsClick} onNotesButtonClick={handleNotesClick} 
        />

        {view === 'notes' && <>
          <main className="main">
            <NoteList notes={notes} onDeleteClick={handleDeleteNoteClick} 
              onUpdateNote={handleUpdateNote} 
            />
          </main>
          <Footer onAddNote={handleAddNote} />
        </>}

        {view === 'settings' && <main className="main">
          <Settings />
        </main>}

      </div>
  }
}