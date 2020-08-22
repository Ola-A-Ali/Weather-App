// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Dependencies */
const bodyParser = require('body-parser');

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
const { get } = require('http');
app.use(cors());

// Initialize the main project folder
// same name as folder containg server files
app.use(express.static('website'));

// Spin up the server

// Callback to debug

// Initialize all route with a callback function

  
  // Callback function to complete GET '/all'
app.get('/all', function (req, res) {
    res.send(projectData);
  });

// Post Route  
  
  //add
app.post('/add', function (req, res) {
    newEntry = {
        newDate: req.body.newDate,
        NewTemp: req.body.NewTemp,
        feelings: req.body.feelings
      }
    
    projectData = newEntry;
    res.send(projectData);
    console.log(JSON.stringify(projectData) + " project dataa");
    console.log(req.body);

  });
  

// Setup Server
const port = 2345;
const server = app.listen(port, function(){
    console.log(`running on localhost: ${port}`);
});
