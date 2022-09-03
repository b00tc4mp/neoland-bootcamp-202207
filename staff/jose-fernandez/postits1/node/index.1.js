const express = require('express') //requiero express de node

const server = express() //coloco el valor de express en una variable nueva para hacer modificaciones

server.get('/hello', (req,res)=>{
    //const q = req.query.q
    //const {q} = req.query
    const {query : {q}} = req

    res.send(q)
})

server.listen(8080,()=>console.log('server started'))