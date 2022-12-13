const dbconnection = require('./mongodb')
const express = require('express');
const app = express()

app.use(express.json())//to get the data from the postman 
//to convert the json into the dataformat


app.get('/',async (req,res)=>{
    let data = await dbconnection();
    let result  = await data.find().toArray();
    res.send(result)

});
//to put the data through the code without using the data from client 
// app.put('/', async (req,res)=>{
//     let data = await dbconnection()
//     // console.log(req.body)
//     // res.send({result:"update"})
//     let result = await data.updateOne
//     (
//         {name:"iiii"},
//         {$set:{price:"$300"}}
//     )
//     res.send(result);
//     console.log(result)
    
// })
//with reference value the other object inthat collection can be changed with this code
//here the name is the reference taken by which other value are being modified
// app.put('/', async (req,res)=>{
//     let data = await dbconnection()
//     // console.log(req.body)
//     // res.send({result:"update"})
//     let result = await data.updateOne
//     (
//         {name:req.body.name},//for condition as this is the reference which we will be updating the data into the collection
//         {$set:req.body}
//     )
//     res.send(result);
//     console.log(result)
    
// })
//but here the name itself is changed with the link/name_of_the_reference 
//that link takes the parameter and name 

app.put('/:name', async (req,res)=>{
    let data = await dbconnection()
    // console.log(req.body)
    // res.send({result:"update"})
    let result = await data.updateOne
    (
        {name:req.params.name},//for condition as this is the reference which we will be updating the data into the collection
        {$set:req.body}
    )
    res.send(result);
    console.log(result)
    
})

app.listen(5400)