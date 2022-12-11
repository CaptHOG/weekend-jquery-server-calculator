$(document).ready(onReady);

let operator = "";

function onReady() {
    console.log('DOM is ready');
    $('#equalsButton').on('click', equalsButton);
    $('#clearInputsButton').on('click', clearInputs);
    $('.button').on('click', function(){
        operator = $(this).html();
    })
}

function equalsButton() {
    postCalculation();
    fetchAndRenderCalculations();
}

function fetchAndRenderCalculations() {
    // GET calculations from server
    $.ajax({
      url: '/calculations',
      method: 'GET'
    }).then((response) => {
      console.log('server sent us:', response);
      $('#recentEquation').empty();
      for (let calculation of response) {
        $('#answerValue').empty();
        $('#answerValue').append(`${calculation.result}`);
        $('#recentEquation').append(`
        <tr>
            <td>${calculation.numOne} ${calculation.operator} ${calculation.numTwo} = ${calculation.result}</td>
        </tr>
        `)
      }
    })
}

function postCalculation() {
    // get the values from the inputs
    let firstInputValue = $('#firstInput').val();
    let secondInputValue = $('#secondInput').val();
  
    // // make the object that we want to send to our server
    let inputValues =
        {
            numOne: firstInputValue,
            numTwo: secondInputValue,
            operator: operator
        };
    console.log(inputValues);
  
    $('#firstInput').val('');
    $('#secondInput').val('');

    // POST object to server
    $.ajax({
      url: '/calculations',
      method: 'POST',
      data: inputValues
    }).then((response) => {
      console.log('POST /calculations sent us this:', response)
    })

    //fetchAndRenderCalculations();
}

function clearInputs() {
    $('#firstInput').val('');
    $('#secondInput').val('');
    operator = "";
}