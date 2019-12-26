// let button2 = document.getElementById('btn2');
// let right = 0;
//
// button2.addEventListener('click', function () {
//     let sliderRight = document.getElementById('slider');
//     right = right - 265;
//     if (right < 795) {
//         right = 0;
//     }
//     sliderRight.style.right = right + 'px';
// });

// let button1 = document.getElementById('btn1');
// let left = 0;
//
// button1.addEventListener('click', function () {
//     let sliderLeft = document.getElementById('slider');
//     left = left - 291;
//     if (left < -873) {
//         left = 0;
//     }
//     sliderLeft.style.left = left + 'px';
// });

// скрываем цитаты

let circleBtn = document.querySelector('#btn-circle');
let circleBtn1 = document.querySelector('#btn-circle1');
let circleBtn2 = document.querySelector('#btn-circle2');

let phrase = document.querySelector('#com-seven-lorem');
let phrase1 = document.querySelector('#com-seven-lorem1');
let phrase2 = document.querySelector('#com-seven-lorem2');

phrase1.style.display = 'none';
phrase2.style.display = 'none';

circleBtn.addEventListener('click', function () {
    phrase.style.display = 'block';
    phrase1.style.display = 'none';
    phrase2.style.display = 'none';

});

circleBtn1.addEventListener('click', function () {
    phrase.style.display = 'none';
    phrase1.style.display = 'block';
    phrase2.style.display = 'none';
});

circleBtn2.addEventListener('click', function () {
    phrase.style.display = 'none';
    phrase1.style.display = 'none';
    phrase2.style.display = 'block';
});


