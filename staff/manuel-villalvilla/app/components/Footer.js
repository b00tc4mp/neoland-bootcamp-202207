class Footer extends Component {
    constructor() {
        super(`<footer class="footer">+</footer>`)
        
        this.container.onclick = () => this.onFooterClick()
    }

    onFooterClick = null
}