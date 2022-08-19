function includes(array, searchElement) {
    for (let i = 0; i < array.length; i++) {

        let element = array[i];

        if (element === searchElement) {
            return true
        }
    }
    return false
}

const array1 = [1, 2, 3];

console.log(includes(array1, 2));
// expected output: true

const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
// expected output: true

console.log(pets.includes('at'));
// expected output: false
