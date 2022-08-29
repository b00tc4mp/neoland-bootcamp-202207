function RegisterPage(){
    return  <main className="register_page container">
    <div className="header_only">
        <div className="cont__header">
          <div className="linkhomeRegister">
            <img className="img img-home " src="https://i.postimg.cc/ZY1nHGSz/logo-Luanna.png" alt=""/>
        </div>
            
        </div>
    </div>
    <form className="form form-register">

        <img className="img img-register" src="https://th.bing.com/th/id/OIP.8oRhQutdRIwwPM6f-eTiwwAAAA?pid=ImgDet&rs=1"
            alt=""/>
        <div className="form__field">
            <label className="label__movil">USERNAME</label>
            <input className="input input-user" type="text" name="name" placeholder="Username"/>
        </div>
        <div className="form__field">
            <label className="label__movil">EMAIL</label>
            <input className="input input-email" type="email" name="email" placeholder="Email"/>
        </div>
        <div className="form__field">
            <label className="label__movil">PASSWORD</label>
            <input className="input input-pass" type="password" name="password" placeholder="Password"/>
        </div>

        <button className="button-login" type="submit">SIGNUP</button>

    </form>

    <a className="link link-login" href="#">LOGIN</a>
</main>
}