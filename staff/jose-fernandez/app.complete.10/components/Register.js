class Register{
    constructor(){
        const temp = document.createElement('temp')

        temp.innerHTML = `<main class="container register_page">
        <form class="form form-register">

            <img class="img img-register" src="https://th.bing.com/th/id/OIP.8oRhQutdRIwwPM6f-eTiwwAAAA?pid=ImgDet&rs=1"
                alt="">
            <div class="form__field">
                <label class="label__movil">USERNAME</label>
                <input class="input input-user" type="text" name="name" placeholder="Username">
            </div>
            <div class="form__field">
                <label class="label__movil">EMAIL</label>
                <input class="input input-email" type="email" name="email" placeholder="Email">
            </div>
            <div class="form__field">
                <label class="label__movil">PASSWORD</label>
                <input class="input input-pass" type="password" name="password" placeholder="Password">
            </div>

            <button class="button-login" type="submit">SIGNUP</button>

        </form>

        <a class="link link-login" href="#">LOGIN</a>
    </main>`

    this.container = temp.firstChild
    }

    onLinkClick(callback){
        this.container.querySelector('.link-login').onclick = event =>{
            event.preventDefault()
            callback()
        }
    }

    onFormSubmit(callback){
        const form = this.container.querySelector('form')

        form.onsubmit = function(event){
            event.preventDefault()

            const name = form.name.value
            const email=form.email.value
            const password=form.password.value

            callback(name, email,password)
        }
    }

    reset(){
        this.container.querySelector('form').reset()
    }
}