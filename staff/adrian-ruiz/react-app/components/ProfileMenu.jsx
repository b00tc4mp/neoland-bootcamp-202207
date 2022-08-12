function ProfileMenu (props){
    return (
        <section className="homeMainContainer home__profileContainer">
        <div className="profileMenuContainer">
            <form id="updatePasswordForm" action="#">
                <label htmlFor="oldPassword" className="labelForm">Old Password</label>
                <input type="password" name="oldPassword" className="profileInput" />
                <label htmlFor="newPassword" className="labelForm">New Password</label>
                <input type="password" name="newPassword" className="profileInput" />
                <label htmlFor="confirmNewPassword" className="labelForm">Confirm New Password</label>
                <input type="password" name="confirmNewPassword" className="profileInput" />
                <button type="submit" className="profileFormButton" id="updatePasswordSubmit">Confirm</button>
            </form>
            <form id="updateEmailForm" action="#">
                <label htmlFor="newEmail" className="labelForm">New Email</label>
                <input type="email" name="newEmail" className="profileInput" />
                <button type="submit" className="profileFormButton" id="updateEmailSubmit">Confirm</button>
            </form>
        </div>
        </section>
    )
}