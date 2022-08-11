console.log( '%cTESTY✌%cv0.0', 'color: white; font-size: 18px; font-weight: cursive; background: linear-gradient(90deg, rgba(0,0,0,1) 35%, rgba(193,0,0,1) 100%);','color: red;')

function describe(description, suite) {
    console.log('%c' + description, 'font-size: 12px; font-weigth: normal; color: red;')

     suite()
}

function test(description, test) {
    console.log('%c' + description, 'font-size: 14px; font-weigth: normal; color: blue;')

     test()
}

function check(result, expected) {
    // const description = 'check ' + result  + 'expected ' + expected + ''
    if(result === expected)
       console.log('result %c' + result + '%c expected %c' + expected + '%c ok', 'font-weigth: normal;', '', 'font-weigh: normal;', 'background-color: black; color: red;')
    else
       console.log('result %c' + result + '%c expected %c' + expected + '%c ko', 'font-weigth: normal;','', 'font-weigh: normal;', 'background-color: red; color: black;')
}