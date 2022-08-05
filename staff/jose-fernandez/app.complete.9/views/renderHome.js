function renderHome() {
    try {
        retrieveUser(sessionStorage.token, function (error, user) {
            if (error) {
                alert(error.message)
                return
            }

            loginPage.classList.add('off')

            const messageTitle = homePage.querySelector(".messageTitle")

            messageTitle.innerText = " Hello " + user.name + " !"
            renderNotes()
            homePage.classList.remove('off')
        })
    } catch (error) {
        alert(error.message)
    }
}