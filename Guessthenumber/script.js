let number = Math.floor(100*Math.random())+1;
console.log(number);

let count = 5;

document.querySelector('#check').onclick = function() {
    
    if(count > 0) {
    
        let userNum = document.querySelector('#number').value;
        userNum = parseInt(userNum);
        let out = document.querySelector('#out');

        if (userNum == number) {
            out.innerHTML = "Yes, you guessed it!";
        } else if (userNum > number) {
            out.innerHTML = "Too much";
        } else if (userNum < number) {
            out.innerHTML = "Not enough...";
        }
        count = count - 1;
        document.querySelector('#count').innerHTML = 'Attempts left ' + count;
       
       
    }
    else {
        alert('You loooose!');
        location.reload();
    }
}