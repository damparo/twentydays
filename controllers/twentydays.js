const express = require('express');
// const path = require('path')
const router = express.Router();

const twentyDays = require('../models/twentydays');




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

  router.post("/api/notes", function (req, res) {
    twentyDays.create(
      ["List_items"],
  
      [
        req.body.readyForDelivery
      ],
  
      function (res) {
        console.log(res);
      }
    );
  });

  router.get("/api/notes", function (req, res) {
    twentyDays.recieve(
      // ["todos"],
  
      function (result) {
        res.json(result)
      }
    );
  });

  router.delete("/api/notes/:deleteNote", function(req, res){

    const deleteThisNote = req.params.deleteNote;

    twentyDays.delete(
      deleteThisNote,
      function(result){

        console.log(result);

      }
    );




  })



module.exports = router;
