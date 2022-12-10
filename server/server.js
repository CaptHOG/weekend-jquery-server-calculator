const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = 5000;

let calculations = require('./modules/calculations.js');

// This must be added before GET & POST routes.
app.use(bodyParser.urlencoded({extended:true}))

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));


// GET route for /calculations
// app.get('/calculations', (req, res) => {
//     console.log('GET', calculations);
//     res.send(calculations);
// });

// POST route
app.post('/calculations', (req, res) => {
    console.log('POST /calculations')
    calculations.push(req.body);
    res.sendStatus(201);
  })

// starts server
app.listen(PORT, () => {
    console.log ('Server is running on port', PORT)
  })