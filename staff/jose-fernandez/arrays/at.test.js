describe('at',()=>{
    test('using an index normal',()=>{
        const array1 = [5, 12, 8, 130, 44];
        
        result = at(array1,2)


        check(result, 8)

    })

    test('using an index negative',()=>{
        const array1 = [5, 12, 8, 130, 44];

        result = at(array1,-2)

       
        check(result, 130)

    })

    test('using an index undefined',()=>{
        const array1 = [5, 12, 8, 130, 44];

        result = at(array1,5)

        check(result, undefined)
    })

    test('using an index negative undefined(2)',()=>{
        const array1 = [5, 12, 8, 130, 44];

        result = at(array1,-6)

        check(result, undefined)
    })
})


// const array1 = [5, 12, 8, 130, 44];


// let index = 2;

// console.log(`Using an index of ${index} the item returned is ${array1.at(index)}`);
// // expected output: "Using an index of 2 the item returned is 8"

// index = -2;

// console.log(`Using an index of ${index} item returned is ${array1.at(index)}`);
// // expected output: "Using an index of -2 item returned is 130"