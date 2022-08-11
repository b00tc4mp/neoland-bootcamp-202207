class IconButtonMainItemsMenuPanel extends Component{
    constructor(text){
        super(`<div class="btnBack">
        <span class="material-symbols-outlined btn-menu">${text}</span>
        </div>`)


        this.container.onclick = () => this.onClick()
        
        // this.container.classList.add('btn-menu')
    }
    onClick=null
    click(){
        this.container.click()
    }
}