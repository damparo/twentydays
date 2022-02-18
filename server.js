const express = require('express');
const path = require('path');
const PORT = 8080;
const app = express();

// middleware to parse json requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// let's try to serve up the index page
// app.use('/index.html', express.static('index'));

// app.get('/twentydays', (req, res)=>{

//     res.status(200).sendFile('index.html', {html: } );


// })

app.get("/twentydays", (req, res)=>
 {
    res.sendFile(path.join(__dirname, "index.html"));


  });


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