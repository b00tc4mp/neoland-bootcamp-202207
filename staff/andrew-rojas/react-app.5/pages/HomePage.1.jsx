class HomePage extends Component {
  constructor() {
    super();

    this.state = { name: null, notes: null, view: 'list' };
  }

  componentDidMount = () => { //override
    super.componentDidMount();
    
    try {
      retrieveUser(sessionStorage.token, (error, user) => {
        if (error) {
          alert(error.message);

          this.logger.warn(error.message);

          return;
        }

        this.setState({ name: user.name });

      });
    } catch (error) {
      alert(error.message);

      this.logger.warn(error.message);
    }

    this.loadNotes();
  };

  loadNotes = () => {
    try {
      retrieveNotes(sessionStorage.token, (error, notes) => {
        if (error) {
          alert(error.message);

          this.logger.warn(error.message);

          return;
        }

        this.setState({ notes });
      });
    } catch (error) {
      alert(error.message);

      this.logger.warn(error.message);
    }
  };

  handleAddClick = () => {
    try {
      createNote(sessionStorage.token, error => {
        if (error) {
          alert(error.message);

          this.logger.warn(error.message);

          return;
        }

        this.loadNotes();
      });
    } catch (error) {
       alert(error.message);

       this.logger.warn(error.message);
    }
  };

  handleUpdateNote = (noteId, text) => {
    try {
      updateNote(sessionStorage.token, noteId, text, error => {
        if (error) {
          alert(error.message);

          this.logger.warn(error.message);

          return;
        }
      });
    } catch (error) {
      alert(error.message);

      this.logger.warn(error.message);
    }
  };

  handleDeleteNote = noteId => {
    try {
      deleteNote(sessionStorage.token, noteId, error => {
        if (error) {
          alert(error.message);

          this.logger.warn(error.message);
         
          return;
        }

        this.loadNotes();
      });
    } catch (error) {
       alert(error.message);

       this.logger.warn(error.message);
    }
  };

  handleSettingsClick = () => this.setState ({ view: 'settings'})
  
  handleSettingsCloseClick = () => this.setState({view: 'notelist'})
  
  render() {
    this.logger.info("render");

    return this.state.name ? 
      <div className="home-page container container--full container--distributed">
        <Header name={this.state.name} onLogoutClick={this.props.onLogoutClick} onSettingsClick={this.handleSettingsClick} view={this.state.view} />

        <main className="main">
        {this.state.view === 'notelist' && <NoteList notes={this.state.notes} onDeleteNote={this.handleDeleteNote}onUpdateNote={this.handleUpdateNote} />}
        {this.state.view === 'settings' && <Settings onCloseClick={this.handleSettingsCloseClick} />}
        </main>

        <footer className="footer">
          {this.state.view === 'list' && <button className="add-button transparent-button"onClick={this.handleAddClick}>+</button>} 
        </footer>
      </div>
     :
      null;
  }
}