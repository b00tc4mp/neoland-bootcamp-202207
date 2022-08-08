function salute(params) {
    return `${params.from? `${params.from}: ` : '' }Hello, ${params.to}!`
}

salute({ to: 'Mafalda', from: 'Felix' })
// 'Felix: Hello, Mafalda!'
salute({ to: 'Mafalda' })
// 'Hello, Mafalda!'