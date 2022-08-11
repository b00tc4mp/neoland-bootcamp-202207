console.log( '%cTESTY✌%cv0.0', 'color: black; font-size: 18px; font-weight: cursive; background:linear-gradient(90deg, rgba(203,166,0,1) 35%, rgba(0,120,8,1) 100%);', ' color: yellow;')

function describe(description, suite) {
    console.log('%c' + description, 'font-size: 14px; font-weigth: bold; color: yellow;')

     suite()
}

function test(description, test) {
    console.log('%c' + description, 'font-size: 14px; font-weigth: bold; color: green;')

     test()
}

function check(result, expected) {
    // const description = 'check ' + result  + 'expected ' + expected + ''
    if(result === expected)
       console.log('result %c' + result + '%c expected %c' + expected + '%c ok', 'font-weigth: bold;', '', 'font-weigh: bold;', 'background-color: greenyellow; color: black;')
    else
       console.log('result %c' + result + '%c expected %c' + expected + '%c ko', 'font-weigth: bold;','', 'font-weigh: bold;', 'background-color: red; color: black;')
}