const mongoose = require('mongoose')

const main =async()=>{
    await mongoose.connect("mongodb://127.0.0.1:27017/e-comm")
    const ProductSchema = new mongoose.Schema({
        name:String
    });
    //collection name or table name
    //second parameter
    //model uses the scemas and collection to connect each other
    //basically, it models the way the data should be operated inside the database

    //insummary: schema specify the type and name and create the boudary
    // model connect the rule to the specified collection


    const ProductsModel = mongoose.model('products',ProductSchema)
    let data = new ProductsModel({name:"m8"});
    let result = await data.save();
    console.log(result)
}
