const dbconnection = require('./mongodb')

const deleteData = async ()=>{
    let  data =  await dbconnection();
    let result  = await  data.deleteOne(
        {name :"c 40 node"})

    console.warn(result)
    
    if(result.deletedCount == 0){
        console.log('deleted not  found in the database')
    }
    else
    {
        console.log('sucessfully deleted')

    }
}
deleteData(); 