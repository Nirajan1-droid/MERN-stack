const express = require('express')
const reqFilter = require('./middleware.js')//1
const app =express()


//less than 50 ko lagi 1 thick hunxa 

//but more than 50 ko lagi 

// app.use(reqFilter)
app.get('/',(req,res)=>{
res.send('welcme to home page')
})
app.get('/users',reqFilter,(req,res)=>{
    res.send('welcme to home page')
    })
app.get('/home',reqFilter,(req,res)=>{
        res.send('welcme to home page')
})
app.get('/contact',reqFilter,(req,res)=>{
            res.send('welcme to home page')
})
            app.get('/about',(req,res)=>{
                res.send('welcme to home page')
                })
                app.get('/help',(req,res)=>{
                    res.send('welcme to home page')
                    })
                    app.get('/service',(req,res)=>{
                        res.send('welcme to home page')
                        })

                        app.get('/faq',(req,res)=>{
                            res.send('welcme to home page')
                            })
    
app.listen(5000);