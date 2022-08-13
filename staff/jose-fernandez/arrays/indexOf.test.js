describe('indexOf',()=>{
    test('test 1 within start from index',()=>{
        const beasts = ['ant', 'bison', 'camel', 'bison', 'camel','duck','bison'];


        const result = (indexOf(beasts,'bison'))
        // const result=beasts.indexOf('bison')
        check(result,1)
    })

    test('test 1 within start from index',()=>{
        const beasts = ['ant', 'bison', 'camel', 'bison', 'camel','duck','bison'];


        const result = (indexOf(beasts, 'bison', 2));
        check(result,3)
    })

    test('test 1 within start from index',()=>{
        const beasts = ['ant', 'bison', 'camel', 'bison', 'camel','duck','bison'];


        const result = (indexOf(beasts, 'bison', 4));
        check(result,6)
    })

    test('test 1 within start from index',()=>{
        const beasts = ['ant', 'bison', 'camel', 'bison', 'camel','duck','bison'];


        const result = (indexOf(beasts, 'giraffe'));
        check(result,-1)
    })

})




// const result = (beasts.indexOf('bison'));
// // expected output: 1

// // start from index 2
// const result = (beasts.indexOf('bison', 2));
// // expected output: 4

// // start from index 2
// const result = (beasts.indexOf('bison', 4));
// // expected output: 6

// const result = (beasts.indexOf('giraffe'));
// // expected output: -1
