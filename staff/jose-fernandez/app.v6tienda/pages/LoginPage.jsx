function LoginPage(){
    
    
   return <main className="login_page container">
        <div className="header_only">
            <div className="cont__header">
                {/* <!-- <h1 className="messageTitle"> TIENDA ·$·$·$!!</h1> -->
                <!-- img Luanna recortada --> */}
                <div className="linkhomeLogin">
                    <img className="img img-home " src="https://i.postimg.cc/ZY1nHGSz/logo-Luanna.png" alt=""/>
                </div>
            </div>
        </div>
        <form className="form form-login">

            <img className="img img-login" src="https://i.postimg.cc/XJt6N71Q/169506285-136925785104495-7194486606775599435-n.jpg" alt=""/>

            <div className="form__field">
                <label className="label__movil">EMAIL</label>
                <input className="input input-email" type="email" name="email" placeholder="Email" id="login-email"/>
            </div>
            <div className="form__field">
                <label className="label__movil">PASSWORD</label>
                <input className="input input-pass" type="password" name="password" placeholder="Password" id="login-pass"/>
            </div>

            <button className="button-login" type="submit">LOGIN</button>

        </form>

        <p className="nolink-register"> Not a member <a className="link link-register" href="#"> ! SINGUP NOW ¡</a></p>
    </main>

}