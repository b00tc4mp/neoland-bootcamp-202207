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
                    <!-- <span class="fa-solid fa-bars" id="btn-menu"></span> -->
                    <span class="material-symbols-outlined"  id="btn-menu">menu</span>
                </div>
               
            </div>

            <nav class="nav-home" id="nav-home">
                <ul class="menu-home">
                    <li class="menu-item"><a class="menu__link profile">Profile</a></li>
                    <li class="menu-item"><a class="menu__link design">Design</a> </li>
                    <li class="menu-item"><a class="menu__link">Menu3</a> </li>
                    <li class="menu-item"><a class="menu__link btn_logout">Logout <span class="material-symbols-outlined">logout</span></a> </li>
                </ul>
            </nav>
        </header>

        <main class="main_home">            
            <!--============================= LIST====================== -->
            <ul class="list ">
                <li class="list__item">
                    <button href="#" class="btn__delete">X</button>
                    <textarea  class="list__item-text">Hello, Note!</textarea>

                </li>

                <li class="list__item"><button href="#" class="btn__delete">X</button>
                    <textarea  class="list__item-text">Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Dolores ab sunt tempora
                        esse eaque, maiores similique ipsam deserunt eius soluta adipisci blanditiis nobis fugiat aut
                        nesciunt rerum porro delectus distinctio?</textarea>

                </li>
                <li class="list__item"><button href="#" class="btn__delete">X</button>
                    <textarea  class="list__item-text">Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Dolores ab sunt tempora
                        esse eaque, maiores similique ipsam deserunt eius soluta adipisci blanditiis nobis fugiat aut
                        nesciunt rerum porro delectus distinctio?</textarea>

                </li>
            </ul>
            </ul>

            <!--============================= CREATE NOTE====================== -->
       
            <form class="formcreateNote off">

                <button class="btn_arrLeft" type="submit">
                    <i class="fa-solid fa-arrow-left"></i>
                </button>

                <li class="list__itemNew">
                    <textarea class="list__item-textNew" id="newNote" name="newItemNote"
                        placeholder="New Note!!"></textarea>
                </li>

            </form>
            <!--=============================PROFILE====================== -->
            <form class="formProfile off">

                <button href="#" class="btnBack">X</button>

                <div class="formPassword contProfile">
                    <div class="nameProfile">UPDATE PASSWORD: </div>
                    <div class="contButtonsProfile">
                        <input class="oldPassword" type="password" name="oldPassword"    placeholder="Current Password">
                        <input class="newPassword" type="password" name="newPassword"    placeholder="New Password">
                        <input class="repeatNewPassword" type="password" name="repeatNewPassword"  placeholder="Repeat New Password">
                    </div>
                    <button class="btn-updatePassword" type="submit">Update Password</button>
                </div>
                <div class="formEmail contProfile">
                    <div class="nameProfile">UPDATE EMAIL</div>
                    <div class="contButtonsProfile">
                        <div class="divEmail">
                            <h1 class="normalMessageEmail">Email : </h1><h1 class="messageEmail"> jose@fer.com</h1>
                        </div>
                
                        <input class="updateEmail" type="email" name="newEmail"  placeholder="New Email">
                    </div>
                    
                    <button class="btn-updatePassword" type="submit">Update Email</button>
                </div>

            </form>
            <!--=============================DESIGN====================== -->
            <form class="formDesign off">

                <button href="#" class="btnBack">X</button>

                <div class="contDesign">
                    <div class="nameDesign">SIZE TEXT </div>
                    <div class="contButtons">
                        <button class="textSmall" onclick="" type="submit" >Small</button>
                        <button class="textNormal" type="submit">Normal</button>
                        <button class="textBig" type="submit">Big</button>
                    </div>
                </div>
                <div class="contDesign">
                    <div class="nameDesign">$·$·$</div>
                    <div class="contButtons">
                        <button class="">$·$%&</button>
                        <button class="">$·$%&</button>
                        <button class="">$·$%&</button>
                    </div>
                </div>

            </form>
            <!-- ================== ===============-->
            

        </main>

        <footer class="footer_home">
            <!-- <div class="btn_foot"> -->
            <div class="btn_plus">
                <i class="fa-solid fa-plus"></i>
                <!-- <span class="material-symbols-sharp" class="fa-solid fa-plus">add</span> -->
                    
            </div>

        </footer>
    </div>`

    this.container = temp.firstChild

    const header = this.container.querySelector('.header_home')
    const main = this.container.querySelector('.main_home')
    const footer = this.container.querySelector('.footer_home')
    
    const formCreateNote = this.container.querySelector('.formcreateNote')
    const list = this.container.querySelector('.list')
    const btnPlus = this.container.querySelector('.btn_plus')
    const btnLeft= this.container.querySelector('.btn_arrLeft')
    btnPlus.onclick = () => {
        formCreateNote.classList.remove('off')
        main.removeChild(list)
        // main.append(formCreateNote)
        footer.removeChild(btnPlus)
    }

    btnLeft.onclick=()=>{
        // main.append(formCreateNote)
        main.append(btnPlus)
        formCreateNote.classList.add('off')
        footer.append(list)
    }

    // const temp2 = document.createElement('temp')
    // temp2.innerHTML = `<form class="formcreateNote">

    //     <button class="btn_arrLeft" type="submit">
    //         <i class="fa-solid fa-arrow-left"></i>
    //     </button>

    //     <li class="list__itemNew">
    //         <textarea class="list__item-textNew" id="newNote" name="newItemNote"
    //             placeholder="New Note!!"></textarea>
    //     </li>

    // </form>`
    // const createNote =temp2.firstChild
    // const formCreateNote = createNote.querySelector('.formcreateNote')
    // // const btnLeft= formCreateNote.querySelector('.btn_arrLeft')
    // btnLeft.onclick=()=>{
    //     main.removeChild(createNote)
    // }

    

    this.container.querySelector('.btn_logout').onclick = () => {
        this.onLogout()
    }

    const btnMenu = this.container.querySelector('.btn-menu')
    const temp3 = document.createComment('temp')
    temp3.innerHTML = `<div class="btn-close">
    <span class="material-symbols-outlined"  id="btn-close">close</span>
    </div>`
    const btnClose = temp3.firstChild
    
    btnMenu.onclick = () => {
        home.removeChild(btnMenu)
        home.append(btnClose)
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

    onFormCreateNote = (callback) => {
        const formCreateNote = this.container.querySelector('.formcreateNote')

        formCreateNote.onsubmit = event => {
            event.preventDefault()
            const textarea = this.container.querySelector('.list__item-textNew')
    
            if (textarea.value === "") alert('nothing')
            
            else {
                callback(textarea.value)
            
                textarea.value = ""
    
                // this.reset()
            }
        }
    }
}

