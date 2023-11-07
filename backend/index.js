//initialize express
const express = require('express');
const app = express();
const port = 5000;

const userRouter = require('./Router/userRouter');

//middleware
app.use(express.json());
app.use('/user', userRouter);


//creating route in node.js
//app.get('/',(req,res)=>{
//    res.send('server is running ok')
//})
//
//app.get('/about',(req,res)=>{
//    res.send('this is about page')
//})
//
//app.get('/connect',(req,res)=>{
//    res.send('this is connect page')
//})
//************** */
//const mongoose = require('./connection')
//listing to port 
app.listen(port,()=>{
    console.log("server is running at port 5000");
})
