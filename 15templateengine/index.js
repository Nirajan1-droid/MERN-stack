const express =require('express')
let app  = express()
 console.log(__dirname)
const path = require('path')
const publicPath = path.join(__dirname,"public")//path helps to get the path of the file inside or outside the folder

// we need to tell the nodejs that we are using the ejs 
app.set('view engine','ejs' );
//we need to create views folder that is the compulsory thing

app.get('',(_,resp)=>{
    resp.sendFile(`${publicPath}/index.html`)
})
app.get('/profile',(_,resp)=>{
    //as we are not connecting to the database right now so we will be going for the default data value
    const user ={
        name : 'nirajan',
        age : "20",
        skills :['js','api','html']
    }

    resp.render('profile',{user})
})

app.get('/login',(_,resp)=>{
    resp.render('login')
})
app.get('/about',(_,resp)=>{

    
    resp.sendFile(`${publicPath}/about.html`)
})
//nopage ko lagi we use *  and in the nopage.html we can show anything we like : 404 , oops page not found etc.
//that's how the page is secured in the nodejs 

app.get('*',(_,res)=>{
res.sendFile(`${publicPath}/nopage.html`)})


app.listen(5000);
