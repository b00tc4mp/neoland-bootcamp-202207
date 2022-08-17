class Header extends Component {
    constructor() {
        super(`<div class="menu-header">
        <div class="div-logout">
            <button class="logout-button">
            <span class="material-symbols-outlined">
                logout
            </span>
            </button>
        </div>
        <div class="saludo"></div>
        <div class="menu">
            <div class="menu-icon"></div>
            <div class="menu-icon"></div>
            <div class="menu-icon"></div>
        </div>
        </div>`)

        const logoutButton = this.container.querySelector('.logout-button')
        logoutButton.onclick = () => this.onLogoutbuttonClick()

        this.menuButton = this.container.querySelector('.menu')
        this.menuButton.onclick = () => {
            this.menuButton.classList.toggle('rotate')
            this.onMenuButtonClick()
        }

    }

    setName(name) {
        this.container.querySelector('.saludo').innerText = 'Hello, ' + name + '!'
    }

    onLogoutbuttonClick = null
    onMenuButtonClick = null
}