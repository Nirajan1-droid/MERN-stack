const express = require('express')
const reqFilter = require('./middleware.js')
const route = express.Router()
const app = express()


//less than 50 ko lagi 1 thick hunxa 

//but more than 50 ko lagi 

route.use(reqFilter)

app.get('/', (req, res) => {
    res.send('welcme to home page')
})
route.get('/users', (req, res) => {
    res.send('welcme to home page')
})
route.get('/home', (req, res) => {
    res.send('welcme to home page')
})
route.get('/contact', (req, res) => {
    res.send('welcme to home page')
})
route.get('/about', (req, res) => {
    res.send('welcme to home page')
})
app.get('/help', (req, res) => {
    res.send('welcme to home page')
})
app.get('/service', (req, res) => {
    res.send('welcme to home page')
})

route.get('/faq', (req, res) => {
    res.send('welcme to home page')
})

app.use('/', route) //yo sab vanda tala vayena vane app.get pani route.get jasari kaam garxa , but this is for the large scale website 


app.listen(5000);