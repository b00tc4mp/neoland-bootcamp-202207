/*
function setTimeoutPromise(millis) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, millis)
    })
}
*/

// now, a bit "silly", but explanatory code:

/*
async function setTimeoutPromise(millis) {
    await new Promise((resolve, reject) => {
        setTimeout(resolve, millis)
    })
}
*/

// equals to

function setTimeoutPromise(millis) {
    return new Promise((resolve, reject) => {

        new Promise((resolve, reject) => {
            setTimeout(resolve, millis)
        })
            .then(resolve)

    })
}

setTimeoutPromise(1000)
    .then(() => console.log('hola mundo'))

// Promise {<pending>}
// VM64:17 hola mundo