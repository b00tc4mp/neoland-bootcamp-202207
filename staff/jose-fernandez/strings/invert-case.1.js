function invertCase(text) {
    // for (let i = 0;i<text.length; i++) {
    //     if (text[i] >= 'a' && text[i] <= 'z') {
    //         text[i] = 'a' - 'A';
    //     } else if (text[i] >= 'A' && text[i] <= 'Z') {
    //         text[i] = 'A' - 'a';

    //     }
    // }
    // return text;
    debugger;
    let result = ''
    let alphabetLowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let alphabetUpperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    for (let i = 0; i < text.length; i++) {
        for (let j = 0; j < alphabetLowerCase.length; j++) {
            if (text[i] === alphabetLowerCase[j]) {
                result += alphabetUpperCase[j]
                break;
            } else if (text[i] === alphabetUpperCase[j]) {
                result += alphabetLowerCase[j]
                break;

            } else if (j === alphabetLowerCase.length - 1) {
                result += text[i]
            }
        }
    }
    return result
}

// tests

console.log(invertCase('Hello World'))
// hELLO wORLD

console.log(invertCase('a B c D e F'))
// A b C d E f

console.log(invertCase('i lOVe COdInG'))
    // I LovE coDiNg