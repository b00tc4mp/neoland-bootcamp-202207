function setTimeoutPromise(millis) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, millis)
    })
}

// running globally, it works
/*
await setTimeoutPromise(1000)
console.log('hola mundo')
*/

function helloworldDelayed() {
    await setTimeoutPromise(1000)
    console.log('hola mundo')
}

helloworldDelayed()
// VM1654:14 Uncaught SyntaxError: await is only valid in async functions and the top level bodies of modules

async function helloworldDelayed() {
    await setTimeoutPromise(1000)
    console.log('hola mundo')
}

helloworldDelayed()
// Promise {<pending>}
{/* VM1676:3 hola mundo */}