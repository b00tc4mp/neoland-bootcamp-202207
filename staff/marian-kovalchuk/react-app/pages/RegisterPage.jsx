function RegisterPage({ onLinkClick, onFeedback }) {
    const logger = new Loggito(RegisterPage.name)

    logger.info('constructor')

    const handleLinkClick = event => {
        event.preventDefault()

        onLinkClick()
    }


    const handleFormSubmit = (event) => {     
        event.preventDefault();
        
        const form = event.target;      
        
        const nameInput = form.name; 
        const nicknameInput = form.nickname;    
        const emailInput = form.email;    
        const passwordInput = form.password; 
            
        
        const name = nameInput.value;   
        const nickname = nicknameInput.value; 
        const email = emailInput.value;     
        const password = passwordInput.value; 
         

        try {       
            
            registerUser(name, nickname, email, password, function (error) {         
                
                if (error) {           
                    onFeedback({             
                        message: error.message,             
                        level: "warn",          
                     });            
                        logger.warn(error.message);            
                        
                        return;         }  

                        form.reset();   
                        
                        onLinkClick()

                        onFeedback({           
                        message: "User registered successfully",           
                        level: "success",         });       });     } 
                        catch (error) {       
                            // onFeedback({         
                            // message: error.message,         
                            // level: "warn",       });        
                            logger.warn(error.message);     }     
                            // props.onRegister();   
                        };

    logger.info('render')

    return <main className="register-page container container--full container--spaced">
        <form className="form" onSubmit={handleFormSubmit}>
            <div className="form__field">
                <label htmlFor="name">Name</label>
                <input className="input" type="text" name="name" placeholder="name" id="name" />
            </div>
         


            <div className="form__field">
                <label htmlFor="name">Nickname</label>
                <input className="input" type="text" name="nickname" placeholder="nickname" id="nickname" />
            </div>

            <div className="form__field">
                <label htmlFor="email">E-mail</label>
                <input className="input" type="email" name="email" placeholder="email" id="email" />
            </div>

            <div className="form__field">
                <label htmlFor="password">Password</label>
                <input className="input" type="password" name="password" placeholder="password" id="password" />
            </div>

            <button className="button" type="submit">Register</button>
        </form>

        <a className="anchor" href="login.html" onClick={handleLinkClick}>Login</a>
    </main>
}