
var operatoinButtons = document.getElementsByClassName('operation-button');

var input1 = document.getElementById('number1');
var input2 = document.getElementById('number2');


function  makeOperation(operationCode) {
    var number1 =Number(input1.value);
    var number2 =Number(input2.value);
    if (operationCode === '+') {
        var result = number1 + number2;
    } else if (operationCode === '-'){
        var result = number1 - number2;
    } else if (operationCode === '*'){
        var result = number1 * number2;
    } else if (operationCode === '/'){
        var result = number1 / number2;
    } else  {
        window.alert('operation is unknou');
    }
    var imputResult = document.getElementById('result');
    imputResult.value = result;
         
}
function onOperationButtonClick(eventObject) {
    var clickedElement = eventObject.currentTarget;
    var operation = clickedElement.innerHTML;
    makeOperation(operation);
}

for (var i = 0; i < operatoinButtons.length; i++) {
    var button = operatoinButtons[i];
    button.addEventListener('click',onOperationButtonClick);
}

