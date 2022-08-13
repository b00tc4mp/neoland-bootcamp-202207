class IconButtonHeader extends Component{
    constructor(text){
        super(`<span class="material-symbols-outlined btn-menu">${text}</span>`)

        this.container.onclick = () => this.onClick()
        
        // this.container.classList.add('btn-menu')
    }
    onClick=null
    click(){
        this.container.click()
    }
}