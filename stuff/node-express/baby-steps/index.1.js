const express = require('express')

const server = express()

server.get('/hello', (req, res) => {
    res.status(500).send('hola mundo')
})

server.get('/moto-brands', (req, res) => {
    //const q = req.query.q
    //const { q } = req.query
    const { query: { q } } = req

    res.send(q)
})

server.listen(8080, () => console.log('server started'))