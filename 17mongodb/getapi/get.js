const dbconnection = require('./mongodb')
const express = require('express')
const app = express()

app.get('/',async (req,res)=>{
    let data = await dbconnection();
    data = await data.find({name:'nirajan'}).toArray();
    ress.send(data)

});
app.listen(5400)