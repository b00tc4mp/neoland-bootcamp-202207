function renderHome() {
    try {
        retrieveUser(sessionStorage.token, function (error, user) {
            if (error) {
                alert(error.message)
                return
            }

            loginPage.classList.add('off')

            const title = homePage.querySelector('.greeting')

            title.innerText = 'Hey, ' + user.name + '!'
            const list = homePage.querySelector('.list')
            list.innerHTML = ''

            renderList()

            homePage.classList.remove('off')
        })
    } catch (error) {
        alert(error.message)
    }
}