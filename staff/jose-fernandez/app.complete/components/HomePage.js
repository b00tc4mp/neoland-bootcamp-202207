class HomePage extends Component {
    constructor() {
        super(`<div class="container home_page ">
        

        <main class="main_home">            
            <!--============================= LIST====================== -->
            <!--============================= CREATE NOTE====================== -->        
            <!--=============================Settings====================== -->
            <!--=============================Desings====================== --> 
        </main>

        <footer class="footer_home">
            <div class="btn_plus">
               <span class="material-symbols-outlined add">add</span>       
            </div>

        </footer>
    </div>`)



        this.main = this.container.querySelector('.main_home')
        this.footer = this.container.querySelector('.footer_home')
        const btnPlus = this.container.querySelector('.btn_plus')
        this.btnPlus=btnPlus

        btnPlus.onclick = () => {
            this.main.removeChild(this.listPanel.container)
            this.main.append(this.formCreateNote)
            this.footer.removeChild(btnPlus)
        }

        const headerPanel = new HeaderPanel
        this.container.prepend(headerPanel.container)

        headerPanel.onMenuButtonClick = () => {
            if (this.main.contains(settingsPanel.container))
                headerPanel.hideMenuSettingsButton()
        }


        headerPanel.onSettingsButtonClick = () => {
            if (this.footer.contains(btnPlus))
                this.footer.removeChild(btnPlus)

            this.main.removeChild(this.listPanel.container)
            this.main.append(settingsPanel.container)
        }


        const settingsPanel = new SettingsPanel
        const listPanel = new ListPanel
        this.listPanel= listPanel
        this.main.append(listPanel.container)

        listPanel.onDeleteNote = noteId => this.onDeleteNote(noteId)
        listPanel.onUpdateNote=(noteId,text) =>this.onUpdateNote(noteId,text)

        headerPanel.onLogoutButtonClick=()=>{
            if(this.main.contains(settingsPanel.container))
            settingsPanel.close()

            this.onLogoutButtonClick()
        }

        settingsPanel.onUpdatePassword = (oldPassword,newPassword,newPasswordRepeat) =>{
            this.onUpdatePassword(oldPassword,newPassword,newPasswordRepeat)
        }

        settingsPanel.onClose=()=>{
            this.main.removeChild(settingsPanel.container)

            headerPanel.closeMenu()

            this.main.append(listPanel.container)
            this.footer.append(btnPlus)
        }

        //continuar
        this.formCreateNote = templateToDOM(`<form class="formcreateNote" name="formcreateNote">

        <button class="btn_arrLeft" type="submit">
            <i class="fa-solid fa-arrow-left"></i>
        </button>

        <li class="list__itemNew">
            <textarea class="list__item-textNew" id="newNote" name="newItemNote"
                placeholder="New Note!!"></textarea>
        </li>

    </form>`)


    }

    setName(name) {
        this.container.querySelector('.messageTitle').innerText = 'Hello ' + name + ' !'
    }
    
    renderList(notes) {
        this.listPanel.renderList(notes)
    }
    // renderList(notes) {
    //     const list = this.container.querySelector('.list')
    //     list.innerHTML = ""

    //     notes.forEach(note => {
    //         const item = document.createElement('li')
    //         item.classList.add('list__item')

    //         const deleteButton = document.createElement('button')
    //         deleteButton.classList.add('btn__delete')
    //         deleteButton.innerText = 'x'
    //         deleteButton.onclick = () => {
    //             this.onDeleteNoteClick(note.id)
    //         }

    //         // const text = document.createElement('p')
    //         const text = document.createElement('textarea')
    //         text.classList.add('list__item-text')
    //         text.onkeyup = () => {
    //             if (window.updateNoteTimeoutId)
    //                 clearTimeout(window.updateNoteTimeoutId)

    //             window.updateNoteTimeoutId = setTimeout(() => {
    //                 this.onUpdateNote(note.id, text.value)
    //             }, 500)
    //         }
    //         text.value = note.text
    //         item.append(deleteButton, text)
    //         list.append(item)

    //     })
    // }



    onFormCreateNote = (callback) => {
        this.formCreateNote.onsubmit = event => {
            event.preventDefault()
            let textarea = this.formCreateNote.newItemNote

            if (textarea.value === "") alert('nothing')

            else {
                callback(textarea.value)

                textarea.value = ""

                // this.reset()
            }

            this.main.removeChild(this.formCreateNote)
            this.main.prepend(this.listPanel.container)
            this.footer.append(this.btnPlus)
        }
    }

    onDeleteNote = null
    onUpdateNote = null
    onLogoutButtonClick = null
    onUpdatePassword = null
}

