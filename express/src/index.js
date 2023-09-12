const express = require("express"); 

const session = require('express-session')

const routerList = require('../routes/home') 

const aboutList = require('../routes/about')

const authList = require("../routes/auth") 


require('./database')

const app = express();

const PORT = 3002;

app.use(express.json());

app.use(express.urlencoded()); 

app.use(session({
    secret:'hskfakfjasdfthtkjthtkjkth',
    resave:false,
    saveUninitialized:false,
}))

app.use( (req,res,next )=>{
    console.log (`${req.method}:${req.url}`)
    next();
}) ;

app.use('/api/v1/home',routerList); 

app.use('/api/v1/about',aboutList)
app.use('/api/v1/auth',authList)


app.listen(PORT , ()=> {
    console.log(`The port is running sucessfully ${PORT} in listen `)
}); 




