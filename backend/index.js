//initialize express
const express = require('express');
const app = express();
const port = 5000;

//creating route in node.js
app.get('/',(req,res)=>{
    res.send('server is running ok')
})


//listing to port 
app.listen(port,()=>{
    console.log("server is running at port 5000");
})
