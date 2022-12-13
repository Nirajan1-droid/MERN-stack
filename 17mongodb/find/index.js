const {MongoClient} = require('mongodb');
// const MongoClient = require('mongodb').MongoClient //both are same 
//module bata specified sub module import garirako xau

const url = 'mongodb://127.0.0.1:27017/'
const database = 'e-comm'
const client = new MongoClient(url);
//nodejs is our client and the server is the database
//so inorder to fetch the data into the client we are using the mongoclient
// which will fetch the data into the client const from the url given 


async function getData()
{
    let result = await client.connect();
    //we need to connect 
    let db = result.db(database);
    //if you use this     let db = result.db(database);
//then the data won't be shown [] is the result
    //used the result which contains the connect an dhere contains the name 
    //of the collection which we need to connect into
    let collection = db.collection('products');
    //as the database has many collection/table 
    //we are specifying the name of the collection  which will be connecting to
    let response = await collection.find({}).toArray();
    console.log(response);
    //find({}) which find all the data or we can say all the data will be commited 
    // and into which format are we going to fetch the data into from the collection
    //Remember that the collection is the name of the variable which we created in third line of the funciton
    //now the in the console , all the data will be converted into the array 

}

getData();
