const {MongoClient} = require('mongodb');
// const MongoClient = require('mongodb').MongoClient //both are same 
//module bata specified sub module import garirako xau

const url = 'mongodb://127.0.0.1:27017/'
const database = 'e-comm'
const client = new MongoClient(url);

module.exports = async function dbconnection()
{
    let result = await client.connect();
    let dt = result.db(database);
    return dt.collection('products');//this is the resolve thing
    //async fucntion bata return hune kura resolve

    // let response = await collection.find({}).toArray();//for all 
    //find, insert, delete 
    // let response = await collection.find({name:'m 40'}).toArray();

    // console.log(response);
    
}//this is reusabl
