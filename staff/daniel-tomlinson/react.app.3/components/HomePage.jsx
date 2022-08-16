// const { error } = require("console")

class HomePage extends Component {
    constructor() {
        super()

        this.state = { name: null, notes: null, view: null}
    }

    componentDidMount = () => { // override
        super.componentDidMount()

        try {
            retrieveUser(sessionStorage.token, (error, user) => {
                if (error) {
                    alert(error.message)

                    this.logger.warn(error.message)

                    return
                }

                this.setState({ name: user.name})
            })
        } catch (error) {
            alert(error.message)

            this.logger.warn(error.message)
        }

        this.loadNotes()

    }

    loadNotes = () => {
        try {
            retrieveNotes(sessionStorage.token, (error, notes) => {
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

    handleAddClick = () => {
        try {
            createNote(sessionStorage.token, error => {
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

    handleUpdateNote = (noteId, text) => {
        try {
            updateNote(sessionStorage.token, noteId, text, error => {
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

    handleDeleteNote = noteId => {
        try {
            deleteNote(sessionStorage.token, noteId, error => {
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

    handleSettingsClick = () => {
        this.setState({ view: 'settings' })
    }

    handleNotesClick = () => {
        this.setState({ view: null })
    }

    handleUpdatePassword = function (
        oldPassword,
        newPassword,
        retypeNewPassword
      ) {
        try {
          resetPassword(
            sessionStorage.token,
            oldPassword,
            newPassword,
            retypeNewPassword,
            function (error) {
              if (error) {
                alert(error.message);
      
                return;
              }
      
              alert("Password updated successfully");
      
              //In Manu's code the changes in view are addressed somewhere else:
              // I would move this to homePage
              // this.resetPasswordReset();
              // I would leave this here as it manages the main pages
              
              delete sessionStorage.token;
            }
          );
        } catch (error) {
          alert(error.message);
        }
      };



    // handleSettingsClick = 

    render() {
        this.logger.info('render')

        return this.state.name ? <div className="home-page page background flex-container--homepage">
        <Header name={this.state.name} onLogoutClick={this.props.onLogoutClick} onSettingsClick={this.handleSettingsClick} onNotesClick={this.handleNotesClick}/>
        <main className="main flex-container main-page-content">
            {this.state.view === null && <NoteList notes={this.state.notes} onUpdateNote={this.handleUpdateNote} onDeleteNote={this.handleDeleteNote} />}
        {this.state.view === 'settings' && <Settings onResetPassword={this.handleResetPassword}/>}
        </main>
        <footer className="footer flex-container">
            {this.state.view === null && <button className="transparent-button add-button" onClick={this.handleAddClick}>+</button>}
            </footer>
    </div>
    : null
    }
}