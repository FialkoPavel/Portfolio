let numberValue = document.querySelector('.number-input'); 
let answerValue = document.querySelector('.answer-input'); 
 
function inCkeck() {
        if (!Number(numberValue.value)) {
            result = "Not a number";
            answerValue.value = result;;
        } 
} 

document.querySelector('.button').onclick = function() {
    
let num = numberValue.value;
let result;

if(num == 1) {
    result = '1? Really?!';
    answerValue.value = result;
} else if (num == 2 || num == 3 || num == 5) { 
    result = 'Prime number';
    answerValue.value = result;  
} else if (num % 2 === 0 || num % 3 === 0 || num % 5 === 0) {
    result = 'Сomposite number';
    answerValue.value = result; 
} else {
    result = 'Prime number';
    answerValue.value = result; 
} 
    inCkeck();
}



//function prime(num){
// if(num == 1) return 'Eдиница не составное число, но и простым его назвать нельзя';
// var t = num / 2;
// var k = 2;
// while(k <= t) {
//   if(num % k == 0) {
//      return 'Составное число';
//   } else {
//   k++;  
//  }
// }
//  return 'Простое число';
//}
//console.log(prime(15));
