module.exports=(req,res, next)=>{
    res.setHeader('Access-Control-Allow-Origin','*')
    res.setHeader('Access-Control-Allow-Header','*')
    res.setHeader('Access-Control-Allow-Methods','*')
    

    next()
}