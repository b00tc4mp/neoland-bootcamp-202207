class Home {
    constructor() {
        const temp = document.createElement('temp')

        temp.innerHTML = `<main class="home-page page">
        <div class="topcontainer homecontainer">
            <div class="header">
                <h1 class="greeting"></h1>
                <button class="burger">
                    <div class="burgerline"></div>
                    <div class="burgerline"></div>
                    <div class="burgerline"></div>
                </button>
                <div class="menu-options off">
                    <div class=close></div>
                    <ul class="menu-list">
                        <li><button class=profile-button>Profile Settings</button>
                        <li><button class="home-button off">Home</button></li>
                        <li><button class=logout-button>Logout</button></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="notes-page">
            <div class="note-container">
                <ul class="list">
                    <li class="list__item">
                        <button class="delete">✖️</button>
                        <p class="list__item-text" contentEditable=true>hello, note</p>
                    </li>
                </ul>
            </div>
        </div>
        <div class="update-container off">
            <form class="update-form">Update password
                <div class="update-form__field">
                    <label for="password">Old Password</label>
                    <input class="input" type="password" name="oldpassword" placeholder="old password" id="oldpassword">
                </div>
                <div class="update-form__field">
                    <label for="password">New password</label>
                    <input class="input" type="password" name="newpassword" placeholder="new password" id="newpassword">
                </div>
                <div class="update-form__field">
                    <label for="password">Repeat new password</label>
                    <input class="input" type="password" name="newpassword2" placeholder="repeat new password"
                        id="newpassword2">
                    <div class="passerror">must contain at least eight characters, at least one number and both
                        lower and uppercase letters and special characters</div>
                </div>
                <div class="form__field">
                    <button class="button" type="submit">save</button>
                </div>
            </form>

            <form class="update-form">Update e-mail
                <div class="update-form__field">
                    <label for="email">email</label>
                    <input class="input" type="email" name="email" placeholder="e-mail" id="email">
                </div>
                <div class="form__field">
                    <button class="button" type="submit">save</button>
                </div>

            </form>
        </div>
        <div class="botcontainer homecontainer">
            <footer class="homefooter">
                <button class="addnote">✏️</button>
            </footer>
        </div>
    </main>`

        this.container = temp.firstChild

    }
    setName(name) {
        this.container.querySelector('.greeting').innerText = 'Hello, ' + name + '!'
    }

    renderList(notes) {

        const list = this.container.querySelector('.list')
        list.innerHTML = ''

        notes.forEach(note => {
            const item = document.createElement('li')
            item.classList.add('list__item')

            const deleteButton = document.createElement('button')
            deleteButton.classList.add('delete')
            deleteButton.innerHTML = '✖️'
            deleteButton.onclick = () => {
                this.onDeleteNoteClick(note.id)
            }

            const text = document.createElement('p')
            text.contentEditable = true
            text.classList.add('list__item-text')

            text.onkeyup = () => {
                if (window.updateNoteTimeoutId)
                    clearTimeout(window.updateNoteTimeoutId)

                window.updateNoteTimeoutOId = setTimeout(() => {
                    this.onUpdateNote(note.id, text.innerText)
                }, 500)

            }
            text.innerHTML = note.text

            item.append(deleteButton, text)

            list.append(item)

        })

    }

    onDeleteNoteClick = null

    onUpdateNote = null
}