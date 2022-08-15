function Settings(props) {
    const logger = new Loggito('Settings')

    logger.info('render')

    return <div className="settings-panel container">
    <IconButton text="close" onClick={props.onCloseClick} />
    
    <form className="update-password-form form">
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