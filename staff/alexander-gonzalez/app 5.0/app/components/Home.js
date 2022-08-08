class Home {
    constructor() {
        const temp = document.createElement('temp')

        temp.innerHTML =  `<div class="home-page container ">
        <header class="header">
          <nav id="menu">
            <ul>
              
              <li><a href="#">Menu</a>
                <ul>
                  <li><a href="#">Setting</a></li>
                  <li><a href="#">Profile</a></li>
                  <li><a href="#">Return Home</a></li>
                </ul>
              </li>
              </nav>
          
          <h1 class="title">Hello, World!</h1>
          <button class="logout-button transparent-button"><span class="material-symbols-outlined">logout</span></button>
    
            </header>
        
    
        <main class="main">
           <ul class="list ">
             <li class="'list__item"><button class="list__item-delete-button">x</button>
                <textarea contenteditable="true" class="list__item-text">Hello, Note!</textarea>
              <textarea contenteditable="true" class="list__item-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident alias doloremque minus cum velit error eum perspiciatis, obcaecati sequi dolorem totam ipsum, ab illum aspernatur debitis facere deleniti accusantium praesentium!</textarea>
            </li>
            
             <li class="list__item"><button class="list__item-delete-button">x</button>
              <textarea contenteditable="true" class="list__item-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius iure odit illum consequatur, nam fugit optio. Ducimus dolores maxime voluptas fugiat inventore illum deserunt dolorem numquam, sapiente magni rem aliquid!</textarea>
            </li>
          </ul>
    
          
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

        const text = document.createElement('textarea')
        text.contentEditable = true
        text.classList.add('list__item-text')
        text.onkeyup = () => {
            if(window.updateNoteTimeoutId)
            clearTimeout(window.updateNoteTimeoutId)

            window.updateNoteTimeoutId = setTimeout (() =>{
                this.onUpdateNote(note.id, text.innertext)
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