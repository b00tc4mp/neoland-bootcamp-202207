class HomePage extends Component {
    constructor(props) {
        super(props)

        this.state = { view: 'list', name: null, notes: null, popUp: null }
        this.myComponentRef = React.createRef()
    }

    componentDidMount = () => {  // Override class Component method
        super.componentDidMount() // We call the original method to get logging

        try {
            retrieveUser(sessionStorage.UserToken, (error, user) => {
                if (error) {
                    alert(error.message)
                    this.logger.warn(error.message)
                    return
                }
                this.setState({ name: user.name })

            })




        } catch (error) {
            alert(error.message)
            this.logger.warn(error.message)
        }

        this.loadNotes()
    }

    loadNotes = () => {

        try {
            retrieveNotes(sessionStorage.UserToken, (error, notes) => {
                if (error) {
                    alert(error.message)
                    this.logger.warn(error.message)

                    return
                }

                this.setState({ notes })

            })
        } catch (error) {
            alert(error.message)
            this.logger.warn(error.message)
        }

    }

    handleChangeColorNote = (notes) => {
        this.setState({ notes })
    }

    handleUpdateNote = (noteId, title, text) => {
        try {
            updateNote(sessionStorage.UserToken, noteId, title, text, error => {
                if (error) {
                    alert(error.message)
                    this.logger.warn(error.message)

                    return
                }
            })
        } catch (error) {
            alert(error.message)
            this.logger.warn(error.message)
        }
    }

    handleDeleteNote = (noteId) => {
        let result = confirm('Are you sure to delete that note?')
        if (result) {
            try {
                deleteNote(sessionStorage.UserToken, noteId, error => {
                    if (error) {
                        alert(error.message)
                        this.logger.warn(error.message)

                        return
                    }

                    this.loadNotes()

                })
            } catch (error) {
                alert(error.message)
                this.logger.warn(error.message)
            }
        }
    }

    handleLogout = () => {
        const result = confirm('Are you sure to Log Out?')
        if (result)
            this.props.onLogout()
        else return

    }

    handleAddClick = () => {
        this.setState({ popUp: 'newNote' })
    }

    handleSubmitNewNote = (title, text) => {
        try {
            createNote(sessionStorage.UserToken, title, text, (error) => {
                if (error) {
                    alert(error.message)
                    this.logger.warn(error.message)

                    return
                }

                this.setState({ popUp: null })

                this.loadNotes()

            })
        } catch (error) {
            alert(error)
        }
    }

    handleCancelNewNote = () => {
        let result = confirm('Are you sure to cancel note creation?')

        if (result) {
            this.setState({ popUp: null })
        } else return
    }

    handleProfileClick = () => {
        this.setState({ view: 'profile' })
    }

    handleHomeClick = () => {

        this.setState({ view: 'list' })
        if (this.myComponentRef.current) {
            // handleScroll is a method from my Child (List panel) which I invoke by ref
            this.myComponentRef.current.handleScroll()
        }

    }

    render() {
        if (this.state.name)
            return (
                <>
                    {this.state.popUp === 'newNote' &&
                        <NewNotePopUp onNewNoteSubmit={this.handleSubmitNewNote} onCancelNewNote={this.handleCancelNewNote} />
                    }
                    <main className="page homePage">
                        <Header name={this.state.name} onLogout={this.handleLogout} onProfileClick={this.handleProfileClick} onHomeClick={this.handleHomeClick} />

                        {this.state.view === 'list' &&
                            <ListPanel notes={this.state.notes} onUpdateNote={this.handleUpdateNote} onDeleteNote={this.handleDeleteNote} onChangeColorNote={this.handleChangeColorNote} ref={this.myComponentRef} />}
                        {this.state.view === 'profile' &&
                            <ProfileMenu />}
                        <section className="bottomMenu">
                            {this.state.view === 'list' && <button className="newNoteButton"><span className="newNoteEmoji" onClick={this.handleAddClick}>📝</span></button>
                            }

                        </section>
                    </main>
                </>
            )
    }
}