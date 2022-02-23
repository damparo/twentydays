const express = require('express');
// const path = require('path');
const PORT = process.env.PORT || 8080;
const app = express();

// middleware to parse json requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/public', express.static('public'));

// set the view engine
const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }));

app.set('view engine', 'handlebars');

// POST route build
const router = require('./controllers/twentydays');

app.use(router);

app.listen(
    PORT,
    () => {
        console.log(`it's working! on http://localhost:${PORT}`)
    }
)