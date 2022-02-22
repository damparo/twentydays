const express = require('express');
const path = require('path');
const PORT = 8080;
const app = express();

// middleware to parse json requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/public", express.static("public"));


// serve main page using this url endpoint
app.get("/", (req, res)=>
{
   res.sendFile(path.join(__dirname, "index.html"));

 });
 
app.get("/twentydays", (req, res)=>
 {
    res.sendFile(path.join(__dirname, "index.html"));

  });

 
// POST route build

// app.get('/starwars', (req, res)=>{

//     res.status(200).send({

//         starwars: 'Captain Rex',
//         jedi: 'ahosoka tano',
//         formerSith: 'darth maul'

//     })

// });




app.listen(
    PORT,
    () => {
        console.log(`it's working! on http://localhost:${PORT}`)
    }
)