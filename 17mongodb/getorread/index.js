let dbconnection = require('./mongodb')
// const {MongoClient} = require('mongodb');
// // const MongoClient = require('mongodb').MongoClient //both are same 
// //module bata specified sub module import garirako xau

// const url = 'mongodb://127.0.0.1:27017/'
// const database = 'e-comm'
// const client = new MongoClient(url);

// async function dbconnection()
// {
//     let result = await client.connect();
//     let db = result.db(database);
//     return db.collection('products');//this is the resolve thing
//     //async fucntion bata return hune kura resolve

//     // let response = await collection.find({}).toArray();//for all 
//     //find, insert, delete 
//     // let response = await collection.find({name:'m 40'}).toArray();

//     // console.log(response);
    
// }//this is reusable code as we need to connect the database for more times if we 
//do the operation in the database for many types
//so, making the common for all to connect to the database is the efficient way
//i/e the smart way of handeling the connection / request to the database
dbconnection().then((resp)=>{
    resp.find({name:'m 40'}).toArray().then((data)=>{
        console.warn(data)
    })
})
// console.warn(dbconnection());
const main= async ()=>{
    let data = await dbconnection();
    data = data.find().toArray();
    console.warn(data);

}
main();
