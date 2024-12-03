const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 3000;

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

//API routes


app.get('/api/jobs', (req,res) => {
    res.json([
        {id: 1, title:'software Developer', location: 'Berlin'},
        {id:2, title: 'project manager', location: 'munich'}
    ])

});

//  send the React app for any other route

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'job/build', 'index.html'));
});

// start the server

app.listen(port,() =>{

    console.log(`Congragulations!, The server is running on http://localhost:${port}`);
    
});