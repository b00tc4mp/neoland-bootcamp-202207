const express = require('express')
const jsonBodyParser = express.json

const api = express

api.post('/api/users',jsonBodyParser,(req,res)=>{
    // const body = req.body
    // const {name, email,password}= body
    const {body:{name,email,password}}= req

    res.json({name,email,password})
})

api.listen(8080,()=>console.log('api Started'))