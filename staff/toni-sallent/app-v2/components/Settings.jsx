

function Settings({ onCloseClick }){
   
   
    
    handleFormSubmit = event => {
        event.preventDefault()
        const oldPassword = event.target.oldPassword.value
        const newPassword = event.target.newPassword.value
        const newPasswordRepeat = event.target.newPasswordRepeat.value

        updateUserPassword(sessionStorage.token, oldPassword, newPassword, newPasswordRepeat, error =>{
            try{
                if(error){
                    alert(error.message)

                    return;
                }
                
            }catch(error){
                alert(error.message)
            }
        })
        
    }
    
    
    return <div className="settings-panel container">
        <IconButton text="close" onClick={onCloseClick} />
        
        <form className="update-password-form form" onSubmit={handleFormSubmit}>
            <div className="form__field">
                <label htmlFor="oldPassword">Current password</label>
                <input className="input" type="password" name="oldPassword" placeholder="old password" id="oldPassword" />
            </div>

            <div className="form__field">
                <label htmlFor="newPassword">New password</label>
                <input className="input" type="password" name="newPassword" placeholder="new password" id="newPassword" />
            </div>

            <div className="form__field">
                <label htmlFor="newPasswordRepeat">Repeat new password</label>
                <input className="input" type="password" name="newPasswordRepeat" placeholder="repeat new password" id="newPasswordRepeat" />
            </div>

            <button className="button" type="submit">Update</button>
        </form>
    </div>
}
