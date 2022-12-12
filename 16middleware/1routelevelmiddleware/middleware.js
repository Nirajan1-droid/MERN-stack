
module.exports= reqFilter = (req, res,next)=>{
    //if next function is not executed here then it will not go forward
    //req and resp is same but requires next function to move futher into another function
    if(!req.query.age)
    {
        res.send('Please provide age')
    }
    else if(req.query.age <18){
        res.send('you cannot access this page')
    }
    else{

        next();
    }
}
