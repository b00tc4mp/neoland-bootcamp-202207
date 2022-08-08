function salute(params) {
    const data = {}

    if (params.from)
        data.from = params.from

    data.to = params.to

    data.date = new Date

    data.salutation = `${params.from ? `${params.from}: ` : ''}Hello, ${params.to}!`

    return data
}

console.log(salute({ to: 'Mafalda', from: 'Felix' }))

console.log(salute({ to: 'Mafalda' }))

// VM2281:16 {from: 'Felix', to: 'Mafalda', date: Mon Aug 08 2022 12:08:24 GMT+0200 (Central European Summer Time), salutation: 'Felix: Hello, Mafalda!'}
// VM2281:18 {to: 'Mafalda', date: Mon Aug 08 2022 12:08:24 GMT+0200 (Central European Summer Time), salutation: 'Hello, Mafalda!'}
