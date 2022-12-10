$(document).ready(onReady);

function onReady() {
    console.log('DOM is ready');
    //fetchAndRenderCalculations();
    $('#equalsButton').on('click', postCalculation);
    $('#clearInputsButton').on('click', clearInputs);
}

function fetchAndRenderCalculations() {
    // ask server for calculations
    $.ajax({
      url: '/calculations',
      method: 'GET'
    }).then((calculations) => {
      console.log('server sent us:', calculations);
    })
}

function postCalculation() {
    // get the values from the inputs
    let firstInputValue = $('#firstInput').val();
    let secondInputValue = $('#secondInput').val();
    //let result = firstInputValue + secondInputValue;
  
    // // make the object that we want to send to our server
    let inputValues = [
        {
            numOne: firstInputValue,
            numTwo: secondInputValue,
        }
    ];
    console.log(inputValues);
  
    $.ajax({
      url: '/calculations',
      method: 'POST',
      data: inputValues
    }).then((response) => {
      console.log('POST /calculations sent us this:', response)
    })
}

function clearInputs() {
    console.log('clearInputs');
    $('#firstInput').val('');
    $('#secondInput').val('');
}