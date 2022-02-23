const express = require('express');
// const path = require('path')
const router = express.Router();

const todo = require('../models/twentydays');




// serve main page using this url endpoint
router.get("/", (req, res)=>
{
//    res.sendFile(path.join(__dirname, "index.html"));
   res.render("index");

 });
 
router.get("/twentydays", (req, res)=>
 {
    // res.sendFile(path.join(__dirname, "index.html"));
    res.render("index");

  });


module.exports = router;
