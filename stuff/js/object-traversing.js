const peter = { name: 'Peter', age: 15 }

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

// VM2411:10 name Peter
// VM2411:10 age 15
// VM2411:18 name Peter
// VM2411:18 age 15