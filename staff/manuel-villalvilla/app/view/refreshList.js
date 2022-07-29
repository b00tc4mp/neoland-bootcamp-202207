function refreshList() {
    try {
        retrieveNotes(sessionStorage.token, function(error, notes) {
            if (error) {
                alert(error.message)

                return
            }

            const list = homePage.querySelector('.list')
            list.innerText = '';

            notes.forEach(note => {
                const item = document.createElement('li')
                item.classList.add('list__item')

                const deleteButton = document.createElement('button')
                deleteButton.classList.add('list__item-delete-button')
                deleteButton.innerText = 'x'
                deleteButton.onclick = function () {
                    try {
                        deleteNote(sessionStorage.token, note.id, error => {
                            if (error) {
                                alert(error.message)

                                return
                            }

                            refreshList()
                        })
                    } catch (error) {
                        alert(error.message)
                    }
                }

                const text = document.createElement('div')
                text.contentEditable = true
                text.classList.add('list__item-text')
                text.onkeyup = function () {
                    if (window.timeoutID) // con el objeto window puedo añadir variables globales
                        clearTimeout(window.timeoutID)
                    window.timeoutID = setTimeout(() => {
                        try {
                            updateNote(sessionStorage.token, note.id, text.innerText, error => {
                                if (error) {
                                    alert(error.message)
    
                                    return
                                }
                            })
                        } catch (error) {
                            alert(error.message)
                        }
                    }, 1000)
                }
                text.innerText = note.text

                item.append(deleteButton, text)

                list.append(item)
                
            })
        })
    } catch(error) {
        alert(error.message)
    }
}