function renderNotes() {
    try {
        retrieveNotes(sessionStorage.token, function (error, notes) {
            if (error) {
                alert(error.message)
                return
            }
            createNoteForm.classList.add('off')
            list__Notes.classList.remove('off')

            // headmainhome.classList.add('off')
            btn__pluss.classList.remove('off')

            const list = homePage.querySelector('.list')
            list.innerHTML = ""

            notes.forEach(note => {
                const item = document.createElement('li')
                item.classList.add('list__item')

                const deleteButton = document.createElement('button')
                deleteButton.classList.add('btn__delete')
                deleteButton.innerText = 'x'
                deleteButton.onclick = function () {
                    try {
                        deleteNote(sessionStorage.token, note.id, error => {
                            if (error) {
                                alert(error.message)
                                return
                            }
                            renderNotes()
                        })
                    } catch (error) {
                        alert(error.message)
                    }
                }

                const text = document.createElement('textarea')

                text.classList.add('list__item-text')

                text.onkeyup = function () {
                    if (window.updateNoteTimeoutId)
                        clearTimeout(window.updateNoteTimeoutId)

                    window.updateNoteTimeoutId = setTimeout(() => {
                        try {
                            updateNote(sessionStorage.token, note.id, text.value, error => {
                                if (error) {
                                    alert(error.message)
                                    return
                                }
                            })
                        } catch (error) {
                            alert(error.message)
                        }
                    }, 500)
                }
                text.innerText = note.text
                item.append(deleteButton, text)
                list.append(item)

            })
        })
    } catch (error) {
        alert(error.message)
    }
}
