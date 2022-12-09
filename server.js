// import express library
const express = require('express');
// import body-parser
const bodyParser = require('body-parser');
// make an instance of an express server
const app = express();
// tell server to run on port 5000
const PORT = 5000;

// This must be added before GET & POST routes.
app.use(bodyParser.urlencoded({extended:true}))

// tells server where to find static assets (HTML, CSS, Client JS)
app.use(express.static('server/public'));

// start the server
app.listen(PORT, () => {
    console.log ('Server is running on port', PORT)
  })