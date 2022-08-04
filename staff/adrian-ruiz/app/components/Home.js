class Home {
    constructor() {
        const temp = document.createElement('temp')

        temp.innerHTML = `<main class="page homePage">
            <header>
                <span class="homeIcon material-symbols-outlined">
                    home
                    </span>
                <h1 id="headerTitle">Hello, Pepito</h1>

                    <div class="menuContainer">
                        <div class="menuIcon"></div>
                        <div class="menuIcon1"></div>
                        <div class="menuIcon2"></div>
                        <div class="dropdownMenu off">
                            <ul>
                                <li><a href="#" class="profileLink">Profile</a></li>
                                <li><a href="#" class="settingsLink">Settings</a></li>
                                <li><a href="#" class="logoutLink">Logout</a></li>
                            </ul>
                    </div>
                    

                    </div>
            </header>
            
            <section class="homeMainContainer home__notesContainer">
                <ul class="notesList">
                    <li class="note">
                        <div class="deleteNoteButton">✖</div>
                        <div class="noteTitle" contenteditable="true">TITULO TESTING HTML</div>
                        <p class="noteText" contenteditable="true">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate dolores reprehenderit enim? Natus amet, accusamus ducimus doloribus molestias, velit et laborum non ab adipisci quisquam ut nulla. Vero, dolores asperiores.
                        </p>
                        <div class="changeNoteColorContainer">
                            <div class="changeNoteBlue"></div>
                            <div class="changeNoteRed"></div>
                            <div class="changeNoteGreen"></div>
                            <div class="changeNoteOrange"></div>
                            <div class="ChangeNotePurple"></div>
                            <div class="changeNoteGrey"></div>
                        </div>
                    </li>
                    <li class="note">
                        <div class="deleteNoteButton">✖</div>
                        <div class="noteTitle" contenteditable="true">TITULO TESTING HTML</div>
                        <div class="noteText" contenteditable="true">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate dolores reprehenderit enim? Natus amet, accusamus ducimus doloribus molestias, velit et laborum non ab adipisci quisquam ut nulla. Vero, dolores asperiores.
                        </div>
                    </li>
                    <li class="note">
                        <div class="deleteNoteButton">✖</div>
                        <div class="noteTitle" contenteditable="true">TITULO TESTING HTML</div>
                        <div class="noteText" contenteditable="true">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate dolores reprehenderit enim? Natus amet, accusamus ducimus doloribus molestias, velit et laborum non ab adipisci quisquam ut nulla. Vero, dolores asperiores.
                        </div>
                    </li>
                        <li class="note">   
                            <div class="deleteNoteButton">✖</div>
                            <div class="noteTitle" contenteditable="true">TITULO TESTING HTML</div>
                            <div class="noteText" contenteditable="true">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate dolores reprehenderit enim? Natus amet, accusamus ducimus doloribus molestias, velit et laborum non ab adipisci quisquam ut nulla. Vero, dolores asperiores.
                            </div>
                        </li>
                </ul>
            </section>
            
            <section class="bottomMenu">
                <button class="newNoteButton"><span class="newNoteEmoji">📝</span></button>
            </section>
        </main>`

        this.container = temp.firstChild

        this.main = this.container.querySelector('.homeMainContainer')
        const notesList = this.container.querySelector('.notesList')

        const homeIcon = this.container.querySelector('.homeIcon')
        this.profileStatusControler = 'off'
        this.profileMenuContainer = this.container.querySelector('.home__profileContainer')

        this.dropdownMenu = this.container.querySelector('.dropdownMenu')
        const menuContainer = this.container.querySelector('.menuContainer')

        menuContainer.onclick = function () {
            menuContainer.classList.toggle("change")
            home.dropdownMenu.classList.toggle("off")
            home.dropdownMenu.classList.toggle("displayBlock")
        }

        this.container.querySelector('.logoutLink').onclick = () => {
            this.onLogout()
            if (this.profileStatusControler === 'on') {
                this.main.removeChild(profileContainer)
                this.footer.append(newNoteButton)
            }
            this.profileStatusControler = 'off'
            this.main.append(notesList)
        }
        const newNoteButton = this.container.querySelector('.newNoteButton')
        newNoteButton.onclick = () => {
            this.onNewNoteButton()
        }

        const popUpTemp = document.createElement('temp')
        popUpTemp.innerHTML = `<div class="containerPopUp">
            <div class="newNotePopUp">
                <form class="newNoteForm" action="#">
                    <label for="newNoteTitle" class="newNoteLabel">Title</label>
                    <div contenteditable="true" class="newNoteInput newNoteInput__title" name="newNoteTitle"></div>
                    <label for="newNoteText" class="newNoteLabel">Describe your new note</label>
                    <div contenteditable="true" class="newNoteInput newNoteInput__text" name="newNoteText"></div>
                    <div class="newNoteButtonsContainer">
                        <button class="newNoteFormButton" id="confirmNewNoteButton">Create note</button>
                        <button class="newNoteFormButton" id="cancelNewNoteButton">Cancel</button>
                    </div>
                    
                </form>
            </div>
        </div>`

        this.notePopUp = popUpTemp.firstChild
        this.confirmNewNoteButton = this.notePopUp.querySelector('#confirmNewNoteButton')
        this.cancelNewNoteButton = this.notePopUp.querySelector('#cancelNewNoteButton')
        this.newNoteTitle = this.notePopUp.querySelector('.newNoteInput__title')
        this.newNoteText = this.notePopUp.querySelector('.newNoteInput__text')

        const profileContainerTemp = document.createElement('temp')
        profileContainerTemp.innerHTML = `<section class="homeMainContainer home__profileContainer">
        <div class="profileMenuContainer">
            <form id="updatePasswordForm" action="#">
                <label for="oldPassword" class="labelForm">Old Password</label>
                <input type="password" name="oldPassword" class="profileInput">
                <label for="newPassword" class="labelForm">New Password</label>
                <input type="password" name="newPassword" class="profileInput">
                <label for="confirmNewPassword" class="labelForm">Confirm New Password</label>
                <input type="password" name="confirmNewPassword" class="profileInput">
                <button type="submit" class="profileFormButton" id="updatePasswordSubmit">Confirm</button>
            </form>
            <form id="updateEmailForm" action="#">
                <label for="newEmail" class="labelForm">New Email</label>
                <input type="email" name="newEmail" class="profileInput">
                <button type="submit" class="profileFormButton" id="updateEmailSubmit">Confirm</button>
            </form>
        </div>
    </section>`

        this.footer = this.container.querySelector('.bottomMenu')

        const profileContainer = profileContainerTemp.firstChild
        const profileLink = this.container.querySelector('.profileLink')

        profileLink.onclick = () => {
            if (this.profileStatusControler === 'off') {
                this.main.removeChild(notesList)
                this.footer.removeChild(newNoteButton)
                this.profileStatusControler = 'on'
            }

            this.main.append(profileContainer)

        }

        homeIcon.onclick = () => {

            if (this.profileStatusControler === 'on') {
                this.main.removeChild(profileContainer)
                this.profileStatusControler = 'off'
                this.main.append(notesList)
            }
            this.footer.append(newNoteButton)
            notesList.scroll({ 'top': 0, 'behavior': "smooth" })
        }

        this.updatePassForm = profileContainer.querySelector('#updatePasswordForm')
        this.updateEmailForm = profileContainer.querySelector('#updateEmailForm')
    }

    setName(name) {
        this.container.querySelector('#headerTitle').innerText = `Hello, ${name}!`
    }

    renderList(notes) {
        const notesList = this.container.querySelector('.notesList')
        notesList.innerHTML = ''

        notes.reverse().forEach(note => {
            //Note
            const container = document.createElement('li')
            container.classList.add('note')
            container.style.backgroundColor = note.color
            //Delete Button
            const deleteButton = document.createElement('div')
            deleteButton.classList.add('deleteNoteButton')
            deleteButton.textContent = '✖'
            //Note Title
            const elementTitle = document.createElement('div')
            elementTitle.classList.add('noteTitle')
            elementTitle.contentEditable = true
            //Note text
            const elementText = document.createElement('div')
            elementText.classList.add('noteText')
            elementText.contentEditable = true


            deleteButton.onclick = () => {
                this.onDeleteNoteClick(note.id)

            }

            container.onkeyup = () => {
                if (window.timeOutId)
                    clearTimeout(window.timeOutId)

                window.timeOutId = setTimeout(() => {
                    this.onUpdateNote(note.id, elementTitle.textContent, elementText.textContent)
                }, 500)
            }

            //Botones cambio de color
            const changeColorContainer = document.createElement('div')
            changeColorContainer.classList.add('changeNoteColorContainer')
            const changeBlue = document.createElement('div')
            changeBlue.classList.add('changeNoteBlue')
            changeBlue.onclick = () => {
                this.onChangeNoteColor(notes, note.id, 'blue')
                container.style.backgroundColor = 'blue'

            }
            const changeRed = document.createElement('div')
            changeRed.classList.add('changeNoteRed')
            changeRed.onclick = () => {
                this.onChangeNoteColor(notes, note.id, 'red')
                container.style.backgroundColor = 'red'
            }
            const changeGreen = document.createElement('div')
            changeGreen.classList.add('changeNoteGreen')
            changeGreen.onclick = () => {
                this.onChangeNoteColor(notes, note.id, 'green')
                container.style.backgroundColor = 'green'
            }
            const changeOrange = document.createElement('div')
            changeOrange.classList.add('changeNoteOrange')
            changeOrange.onclick = () => {
                this.onChangeNoteColor(notes, note.id, 'orange')
                container.style.backgroundColor = 'orange'
            }
            const changePurple = document.createElement('div')
            changePurple.classList.add('changeNotePurple')
            changePurple.onclick = () => {
                this.onChangeNoteColor(notes, note.id, '#7d19c4')
                container.style.backgroundColor = '#7d19c4'
            }
            const changeGrey = document.createElement('div')
            changeGrey.classList.add('changeNoteGrey')
            changeGrey.onclick = () => {
                this.onChangeNoteColor(notes, note.id, 'grey')
                container.style.backgroundColor = 'grey'
            }

            changeColorContainer.append(changeBlue, changeRed, changeGreen, changeOrange, changePurple, changeGrey)

            elementTitle.textContent = note.title
            elementText.textContent = note.text
            container.append(deleteButton, elementTitle, elementText, changeColorContainer)
            notesList.append(container)
        })
    }

    onUpdateUserPass(callback){
        

        this.updatePassForm.onsubmit = (event) => {

            event.preventDefault()
            const oldPass = this.updatePassForm.oldPassword.value
            const newPass = this.updatePassForm.newPassword.value
            const confirmNewPass = this.updatePassForm.confirmNewPassword.value

            callback(oldPass,newPass,confirmNewPass)
            this.updatePassForm.reset()
        }
    }

    onUpdateUserEmail(callback){

        this.updateEmailForm.onsubmit = (event) => {
            event.preventDefault()
            const newEmail = this.updateEmailForm.newEmail.value

            callback(newEmail)
            this.updateEmailForm.reset()
        } 
    }

    onDeleteNoteClick = null

    onUpdateNote = null

    onChangeNoteColor = null

    onLogout = null

    onNewNoteButton = null
}