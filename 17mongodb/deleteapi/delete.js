const dbconnection = require('./mongodb')
const express = require('express');
const mongodb =require('mongodb')
const app = express()

app.use(express.json())

app.get('/',async (req,res)=>{
    let data = await dbconnection();
    let result  = await data.find().toArray();
    res.send(result)

});

app.put('/', async (req,res)=>{
    let data = await dbconnection()
    // console.log(req.body)
    // res.send({result:"update"})
    let result = await data.updateOne
    (
        {name:req.body.name},//for condition as this is the reference which we will be updating the data into the collection
        {$set:req.body}
    )
    res.send(result);
    console.log(result)
    
})
//the refernece we are taking into account is the id value of the database


app.delete('/:id', async (req,res)=>{
    let data = await dbconnection()
  
//as the id has _id objectid in database so we need mongodb package
    let result = await data.deleteOne
    (
        {_id:new mongodb.ObjectId(req.params.id)}
    )
    res.send(result);
    console.log(result)
    
})

app.listen(5400)