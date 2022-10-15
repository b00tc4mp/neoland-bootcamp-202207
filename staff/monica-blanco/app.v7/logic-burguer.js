const oppenWindow = homePage.querySelector('.profile-button')
oppenWindow.onclick = function (){
    try{
        oppenWindow(sessionStorage.token,error =>{
            if (error){
                alert(error.message)

                return
            }
            list.classList.add('off')
            oppenWindow.classList.remove('off')

        })
    }catch (error){
        alert (error.message)
    }
}