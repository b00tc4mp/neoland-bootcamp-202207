class NavigableForm extends Component{
    constructor(template){
        super(template)
    }

    onLinkClick(callback){
        this.container.querySelector('').onclick= event=>{
            event.preventDefault()

            callback()
        }
    }

    onFormSubmit(){
        throw new Error('method not overriden')
    }

    reset(){
        this.container.querySelector('form').reset()
    }
}