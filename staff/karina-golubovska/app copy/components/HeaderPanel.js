class HeaderPanel extends Component {
    constructor (){
super(`<header class ="header container ">
<div class="header-top container container--row container--distributed">
<h1 class="title"> Hello, user!</h1>
</div>
<button class="menu-button transparent-button">
</header>`)
const headerTop = this.container.querySelector('.header-top')
const menuButton = new IconButton('menu')
headerTop.append(menuButton.container)

const closeButton = new IconButton('close')
this.closeButton = closeButton
const menuPanel = new menuPanel/*MenuPanel ?????*/ 
this.menuPanel = menuPanel

menuButton .onClick=()=>{
    headerTop.removeChild(menuButton.container)
    headerTop.append(closeButton.container)

    this.onMenuButtonClick()
    this.container.append(menuPanel.container)
}
closeButton.onClick= ()=>{
    if(headerTop.container(closeButton.container))
    headerTop.removeChild(closeButton.container)

    headerTop.append(menuButton.container)
    menuPanel.showSettingsButton()
    if(this.container.contains(menuPanel.container))
    this.container.removeChild(menuPanel.container)
}
menuPanel.onSettingsButtonClick =()=>{
    closeButton.click()
    this.onSettingsButtonClick()
}
menuPanel.onLogoutButtonClicl =()=>{
    closeBuuton.click()
    this.onLogoutButtonClick()
}

    }
    onMenuButtonClick = null
    hideMenuSettingsButton(){
        this.menuPanel.hideSettingsButton()

            }
            onSettingsButtonClick = null
            onLogoutButtonClick = null 
            closeMenu(){
                this.closeButton.click()
    }
}