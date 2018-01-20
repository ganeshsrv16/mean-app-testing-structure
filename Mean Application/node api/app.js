var express= require('express');
require('dotenv').config();
var mongoose=require('mongoose');
var config=require('./config/index');
var bodyparser=require('body-parser');

var cors=require('cors');
var path=require('path');
 var app = express();

const route=require('./routes/route');

mongoose.connect(config.db);
mongoose.connection.on('connected',()=>
{
  
    console.log("connected to mongodb");
})

mongoose.connection.on('error',(err)=>
{
    console.log("Not connected to mongodb");
})
 const port=process.env.port;
app.use(cors());
app.use(bodyparser.json())
 app.use('/mean',route);
 app.use(express.static(path.join(__dirname,'public')));

app.listen(port,()=>
{
    console.log("server started:"+process.env.port);
})

module.exports = app;
