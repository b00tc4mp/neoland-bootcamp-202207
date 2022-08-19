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
        
        </div>
        <div class="botcontainer homecontainer">
            <footer class="homefooter">
                <button class="addnote">✏️</button>
            </footer>
        </div>
    </main>`

        this.container = temp.firstChild

        const addButton = this.container.querySelector('.addnote')
        addButton.onclick = () => {
            this.onAddNote()
        }

        const topContainer = this.container.querySelector('.topcontainer')
        const header = this.container.querySelector('.header')
        const botContainer = this.container.querySelector('.botcontainer')
        const footer = this.container.querySelector('.homefooter')

        topContainer.append(header)
        const menuButton = header.querySelector('.burger')

        const main = this.container.querySelector('.notes-page')

        const temp2 = document.createElement('temp')
        temp2.innerHTML = `<div class="menu-panel">
        <div class=close></div>
        <ul class="menu-list">
            <li class="menu-panel-settings"><button class=profile-button>Profile Settings</button>
            <li class="menu-panel-logout"><button class=logout-button>Logout</button></li>
        </ul></div>`

        const menuPanel = temp2.firstChild
        const menuPanelOptions = menuPanel.querySelector('.menu-list')
        const menuPanelSettings = menuPanel.querySelector('.menu-panel-settings')
        const menuPanelLogout = menuPanel.querySelector('.menu-panel-logout')
        const menuPanelHome = menuPanel.querySelector('.menu-panel-home')
        const closeButton = menuPanel.querySelector('.close')
        const notesPanel = main.querySelector('.note-container')

        menuPanelLogout.onclick = () => {

            if (!main.contains(notesPanel)) {
            closeButton.click() 
            footer.removeChild(homeButton)
            main.removeChild(updatePasswordPanel)

            footer.append(addButton)
            main.append(notesPanel)
            menuPanelOptions.append(menuPanelSettings)
            menuPanelOptions.append(menuPanelLogout)
        }

            this.onLogout()
        }

        menuButton.onclick = () => {
            header.removeChild(menuButton)
            header.append(menuPanel)
        }

        closeButton.onclick = () => {
            if(header.contains(menuPanel)){
            header.removeChild(menuPanel)} 

            header.append(menuButton)
        }

        const temp3 = document.createElement('temp')
        temp3.innerHTML = `<div class="update-container">
        <form class="update-password-form update-form">Update password
            
                <label for="password">Old Password</label>
                <input class="input" type="password" name="oldpassword" placeholder="oldpassword" id="oldpassword">
          
                <label for="password">New password</label>
                <input class="input" type="password" name="newpassword" placeholder="newpassword" id="newpassword">
           
                <label for="password">Repeat new password</label>
                <input class="input" type="password" name="newpassword2" placeholder="repeat newpassword"
                    id="newpassword2">
                  
                <button class="submitbutton" type="submit">save</button>
        
        </form>

        <form class="update-email-form update-form">Update e-mail
           
                <label for="email">email</label>
                <input class="input" type="newemail" name="newemail" placeholder="e-mail" id="newemail">
            
                <button class="submitbutton" type="submit">save</button>
            

        </form>
            </div>`


        const updatePasswordPanel = temp3.firstChild
        const updateEmailPanel = temp3.lastChild


        this.updateEmailForm = updateEmailPanel.querySelector('.update-email-form')
        this.updatePasswordForm = updatePasswordPanel.querySelector('.update-password-form')

        const homeButton = document.createElement('temp')
        homeButton.innerHTML = `<div class="footer-panel-home"><span class="material-symbols-outlined homeSpan">
        home</span></div>`

        menuPanelSettings.onclick = () => {
            closeButton.click()

            menuPanelOptions.removeChild(menuPanelSettings)
            main.removeChild(notesPanel)
            footer.removeChild(addButton)

            footer.append(homeButton)
            main.append(updatePasswordPanel)
            main.append(updateEmailPanel)
        }

        homeButton.onclick = () => {
            closeButton.click()
            footer.removeChild(homeButton)
            main.removeChild(updatePasswordPanel)

            footer.append(addButton)
            main.append(notesPanel)
            menuPanelOptions.append(menuPanelSettings)
            menuPanelOptions.append(menuPanelLogout)

        }

        // <div class="passerror">must contain at least eight characters, at least one number and both
        //             lower and uppercase letters and special characters</div>
    }

    onUpdatePassword(callback) {
        this.updatePasswordForm.onsubmit = (event) => {
            event.preventDefault()

            const oldPass = this.updatePasswordForm.oldpassword.value
            const newPass = this.updatePasswordForm.newpassword.value
            const newPass2 = this.updatePasswordForm.newpassword2.value

            callback(oldPass, newPass, newPass2)
        }
    }

    onUpdateEmail(callback) {
        this.updateEmailForm.onsubmit = (event) => {
            event.preventDefault()

            const newEmail = this.updateEmailForm.newemail.value
            
            callback(newEmail)
        }
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

    onLogout = null

    onAddNote = null
}