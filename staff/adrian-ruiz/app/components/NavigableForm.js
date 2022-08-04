class NavigableForm extends Component{
    constructor(template) {
        super(template)
    }

    onLinkClick(callback) {
        this.container.querySelector('.anchor').onclick = event => {
            event.preventDefault()

            callback()
        }
    }

    onFormSubmit(){
        throw new Error('Method not overriden')
    }

    reset(){
        this.container.querySelector('form').reset()
    }
}