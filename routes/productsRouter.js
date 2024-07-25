const express = require('express');
const router= express.Router();

router.get('/product',(req,res)=>{
    res.send("Kya bhai kaise ho")
})

module.exports = router;
