const express = require('express');
const router = express.Router();
const Model = require('../models/user');

router.post('/add',(req,res)=>{
    console.log(req.body)
     res.send('user is here');
     
})

module.exports = router;