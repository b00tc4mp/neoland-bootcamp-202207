function renderList() {
    try {
        retrieveNotes(sessionStorage.token, function (error, notes) {
            if (error) {
                alert(error.message)

                return
            }

            const list = homePage.querySelector('.list')
            list.innerHTML = ''

            notes.forEach(note => {
                const item = document.createElement('li')
                item.classList.add('list__item')

                const deleteButton = document.createElement('button')
                deleteButton.classList.add('delete')
                deleteButton.innerHTML = '✖️'

                deleteButton.onclick = function () {
                    try {
                        deleteNote(sessionStorage.token, note.id, error => {
                            if (error) {
                                alert(error.message)

                                return
                            }

                            renderList()
                        })
                    } catch (error) {
                        alert(error.message)
                    }
                }

                const text = document.createElement('p')
                text.contentEditable = true
                text.classList.add('list__item-text')

                text.onkeyup = function () {
                    if (window.updateTimeout)
                        clearTimeout(window.updateTimeout)

                    window.updateTimeout = setTimeout(() => {
                        try {
                            updateNote(sessionStorage.token, note.id, text.textContent, error => {
                                if (error) {
                                    alert(error.message)

                                    return
                                }
                            }
                            )

                        } catch (error) {
                            alert(error.message)
                        }
                    }, 500)

                }
                text.innerHTML = note.text

                item.append(deleteButton, text)

                list.append(item)

            })

        })
    } catch (error) {
        alert(error.message)
    }
}