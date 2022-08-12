function Settings(props) {
    const logger = new Loggito('Settings')

    logger.info('constructor')

    const handleClick = event => {
        event.preventDefault()

        props.onLinkClick()
    }
    
    logger.info('render')

    const handleFormSubmit = (event) => {
        event.preventDefault()
    
        const form = event.target
        
        const oldPasswordInput = form.oldPassword
        const newPasswordInput = form.newPassword
        const retypePasswordInput= form.retypePassword
    
        const oldPassword = oldPasswordInput.value
        const newPassword = newPasswordInput.value
        const retypePassword = retypePasswordInput.value

        try {
            resetPassword(sessionStorage.token, oldPassword, newPassword, retypePassword, function (error) {
              if (error) {
                alert(error.message);

                logger.warn(error.message)
        
                return;
              }
              debugger;
              
              form.reset();
        
            });
          } catch (error) {
            alert(error.message);

            logger.warn(error.message)
          }
        //   props.onResetPassword()
        };
 

    return <main className="register-page page background flex-container">
    <div className="login-elements flex-container">
      <form action="" className="form flex-container login-form" onSubmit={handleFormSubmit}>
        <div className="input-fields">

          <div className="form__field">
            <label htmlFor="name">old password</label>
            <input type="password" placeholder="old password" name="oldPassword" id="oldPassword" className="input-item" />
          </div>

          <div className="form__field">
            <label htmlFor="email">new password</label>
            <input type="password" placeholder="new password" name="newPassword" id="newPassword" className="input-item" />
          </div>

          <div className="form__field">
            <label htmlFor="password">retype password</label>
            <input type="password" placeholder="retype password" name="retypePassword" id="retypePassword" className="input-item" />
          </div>
  

        </div>
        <button type="submit" className="button--primary">Register</button>
      </form></div>
      
    
</main>

}

{/* <a className="anchor" onClick={handleClick}>Already have an account?</a> */}