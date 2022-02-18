const express = require('express');
const PORT = 8080;

const app = express();

app.listen(
    PORT,
    () => {
        console.log(`it's working! on http://localhost${PORT}`)
    }
)