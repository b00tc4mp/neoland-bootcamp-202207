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
            <p  contenteditable="true" class="list__item-textNew"  id="newNote" name="newItemNote"
                placeholder="New Note!!"></p>
        </li>

    </form>`)


    }

    setName(name) {
        this.container.querySelector('.messageTitle').innerText = 'Hello ' + name + ' !'
    }
    
    renderList(notes) {
        this.listPanel.renderList(notes)
    }
    

    onFormCreateNote = (callback) => {
        this.formCreateNote.onsubmit = event => {
            event.preventDefault()
            let p = this.formCreateNote.querySelector('p')

            if (p.innerText === "") alert('nothing')

            else {
                callback(p.innerText)

                p.innerText = ""

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

