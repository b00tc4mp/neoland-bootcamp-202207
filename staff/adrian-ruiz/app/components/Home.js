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
            <div class="containerPopUp off">
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
            </div>
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
            <section class="homeMainContainer home__profileContainer off">
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
            </section>
            <section class="bottomMenu">
                <button class="newNoteButton"><span class="newNoteEmoji">📝</span></button>
            </section>
        </main>`

        this.container = temp.firstChild
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

    onDeleteNoteClick = null

    onUpdateNote = null

    onChangeNoteColor = null
}