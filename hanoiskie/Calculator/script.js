var firstNumEl, operatorEl, secondNumEl, resultEl, firstNum, operatorSign, secondNum, result;

firstNumEl=document.querySelector('.first-num');
operatorEl=document.querySelector('.operator');
secondNumEl=document.querySelector('.second-num');
resultEl=document.querySelector('.result');

function inCkeck() {
    if (!Number(firstNumEl.value) || !Number(secondNumEl.value)) {
        result = "Not a number";
        return false;
    }
    return true;
}

document.querySelector('.equals-to').onclick = function() {
    operatorSign = operatorEl.value;

    if (inCkeck()) {

        switch (operatorSign){
            case "+":
                result = Number(firstNumEl.value) + Number(secondNumEl.value);
                break;
            case "-":
                result = firstNumEl.value - secondNumEl.value;
                break;
            case "*":
            case "x":
                result = firstNumEl.value * secondNumEl.value;
                break;
            case "/":
                result = firstNumEl.value / secondNumEl.value;
                break;
//    case "%":
//        ostatok = firstNumber % secondNumber;
//        result = firstNumEl.value / secondNumEl.value;
//        break;
            case "^":           /*  возведение в степень */
                result = Math.pow(firstNumEl.value, secondNumEl.value);
                break;
            case "!":           /*  факториал */
                getFact();
                break;
            default:
                result = 'Does nothing';
        }
    }
    resultEl.value = result;
}


function getFact() {
//  1. is there anything at all?
    var num = firstNumEl.value;
    firstNum = parseInt(num);
    if (firstNum < 0) result = 'No factorial of negative';
    else if (firstNum !== parseFloat(num)) result = 'No factorial of float';
    else if (firstNum === 0) result = 1;
    else {
        result = 1;
        for (var i = firstNum; i > 1; i--) {
            result = result * i;
        }
    }
};



//if (firstNumber >= 1000 && secondNumber >= 1000) {
//    console.log('У вас мегаломания');
//} else if (firstNumber <= 0 || secondNumber <= 0){
//    console.log('Вам надо повеселиться');
//} else {
//    console.log('С вами все впорядке!');
//}
