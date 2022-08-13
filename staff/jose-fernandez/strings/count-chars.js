function countChars(text) {
    let espac = 0
    for (let i = 0; i < text.length; i++) {
        if (text[i] === " " || text[i] == ' ') {
            espac++
        }
    }


    return text.length - espac

}

