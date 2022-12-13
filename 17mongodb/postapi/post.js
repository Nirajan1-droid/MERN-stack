const dbconnection = require('./mongodb')
const express = require('express');
const app = express()

app.use(express.json())//to get the data from the postman 
//to convert the json into the dataformat


app.get('/',async (req,res)=>{
    let data = await dbconnection();
    data = await data.find().toArray();
    res.send(data)

});

app.post('/',async (req,res)=>{
    let data  = await dbconnection()

    // console.log(req.body)//body is the property
    let result = await data.insert(req.body)//to insert the data which comes from the body of the url/req

    res.send(result)
    console.log(result)
    
    if(result.insertedCount > 0){
        console.log("sucessfully inserted in the database sir")
    }
    else{
    console.log('unsucessfull')
    }
})

app.listen(5400)