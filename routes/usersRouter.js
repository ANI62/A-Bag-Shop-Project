const express = require('express');
const router= express.Router();

router.get('/user',(req,res)=>{
    res.send("Kya bhai kaise ho")
})

module.exports = router;
