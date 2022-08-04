class Home {
    constructor() {
        const temp = document.createElement('temp')

        temp.innerHTML = `<main class="home-page">
            <div class="menu-header">
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
            </div>
        
            <div class="notas-display">
            <ul class="list"></ul>
            </div>
        
            <div class="hidden-menu von voff">
            <div class="profile-link">Profile</div>
            <div class="notes-link">Notes</div>
            </div>
        
            <footer class="footer">+</footer>
        </main>`

        const temp2 = document.createElement('temp')
        
        temp2.innerHTML = `<div class="profile">
        <h2>Profile</h2>
        <div class="form-container">
            
            <form class="password-form">
            <h3>Update password</h3>
    
            <label for="currentPassword">Current password</label>
            <input type="password" name="currentPassword" placeholder="current password">
            
            <label for="newPassword">New password</label>
            <input type="password" name="newPassword" placeholder="new password">
            
            <label for="repeatPassword">Repeat password</label>
            <input type="password" name="repeatPassword" placeholder="repeat password">
    
            <button type="submit">Send</button>
            </form>
        </div>
        <div class="form-container">
            <form class="email-form">
            <h3>Update email</h3>
    
            <label for="newEmail">New email</label>
            <input type="email" name="newEmail" placeholder="new email">
    
            <button type="submit">Send</button>
            </form>
        </div>
        </div>`

        this.container = temp.firstChild

        this.settingsPanel = temp2.firstChild

        this.container.querySelector('.logout-button').onclick = () => {
            while (this.container.firstChild) {
                this.container.removeChild(this.container.firstChild)
            }
            this.container.append(menuHeader, hiddenMenu, notasDisplay, footer)
            this.onLogout()
        }

        this.container.querySelector('.footer').onclick = () => {
            this.onAddNote()
        }

        const menuHeader = this.container.querySelector('.menu-header')
        const notasDisplay = this.container.querySelector('.notas-display')
        const footer = this.container.querySelector('.footer')

        const menuButton = this.container.querySelector('.menu')
        const hiddenMenu = this.container.querySelector('.hidden-menu')
        menuButton.onclick = () => {
                menuButton.classList.toggle('rotate')
                hiddenMenu.classList.toggle('voff')
        }

        const profileLink = this.container.querySelector('.profile-link')
        profileLink.onclick = () => {
            menuButton.click()
            while (this.container.firstChild) {
                this.container.removeChild(this.container.firstChild)
            }
            this.container.append(menuHeader, hiddenMenu, this.settingsPanel)
        }

        const notesLink = this.container.querySelector('.notes-link')
        notesLink.onclick = () => {
            menuButton.click()
            while (this.container.firstChild) {
                this.container.removeChild(this.container.firstChild)
            }
            this.container.append(menuHeader, hiddenMenu, notasDisplay, footer)
        }

    }

    setName(name) {
        this.container.querySelector('.saludo').innerText = 'Hello, ' + name + '!'
    }


    renderList(notes) {
        const list = this.container.querySelector('.list')
        list.innerHTML = ''

        notes.forEach(note => {
            const item = document.createElement('li')
            item.classList.add('list__item')

            const deleteButton = document.createElement('button')
            deleteButton.classList.add('list__item-delete-button')
            deleteButton.innerText = 'x'
            deleteButton.onclick = () => {
                this.onDeleteNoteClick(note.id)
            }

            const text = document.createElement('div')
            text.contentEditable = true
            text.classList.add('list__item-text')
            text.onkeyup = () => { // auto-binding. mete el this de fuera dentro de la funcion. se consigue con arrow function
                if (window.timeoutID) // con el objeto window puedo añadir variables globales
                    clearTimeout(window.timeoutID)
                window.timeoutID = setTimeout(() => {
                    this.onUpdateNote(note.id, text.innerText)
                }, 1000)
            }
            text.innerText = note.text

            item.append(deleteButton, text)

            list.append(item)
            
        })
    }

    updatePassword(callback) {
        const passwordForm = this.settingsPanel.querySelector('.password-form')

        passwordForm.onsubmit = (event) => {
            event.preventDefault()
            const currentPass = passwordForm.currentPassword.value
            const newPass = passwordForm.newPassword.value
            const repeatPass = passwordForm.repeatPassword.value
            callback(currentPass, newPass, repeatPass)
        }
    }

    updateEmail(callback) {
        const emailForm = this.settingsPanel.querySelector('.email-form')

        emailForm.onsubmit = (event) => {
            event.preventDefault()
            const newEmail = emailForm.newEmail.value
            callback(newEmail)
        }
    }

    resetEmailForm() {
        this.settingsPanel.querySelector('.email-form').reset()
    }

    resetPasswordForm() {
        this.settingsPanel.querySelector('.password-form').reset()
    }

    onDeleteNoteClick = null

    onUpdateNote = null

    onLogout = null

    onAddNote = null

}