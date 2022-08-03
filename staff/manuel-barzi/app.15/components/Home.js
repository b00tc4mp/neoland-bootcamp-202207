class Home {
    constructor() {
        const temp = document.createElement('temp')

        temp.innerHTML = `<div class="home-page container container--distributed">
            <header class="header">
                <h1 class="title">Hello, User!</h1>
                <button class="menu-button transparent-button"><span class="material-symbols-outlined">menu</span></button>
                <button class="close-button transparent-button off"><span class="material-symbols-outlined">close</span></button>
            </header>

            <main class="main">
                <div class="menu-panel off">
                    <ul>
                        <li><button class="settings-button transparent-button"><span class="material-symbols-outlined">settings</span></button></li>
                        <li><button class="logout-button transparent-button"><span class="material-symbols-outlined">logout</span></button></li>
                    </ul>
                </div>

                <ul class="list-panel list">
                    <li class="list__item"><button class="list__item-delete-button">x</button>
                        <p contenteditable="true" class="list__item-text">Hello, Note! Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Dolores ab sunt tempora esse eaque, maiores similique ipsam
                            deserunt eius soluta adipisci blanditiis nobis fugiat aut nesciunt rerum porro delectus
                            distinctio?</p>
                    </li>
                    <li class="list__item"><button class="list__item-delete-button">x</button>
                        <p contenteditable="true" class="list__item-text">Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Dolores ab sunt tempora esse eaque, maiores similique ipsam deserunt eius soluta adipisci
                            blanditiis nobis fugiat aut nesciunt rerum porro delectus distinctio?</p>
                    </li>
                    <li class="list__item"><button class="list__item-delete-button">x</button>
                        <p contenteditable="true" class="list__item-text">Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Dolores ab sunt tempora esse eaque, maiores similique ipsam deserunt eius soluta adipisci
                            blanditiis nobis fugiat aut nesciunt rerum porro delectus distinctio?</p>
                    </li>
                    <li class="list__item"><button class="list__item-delete-button">x</button>
                        <p contenteditable="true" class="list__item-text">Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Dolores ab sunt tempora esse eaque, maiores similique ipsam deserunt eius soluta adipisci
                            blanditiis nobis fugiat aut nesciunt rerum porro delectus distinctio?</p>
                    </li>
                    <li class="list__item"><button class="list__item-delete-button">x</button>
                        <p contenteditable="true" class="list__item-text">Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Dolores ab sunt tempora esse eaque, maiores similique ipsam deserunt eius soluta adipisci
                            blanditiis nobis fugiat aut nesciunt rerum porro delectus distinctio?</p>
                    </li>
                    <li class="list__item"><button class="list__item-delete-button">x</button>
                        <p contenteditable="true" class="list__item-text">Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Dolores ab sunt tempora esse eaque, maiores similique ipsam deserunt eius soluta adipisci
                            blanditiis nobis fugiat aut nesciunt rerum porro delectus distinctio?</p>
                    </li>
                    <li class="list__item"><button class="list__item-delete-button">x</button>
                        <p contenteditable="true" class="list__item-text">Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Dolores ab sunt tempora esse eaque, maiores similique ipsam deserunt eius soluta adipisci
                            blanditiis nobis fugiat aut nesciunt rerum porro delectus distinctio? Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Dolores ab sunt tempora esse eaque, maiores similique ipsam
                            deserunt eius soluta adipisci blanditiis nobis fugiat aut nesciunt rerum porro delectus
                            distinctio? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab sunt tempora
                            esse eaque, maiores similique ipsam deserunt eius soluta adipisci blanditiis nobis fugiat aut
                            nesciunt rerum porro delectus distinctio? Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Dolores ab sunt tempora esse eaque, maiores similique ipsam deserunt eius soluta adipisci
                            blanditiis nobis fugiat aut nesciunt rerum porro delectus distinctio? Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Dolores ab sunt tempora esse eaque, maiores similique ipsam
                            deserunt eius soluta adipisci blanditiis nobis fugiat aut nesciunt rerum porro delectus
                            distinctio? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab sunt tempora
                            esse eaque, maiores similique ipsam deserunt eius soluta adipisci blanditiis nobis fugiat aut
                            nesciunt rerum porro delectus distinctio? Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Dolores ab sunt tempora esse eaque, maiores similique ipsam deserunt eius soluta adipisci
                            blanditiis nobis fugiat aut nesciunt rerum porro delectus distinctio?</p>
                    </li>
                </ul>

                <div class="settings-panel off">
                    Settings

                    TODO implement me
                </div>
            </main>

            <footer class="footer">
                <button class="add-button transparent-button">+</button>
            </footer>
        </div>`

        this.container = temp.firstChild
    }

    setName(name) {
        this.container.querySelector('.title').innerText = 'Hello, ' + name + '!'
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

            const text = document.createElement('p')
            text.contentEditable = true
            text.classList.add('list__item-text')
            text.onkeyup = () => {
                if (window.updateNoteTimeoutId)
                    clearTimeout(window.updateNoteTimeoutId)

                window.updateNoteTimeoutId = setTimeout(() => {
                    this.onUpdateNote(note.id, text.innerText)
                }, 1000)
            }
            text.innerText = note.text

            item.append(deleteButton, text)

            list.append(item)
        })
    }

    onDeleteNoteClick = null

    onUpdateNote = null
}