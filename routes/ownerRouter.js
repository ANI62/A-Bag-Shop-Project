const express = require('express');
const router= express.Router();

router.get('/owner',(req,res)=>{
    res.send("Kya bhai kaise ho")
})

module.exports = router;
