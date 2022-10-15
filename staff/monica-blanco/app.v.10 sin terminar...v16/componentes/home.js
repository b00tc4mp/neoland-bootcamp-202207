class Home {
    constructor() {
        const temp = document.createElement('temp')

        temp.innerHTML = `<div class="home-page container">
        <header class="header">
            <img class="imgHome" src="https://media4.giphy.com/media/lnyLJ57x8jJ13ZDhTZ/giphy.gif?cid=a267dfa35mpqsy8edagjq1n6d14c20r903cyt2gneqzbgona&rid=giphy.gif&60490a1f0d4f710d77dfff46&1653264000136">
            <h1 class="title"> Hello, Pepito!! </h1>
            <button class="menu-button transparent-button"><span class="material-symbols-outlined">menu</span></button>
        </header>    

        <main class="main">
            <ul class="list-panel list">
                <li class="list__item"><button class="list__item-delete-button">x</button>
                    <p contenteditable="true" class="list__item-text">Lorem electus distinctio?</p>
                </li>
                <li class="list__item"><button class="list__item-delete-button">x</button>
                    <p contenteditable="true" class="list__item-text">Hello, Note!</p>
                </li>
                <li class="list__item"><button class="list__item-delete-button">x</button>
                    <p contenteditable="true" class="list__item-text">Lorem imilique ipsam deserunt eius soluta adipisci
                        blanditiis nobis fugiat aut nesciunt rerum porro delectus distinctio?</p>
                </li>
                <li class="list__item"><button class="list__item-delete-button">x</button>
                    <p contenteditable="true" class="list__item-text">Lorem delectus distinctio?</p>
                </li>
                <li class="list__item"><button class="list__item-delete-button">x</button>
                    <p contenteditable="true" class="list__item-text">Lorem  delectus distinctio?</p>
                </li>
                <li class="list__item"><button class="list__item-delete-button">x</button>
                    <p contenteditable="true" class="list__item-text">Lorem rerum porro delectus distinctio?</p>
                </li>
                <li class="list__item"><button class="list__item-delete-button">x</button>
                    <p contenteditable="true" class="list__item-text">Lorem ipsuectustio?</p>
                </li>
            </ul>           
        
        </main>          
            <footer class="footer">
                <button class="add-button transparent-button"> + </button>
            </footer>`

        this.container = temp.firstChild

        const addButton = this.container.querySelector('.add-button')
            addButton.onclick = () => {
                this.onAddNote()
            }
            const header = this.container.querySelector('.header')
            const footer = this.container.querySelector('.footer')

            const menuButton = header.querySelector('.menu-button')

            const temp2 = document.createElement('temp')
            temp2.innerHTML = '<button class="close-button transparent-button"><span class="material-symbols-outlined">close</span></button>'
            const closeButton = temp2.firstChild

            const main = this.container.querySelector('.main')

            const temp3 = document.createElement('temp')
            temp3.innerHTML = `<div class="menu-panel">
            <ul class= "menu-panel__list">
                <li class="menu-panel__list-item-settings"><button class="settings-button transparent-button"><span class="material-symbols-outlined">settings</span></button></li>
                <li><button class="logout-button transparent-button"><span class="material-symbols-outlined">logout</span></button></li>
                <li><button class="settings-button transparent-button"><span class="material-symbols-outlined">favorite </span></button></li>
            </ul>
        </div>`
            const menuPanel = temp3.firstChild

            const menuPanelList = menuPanel.querySelector('.menu-panel__list')
            const menuPanelListItemSettings = menuPanelList.querySelector('.menu-panel__list-item-settings')

            menuPanel.querySelector('.logout-button').onclick = () => {
               if (!main.contains (listPanel)){
                main.removeChild(settingsPanel)
                main.append(listPanel)
               }

               close.Button.click()
                this.onLogout()
            }

            menuButton.onclick = () => {
                header.removeChild(menuButton)
                header.append(closeButton)

                if (main.contains(settingsPanel))
                    menuPanelList.removeChild(menuPanelListItemSettings)
                else 
                    menuPanelList.prepend(menuPanelListItemSettings)

                main.prepend(menuPanel)
            }

            closeButton.onclick = () => {
                if (header.contains(closeButton))
                    header.removeChild(closeButton)

                header.append(menuButton)

                if (main.contains(menuPanel))
                    main.removeChild(menuPanel)
            }
            const listPanel = main.querySelector('.list-panel')

            const temp4 = document.createElement('temp')
            temp4.innerHTML = `<div class= "settings-panel">
        <form class="form-profile password ">
        <img class="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3Ne6f06tRXhNZQl2jp5YjNepB8j5_hojl4LcOcyO-1s7TLzUHGuSIwblFSZ_ihI0BAlU&usqp=CAU">
        <div class="form__field">
            <label for="password">Current Password</label>
            <input class='input' type="text" name="name" placeholder="name" id="name">
        </div>
        <div class="form__field">
            <label for="pasword">New Password</label>
            <input class="input" type="password" name="email" placeholder="email" id="email">
        </div>
        <div class="form__field">
            <label for="email">Current Email</label>
            <input class='input' type="email" name="password" placeholder="password" id="password">
        </div>
        <div class="form__field">
            <label for="email">New Email</label>
            <input class='input' type="email" name="password" placeholder="password" id="password">
        </div>
        <button class="button" type="submit">Register</button>
    </form>
    <button class="close-settings-button transparent-button"><span class="material-symbols-outlined">home</span></button>
    </div>`
            const settingsPanel = temp4.firstChild

            const settingsButton = menuPanel.querySelector('.settings-button')
            settingsButton.onclick = () => {
                closeButton.click()

                if (footer.contains(addButton))
                    footer.removeChild(addButton)

                main.removeChild(listPanel)
                main.append(settingsPanel)

            }

            settingsPanel.querySelector('.close-settings-button').onclick = () => {
                main.removeChild(settingsPanel)

                closeButton.click()

                main.append(listPanel)
                footer.append(addButton)
            }
        }
    
        setName(name){
            this.container.querySelector('.title').innerText = 'Hello, ' + name + '!'
        }

        renderList(notes){
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

                const text = document.createElement('p')
                text.contentEditable = true
                text.classList.add('list__item-text')
                text.onkeyup = () => {
                    if (window.updateNoteTimeoutId)
                        clearTimeout(window.updateNoteTimeoutId)

                    window.updateNoteTimeoutId = setTimeout(() => {
                        this.onUpdateNote(note.id, text.innerText)
                    }, 500)
                }
                text.innerText = note.text

                item.append(deleteButton, text)

                list.append(item)
            })
        }

        onDeleteNoteClick = null

        onUpdateNote = null

        onLogout = null

        onAddNote = null
    }
