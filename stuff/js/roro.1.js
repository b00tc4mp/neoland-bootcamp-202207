function salute(from, to) {
    return `${from}: Hello, ${to}!`
}

salute('Felix', 'Mafalda')
// 'Felix: Hello, Mafalda!'

// roro version:

function salute(params) {
    return `${params.from}: Hello, ${params.to}!`
}

salute({ from: 'Felix', to: 'Mafalda'})
// 'Felix: Hello, Mafalda!'

salute({ to: 'Mafalda', from: 'Felix' })
// 'Felix: Hello, Mafalda!'