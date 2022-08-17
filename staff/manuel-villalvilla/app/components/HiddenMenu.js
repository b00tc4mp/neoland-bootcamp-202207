class HiddenMenu extends Component {
    constructor() {
        super(`<div class="hidden-menu von voff">
        <div class="profile-link">Profile</div>
        <div class="notes-link">Notes</div>
        </div>`)

        const profileLink = this.container.querySelector('.profile-link')
        profileLink.onclick = () => this.onProfileLinkClick()

        const notesLink = this.container.querySelector('.notes-link')
        notesLink.onclick = () => this.onNotesLinkClick()
    }

    onProfileLinkClick = null

    onNotesLinkClick = null
}