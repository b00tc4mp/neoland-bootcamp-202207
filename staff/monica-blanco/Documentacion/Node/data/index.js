const express = require('express')
const { readFile, writeFile } = require('fs')

const server = express()

// http://localhost:8080/hello
server.get('/hello', (req, res) => {
    res.status(500).send('hola mundo')
})

// http://localhost:8080/moto-brands?q=H
server.get('/moto-brands', (req, res) => {
    //const q = req.query.q
    //const { q } = req.query
    const { query: { q } } = req

    readFile('./data/moto-brands.json', (error, json) => {
        if (error) {
            res.status(500).send('cannot read file moto-brands.json')

            return
        }

        const brands = JSON.parse(json)

        const filtered = brands.filter(brand => brand.name.startsWith(q))

        res.status(200).json(filtered)
    })
})

// http://localhost:8080/salutations/ciaomondo
server.get('/salutations/:file', (req, res) => {
    // const file = req.params.file
    const { params: { file } } = req

    readFile(`./data/salutations/${file}.txt`, (error, salutation) => {
        if (error) {
            res.status(500).send(`cannot read file ${file}.txt`)

            return
        }

        //res.setHeader('Content-Type', 'text/html')

        res.status(200).send(salutation)
    })
})

server.post('/salutations/:file/:salutation', (req, res) => {
    const { params: { file, salutation } } = req

    writeFile(`./data/salutations/${file}.txt`, salutation, 'utf8', error => {
        if (error) {
            res.status(500).send(`cannot write file ${file}.txt`)

            return
        }

        res.status(201).send()
    })
})

server.listen(8080, () => console.log('server started'))