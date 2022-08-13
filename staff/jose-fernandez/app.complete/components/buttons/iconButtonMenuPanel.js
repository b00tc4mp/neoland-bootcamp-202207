class IconButtonMenuPanel extends Component{
    constructor(text,nameIcon){
        super(`<a class="menu__link "><span class="material-symbols-outlined">${text}</span>${nameIcon}</a>
        `)

        this.container.onclick = () => this.onClick()
        
    }
    onClick=null
    click(){
        this.container.click()
    }
}