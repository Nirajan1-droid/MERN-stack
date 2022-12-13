let dbconnection = require('./mongodb')

// dbconnection().then((resp)=>{
//     resp.find({name:'m 40'}).toArray().then((data)=>{
//         console.warn(data)
//     })
// })
// console.warn(dbconnection());
const insert = async ()=>{
    let data = await dbconnection();
    const result = await data.insert([
        {name:"oneplus",
        brand:"cs40",
        price:"32000",
        category:"mobile"}
         ,
         {name:"oneplus",
         brand:"cs40",
         price:"32000",
         category:"mobile"}
          , 
          {name:"oneplus",
          brand:"cs40",
          price:"32000",
          category:"mobile"},{name:"oneplus",
          brand:"cs40",
          price:"32000",
          category:"mobile"}
           ,
           {name:"oneplus",
           brand:"cs40",
           price:"32000",
           category:"mobile"}
            , 
            {name:"oneplus",
            brand:"cs40",
            price:"32000",
            category:"mobile"}
           
    ]);
    console.warn(result);

    if(result.acknowledged){
        console.log('data is inserted')
    }

}
insert();
