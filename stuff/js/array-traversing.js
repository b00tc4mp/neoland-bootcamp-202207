const peter = ['Peter', 15]

//

const keys = Object.keys(peter)

for (let i = 0; i < keys.length; i++) {
    const key = keys[i]

    const value = peter[key]

    console.log(key, value)
}

//

for (const key in peter) {
    const value = peter[key]

    console.log(key, value)
}

//

for (const value of peter)
    console.log(value)

// VM2355:12 0 Peter
// VM2355:12 1 15
// VM2355:20 0 Peter
// VM2355:20 1 15
// VM2355:26 Peter
// VM2355:26 15