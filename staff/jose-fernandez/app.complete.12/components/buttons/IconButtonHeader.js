class IconButtonHeader extends Component{
    constructor(text){
        super(`<span class="material-symbols-outlined">${text} </span>`)

        this.container.onclick = () => this.onClick()
    }
    onClick=null
    click(){
        this.container.click()
    }
}