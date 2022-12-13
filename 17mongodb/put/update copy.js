const dbconnection = require('./mongodb')

async function  updateData(){
    let data = await dbconnection();
    let result = await data.updateOne(
        {name:'m 40'},{
            $set:{name:'max 4'}
        }
    );
    //incase of the updateone the one which is first in the list 
    //that will only be update for that
    //and for another time , second one will be updated
    

    

    if(result.acknowledged){
        console.warn('updated sucessfully')
    }
    console.warn(result)
}
updateData();