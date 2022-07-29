function renderHome() {
    try {
        retrieveUser(sessionStorage.token, function (error, user) {
            if (error) {
                alert(error.message)

                return
            }

            loginPage.classList.add('off')

            const title = homePage.querySelector('.title')

            title.innerText = 'Hello, ' + user.name + '!'

            renderList()

            homePage.classList.remove('off')
        })
    } catch (error) {
        alert(error.message)
    }
}