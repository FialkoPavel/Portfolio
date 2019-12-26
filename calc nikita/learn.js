function stopwatch(int) {
    let seconds = 0;
    let minutes = 0;
    let zero = 0;
    let minzero = 0;
    let start;
    let second = document.getElementById('second');

    function timer() {
        a.style.display = 'block';
        int = setInterval(() => {
            document.getElementById('second').innerHTML = `${minzero}${minutes} : ${zero}${seconds++}`;
            if (seconds === 60) {
                minutes++;
                seconds = 0;
            }
            (seconds > 9) ? zero = "" : zero = 0;
            (minutes > 9) ? minzero = "" : minzero = 0;
        }, 100);
    }

    document.getElementById('btn1').addEventListener('click', function () {
        timer();
    });

    document.getElementById('btn2').addEventListener('click', function () {
        clearInterval(int);
    })

    let lap = document.getElementById('lap');

    let a = document.getElementById('btn3');
    a.style.display = 'none';
    a.addEventListener('click', function () {
        lap.innerHTML += `<li class="list-item">${minzero}${minutes} : ${zero}${seconds++}</li>`;
    })
}
stopwatch();