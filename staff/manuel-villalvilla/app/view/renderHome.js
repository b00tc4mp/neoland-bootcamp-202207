function renderHome () {
    try {
        retrieveUser(sessionStorage.token, function(error, user) {
            if (error) {
                alert(error.message)
                return;
            } 

            loginPage.classList.add('off');
            const saludo = homePage.querySelector('.saludo');
            saludo.innerText = 'Hello, ' + user.name + '!';
            refreshList();
            homePage.classList.remove('off');

        })
    } catch(error) { 
        alert(error.message);
    }
}