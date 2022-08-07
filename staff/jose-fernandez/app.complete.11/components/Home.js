class Home {
    constructor() {
        const temp = document.createElement('temp')
        temp.innerHTML = `<div class="container home_page ">
        <header class="header_home">
            <div class="cont__header">
                <div class="link_home">
                    <img class="img img-home " src="https://i.postimg.cc/ZY1nHGSz/logo-Luanna.png" alt="">
                </div>
                <h1 class="messageTitle">Hello Pepito!!</h1>

                <div class="btn-menu">
                    
                    <span class="material-symbols-outlined"  id="btn-menu">menu</span>
                </div>
            </div>
        </header>

        <main class="main_home">            
            <!--============================= LIST====================== -->
            <ul class="list-panel list ">
                <li class="list__item">
                    <button href="#" class="btn__delete">X</button>
                    <p  class="list__item-text">Hello, Note!</p>

                </li>

                <li class="list__item"><button href="#" class="btn__delete">X</button>
                    <p  class="list__item-text">Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Dolores ab sunt tempora
                        esse eaque, maiores similique ipsam deserunt eius soluta adipisci blanditiis nobis fugiat aut
                        nesciunt rerum porro delectus distinctio?</p>

                </li>
                <li class="list__item"><button href="#" class="btn__delete">X</button>
                    <p  class="list__item-text">Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Dolores ab sunt tempora
                        esse eaque, maiores similique ipsam deserunt eius soluta adipisci blanditiis nobis fugiat aut
                        nesciunt rerum porro delectus distinctio?</p>

                </li>
            </ul>
            </ul>

            <!--============================= CREATE NOTE====================== -->
       
           
            <!--=============================Settings====================== -->
            <!--=============================Desings====================== --> 
           
            

        </main>

        <footer class="footer_home">
            <div class="btn_plus">
               <span class="material-symbols-outlined add">add</span>       
            </div>

        </footer>
    </div>`

        this.container = temp.firstChild
        this.header = this.container.querySelector('.header_home')
        this.main = this.container.querySelector('.main_home')
        this.footer = this.container.querySelector('.footer_home')


        this.list = this.container.querySelector('.list')

        const temp2 = document.createElement('temp')
        temp2.innerHTML = `<form class="formcreateNote" name="formcreateNote">

                <button class="btn_arrLeft" type="submit">
                    <i class="fa-solid fa-arrow-left"></i>
                </button>

                <li class="list__itemNew">
                    <textarea class="list__item-textNew" id="newNote" name="newItemNote"
                        placeholder="New Note!!"></textarea>
                </li>

            </form>`
        this.formCreateNote = temp2.firstChild

        const temp3 = document.createElement('temp')
        temp3.innerHTML = `<div class="btn-close">
        <span class="material-symbols-outlined"  id="btn-close">close</span>
    </div>`
        this.btnClose = temp3.firstChild

        this.contHeader = this.header.querySelector('.cont__header')
        this.btnMenu = this.contHeader.querySelector('.btn-menu')
        this.listPanel = this.main.querySelector('.list-panel')
        //
        const temp4 = document.createElement('temp')
        temp4.innerHTML = `<form class="settings-panel formSettings">

        <button href="#" class="btnBack">X</button>

        <div class="formPassword contSettings">
            <div class="nameSettings">UPDATE PASSWORD: </div>
            <div class="contButtonsSettings">
                <input class="oldPassword" type="password" name="oldPassword"    placeholder="Current Password">
                <input class="newPassword" type="password" name="newPassword"    placeholder="New Password">
                <input class="repeatNewPassword" type="password" name="repeatNewPassword"  placeholder="Repeat New Password">
            </div>
            <button class="btn-updatePassword" type="submit">Update Password</button>
        </div>
        <div class="formEmail contSettings">
            <div class="nameSettings">UPDATE EMAIL</div>
            <div class="contButtonsSettings">
                <div class="divEmail">
                    <h1 class="normalMessageEmail">Email : </h1><h1 class="messageEmail"> jose@fer.com</h1>
                </div>
        
                <input class="updateEmail" type="email" name="newEmail"  placeholder="New Email">
            </div>
            
            <button class="btn-updatePassword" type="submit">Update Email</button>
        </div>

    </form>`
        const settingsPanel = temp4.firstChild
        

        // ==============================================
        const temp5 = document.createElement('temp')
        temp5.innerHTML = `<nav class="menu-panel nav-home" id="nav-home">
        <ul class="menu-home">
            <li class="menu-item btn_settings"><a class="menu__link ">Settings<span class="material-symbols-outlined">Settings</span></a></li>
            <li class="menu-item btn_design"><a class="menu__link ">Design<span class="material-symbols-outlined">brush</span></a> </li>
            <li class="menu-item"><a class="menu__link"> Menu3 </a> </li>
            <li class="menu-item btn_logout"><a class="menu__link ">Logout <span class="material-symbols-outlined">logout</span></a> </li>
        </ul>
    </nav>`
        this.menuPanel = temp5.firstChild

        this.menuPanelList = this.menuPanel.querySelector('.menu-home')
        const menuPanelListSettings = this.menuPanelList.querySelector('.btn_settings')
        this.menuPanel.querySelector('.btn_logout').onclick = () => {
            if (!this.main.contains(this.listPanel)) {
                this.main.removeChild(settingsPanel)
                this.main.append(this.listPanel)
                 this.footer.append(this.btnPlus)
            }
            this.btnClose.click()

            this.onLogout()
        }

        const headerTop = this.header.querySelector('.cont__header')
        //ARREGLAR NULL EN NAV DE MENU PANEL
        this.btnMenu.onclick = () => {
            headerTop.removeChild(this.btnMenu)
            headerTop.append(this.btnClose)

            if (this.main.contains(settingsPanel))
                this.menuPanelList.removeChild(menuPanelListSettings)

            this.header.append(this.menuPanel)
        }

        this.btnClose.onclick = () => {
            if (headerTop.contains(this.btnClose))
                headerTop.removeChild(this.btnClose)

            headerTop.append(this.btnMenu)


            this.menuPanelList.prepend(menuPanelListSettings)

            if (this.header.contains(this.menuPanel))
                this.header.removeChild(this.menuPanel)
        }

        const settingsButton = this.menuPanel.querySelector('.btn_settings')
        settingsButton.onclick = () => {
            this.btnClose.click()

            if (this.footer.contains(this.btnPlus))
                this.footer.removeChild(this.btnPlus)

            this.main.removeChild(this.listPanel)
            this.main.append(settingsPanel)
        }
        
        settingsPanel.querySelector('.btnBack').onclick=()=>{
            this.main.removeChild(settingsPanel)

            this.btnClose.click()

            this.main.append(this.listPanel)
            this.footer.append(this.btnPlus)
        }
        //continuar


        this.btnPlus = this.container.querySelector('.btn_plus')

        this.btnPlus.onclick = () => {
            this.main.removeChild(this.list)
            this.main.append(this.formCreateNote)
            this.footer.removeChild(this.btnPlus)
        }
    }

    setName(name) {
        this.container.querySelector('.messageTitle').innerText = 'Hello ' + name + ' !'
    }

    renderNotes(notes) {
        const list = this.container.querySelector('.list')
        list.innerHTML = ""

        notes.forEach(note => {
            const item = document.createElement('li')
            item.classList.add('list__item')

            const deleteButton = document.createElement('button')
            deleteButton.classList.add('btn__delete')
            deleteButton.innerText = 'x'
            deleteButton.onclick = () => {
                this.onDeleteNoteClick(note.id)
            }

            // const text = document.createElement('p')
            const text = document.createElement('textarea')
            text.classList.add('list__item-text')
            text.onkeyup = () => {
                if (window.updateNoteTimeoutId)
                    clearTimeout(window.updateNoteTimeoutId)

                window.updateNoteTimeoutId = setTimeout(() => {
                    this.onUpdateNote(note.id, text.value)
                }, 500)
            }
            text.value = note.text
            item.append(deleteButton, text)
            list.append(item)

        })
    }

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
            this.main.prepend(this.list)
            this.footer.append(this.btnPlus)
        }
    }

    onDeleteNoteClick = null
    onUpdateNote = null
    onLogout = null
}

