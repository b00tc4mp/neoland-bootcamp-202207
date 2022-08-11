class HomePage extends Component {
    constructor() {
        super()

        this.state = {name: null}
    }

    componentDidMount = () =>{  // Override class Component method
        super.componentDidMount() // We call the original method to get logging

        try {
            retrieveUser(sessionStorage.UserToken, (error, user) => {
                if (error) {
                    alert(error.message)
                    this.logger.warn(error.message)
                    return
                }
                this.setState({name: user.name})
                
                //Render List (notes) ???
            })
        } catch (error) {
            alert(error.message)
            this.logger.warn(error.message)
        }
    }
    render() {
        return (
            <>
           
            <main className="page homePage">
            <Header name={this.state.name}/>
                <section className="homeMainContainer home__notesContainer">
                    <ListPanel />
                </section>
                <section className="bottomMenu">
                    <button className="newNoteButton"><span className="newNoteEmoji">📝</span></button>
                </section>
            </main>
            </>
        )
    }
}