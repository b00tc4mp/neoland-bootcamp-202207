function indexOf(array, value, fromIndex) {
    const result = []
    let start = 0

    if (fromIndex)
        start = fromIndex


    for (let i = start; i < array.length; i++) {
        if (array[i] == value) {
            return i
        }
    }
    return -1
}

// const array = ['ant', 'bison', 'camel', 'bison', 'camel', 'duck', 'bison'];
// console.log(indexOf(array, 'bison'));
// // expected output: 1

// // start from index 2
// console.log(indexOf(array, 'bison', 2));
// // expected output: 3

// // // start from index 4
// console.log(indexOf(array, 'bison', 4));
// // // expected output: 6

// // // start from index no exist
// console.log(indexOf(array, 'giraffe'));
// // // expected output: -1
