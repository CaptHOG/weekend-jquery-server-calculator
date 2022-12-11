const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = 5000;
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('server/public'));

let calculations = [
    {
        numOne: 1,
        numTwo: 1,
        operator: '+',
        result: 2
    }
];
let inputValues = [];



// create a GET route with address /calculations
app.get('/calculations', (req, res) => {
    // send the calculations array to the client:
    console.log('GET /calculations')
    console.log(calculations);
    res.send(calculations);
  })

// POST route
app.post('/calculations', (req, res) => {
    // this allows the data to be used server side
    let numOne = req.body.numOne;
    let numTwo = req.body.numTwo;
    let operator = req.body.operator;

    switch (operator) {
        case "+": 
        result = Number(numOne) + Number(numTwo);
        break;
        case "-": 
        result = Number(numOne) - Number(numTwo);
        break;
        case "*": 
        result = Number(numOne) * Number(numTwo);
        break;
        case "/": 
        result = Number(numOne) / Number(numTwo);
        break;
    }

    inputValues = 
    {
        numOne: numOne,
        numTwo: numTwo,
        operator: operator,
        result: result
    }

    calculations.push(inputValues);

    res.send(inputValues);
  })

// starts server
app.listen(PORT, () => {
    console.log ('Server is running on port', PORT)
  })