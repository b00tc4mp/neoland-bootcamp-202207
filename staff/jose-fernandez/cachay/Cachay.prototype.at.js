Cachay.prototype.at=function(pos){
    let result= new Cachay
    if(pos<0)
    pos=this.length+pos
    
    result=this[pos]
    return result
}
