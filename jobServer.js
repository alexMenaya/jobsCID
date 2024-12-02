const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

//const frontendservice = require('./job/src/App.js')
const path = require('path');

const app = express();
const port = 5000;

//middleware setup

app.use(cors());
app.use(bodyParser.json());

// Have Node serve the files for our built React app
//This code will first allow Node to access our built React project using the express.static function for static files.
app.use(express.static(path.resolve(__dirname, 'job/build')));

//basic route set up 
// Handle GET requests to /api route
// All other GET requests not handled before will return our React app
//And if a GET request comes in that is not handled by our /api route, our server will respond with our React app.
//come a lot soon 

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'job/build', 'index.html'));
});

// start the server

app.listen(port,() =>{

    console.log(`Congragulations!, The server is running on http://localhost:${port}`);
    
});