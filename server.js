const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require("body-parser");
const path = require('path')
const servises=require('../crud_app/server/services/render')
const app = express();

dotenv.config({path: 'config.env'})
const PORT=process.env.PORT||8080

//log req
app.use(morgan('tiny'));
//pars req to body parser
app.use(bodyparser.urlencoded({extended: true}));
//view engine
app.set("view engine","ejs")
//app.set("viewa",path.resolve(__dirname,"")
// use accet
app.use('/css',express.static(path.relative(__dirname,"assets/css")))
app.use('/img',express.static(path.relative(__dirname,"assets/img")))
app.use('/js',express.static(path.relative(__dirname,"assets/js")))

app.use('/',require('./server/routes/router'))
    
app.listen(PORT,()=>console.log('server is running on http://localhost:','{',PORT,'}'));