const express = require('express')
const { readFile } = require('fs')
const server = express()

server.get('/hello', (req,res) => {
    res.status(500).send('Hola Mundo')
})

server.get('/moto-brands', (req, res) =>{
    //const q = req.query.q
    // const {q} = req.query
    const { query:{ q } } = req

    readFile('./moto-brands.json', (error, json) => {
        if(error){
            res.status(500).send("Can't read file moto-brands.json")

            return
        }

        const brands = JSON.parse(json)

        const filtered = brands.filter(brand => brand.name.startsWith(q))

        res.status(200).json(filtered)
    })
})

server.listen(8080, () => console.log('server started'))