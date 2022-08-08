class IconButton extends Component {
    constructor(text, ...classes) {
        super(`<button class="transparent-button"><span class="material-symbols-outlined">${text}</span></button>`)

        this.container.onclick = () => this.onClick()

        this.container.classList.add(...classes)
    }

    onClick = null

    click() {
        this.container.click()
    }
}

const button1 = new Button('Accept', 'button--blue', 'button--light')