const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

//middleware setup

app.use(cors());
app.use(bodyParser.json());

//basic route set up 

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// start the server

app.listen(port,() =>{
    console.log('Congragulations!, The server is running on http://localhost:${port}');
    
});